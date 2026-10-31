import * as THREE from 'three';
import { QuantumCore } from './quantumCore';
import { ParticleField } from './particleField';

export class SceneManager {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private quantumCore: QuantumCore;
  private particleField: ParticleField;

  private mouseX: number = 0;
  private mouseY: number = 0;
  private targetMouseX: number = 0;
  private targetMouseY: number = 0;

  private scrollProgress: number = 0;
  private isRunning: boolean = true;
  private animationFrameId: number | null = null;
  private clock = new THREE.Clock();

  constructor(containerId: string) {
    const el = document.getElementById(containerId);
    if (!el) {
      throw new Error(`WebGL container #${containerId} not found`);
    }
    this.container = el;

    // 1. Scene
    this.scene = new THREE.Scene();

    // 2. Camera
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 5.5);

    // 3. Renderer with performance optimizations
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    // Clear previous children and append canvas
    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    // 4. Lighting
    this.setupLighting();

    // 5. Meshes
    this.quantumCore = new QuantumCore();
    this.scene.add(this.quantumCore.group);

    this.particleField = new ParticleField();
    this.scene.add(this.particleField.points);

    // 6. Event Listeners
    this.initEventListeners();

    // 7. Start Render Loop
    this.animate = this.animate.bind(this);
    this.animate();
  }

  private setupLighting() {
    // Ambient cyan atmospheric wash
    const ambientLight = new THREE.AmbientLight(0x00f0ff, 0.6);
    this.scene.add(ambientLight);

    // Key directional light
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 5, 5);
    this.scene.add(keyLight);

    // Cyber Cyan Rim Light
    const cyanLight = new THREE.PointLight(0x00f0ff, 3, 20);
    cyanLight.position.set(3, 2, 3);
    this.scene.add(cyanLight);

    // Electric Blue Fill Light
    const blueLight = new THREE.PointLight(0x0077ff, 2.5, 20);
    blueLight.position.set(-3, -2, 2);
    this.scene.add(blueLight);

    // Magenta accent light
    const pinkLight = new THREE.PointLight(0xff0055, 1.8, 15);
    pinkLight.position.set(0, -3, 3);
    this.scene.add(pinkLight);
  }

  private initEventListeners() {
    // Window Resize
    window.addEventListener('resize', this.onWindowResize.bind(this));

    // Mouse Tracking (Normalized -1 to 1)
    window.addEventListener('mousemove', (e) => {
      this.targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      this.targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Touch Support for mobile parallax
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.targetMouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        this.targetMouseY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    });

    // Scroll Tracking
    window.addEventListener('scroll', () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
    });

    // Visibility change lifecycle guard (saves battery/GPU when tab is unfocused)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.isRunning = false;
        if (this.animationFrameId !== null) {
          cancelAnimationFrame(this.animationFrameId);
          this.animationFrameId = null;
        }
      } else {
        this.isRunning = true;
        this.clock.start();
        this.animate();
      }
    });
  }

  private onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  private animate() {
    if (!this.isRunning) return;

    this.animationFrameId = requestAnimationFrame(this.animate);

    const elapsed = this.clock.getElapsedTime();

    // Smooth inertial lerp for mouse coordinates
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      // Update Quantum Core
      this.quantumCore.update(this.mouseX, this.mouseY, this.scrollProgress);

      // Update Particle Constellation
      this.particleField.update(this.mouseX, this.mouseY, elapsed);

      // Subtle camera parallax motion
      this.camera.position.x = this.mouseX * 0.35;
      this.camera.position.y = this.mouseY * 0.25 - this.scrollProgress * 1.5;
    }

    this.renderer.render(this.scene, this.camera);
  }

  public dispose() {
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.onWindowResize.bind(this));
    this.quantumCore.dispose();
    this.particleField.dispose();
    this.renderer.dispose();
  }
}
