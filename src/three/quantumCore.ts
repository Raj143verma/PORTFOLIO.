import * as THREE from 'three';

export class QuantumCore {
  public group: THREE.Group;
  private outerWireframe: THREE.Mesh;
  private innerCore: THREE.Mesh;
  private gyroRing1: THREE.Mesh;
  private gyroRing2: THREE.Mesh;
  private vertexNodes: THREE.Points;

  private clock = new THREE.Clock();

  constructor() {
    this.group = new THREE.Group();

    // 1. Outer Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.6,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85
    });
    this.outerWireframe = new THREE.Mesh(outerGeo, outerMat);
    this.group.add(this.outerWireframe);

    // 2. Vertex Glowing Points (Nodes on corners of the icosahedron)
    const pointsMat = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    this.vertexNodes = new THREE.Points(outerGeo, pointsMat);
    this.group.add(this.vertexNodes);

    // 3. Inner Energy Octahedron Core
    const innerGeo = new THREE.OctahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x0077ff,
      emissive: 0x002288,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
      flatShading: true,
      transparent: true,
      opacity: 0.9
    });
    this.innerCore = new THREE.Mesh(innerGeo, innerMat);
    this.group.add(this.innerCore);

    // 4. Gyroscopic Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.8
    });
    this.gyroRing1 = new THREE.Mesh(ringGeo1, ringMat1);
    this.group.add(this.gyroRing1);

    const ringGeo2 = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xff0055,
      emissive: 0xff0055,
      emissiveIntensity: 0.4,
      roughness: 0.3,
      metalness: 0.8
    });
    this.gyroRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    this.group.add(this.gyroRing2);

    // Initial position on screen (placed slightly right of center to complement left hero text on desktop)
    this.group.position.set(2.2, 0, 0);
  }

  public update(mouseX: number, mouseY: number, scrollProgress: number) {
    const elapsed = this.clock.getElapsedTime();

    // Rotate outer cage
    this.outerWireframe.rotation.x = elapsed * 0.25;
    this.outerWireframe.rotation.y = elapsed * 0.35;
    this.vertexNodes.rotation.x = elapsed * 0.25;
    this.vertexNodes.rotation.y = elapsed * 0.35;

    // Counter-rotate inner core & pulse scale
    this.innerCore.rotation.x = -elapsed * 0.4;
    this.innerCore.rotation.z = elapsed * 0.3;
    const pulse = 1 + Math.sin(elapsed * 2.5) * 0.08;
    this.innerCore.scale.set(pulse, pulse, pulse);

    // Gyro ring rotations
    this.gyroRing1.rotation.x = elapsed * 0.5;
    this.gyroRing1.rotation.y = elapsed * 0.3;

    this.gyroRing2.rotation.x = -elapsed * 0.35;
    this.gyroRing2.rotation.z = elapsed * 0.45;

    // Smooth cursor parallax tilt
    const targetRotX = mouseY * 0.45;
    const targetRotY = mouseX * 0.45;
    this.group.rotation.x += (targetRotX - this.group.rotation.x) * 0.05;
    this.group.rotation.y += (targetRotY - this.group.rotation.y) * 0.05;

    // Responsive repositioning based on window width
    const isMobile = window.innerWidth < 900;
    const baseTargetX = isMobile ? 0 : 2.2;
    const baseTargetY = isMobile ? -1.0 : 0;
    const baseScale = isMobile ? 0.75 : 1.0;

    // Scroll shift: move and rotate gently as user scrolls
    const scrollOffset = scrollProgress * 4;
    this.group.position.x = baseTargetX;
    this.group.position.y = baseTargetY - scrollOffset * 0.5;
    this.group.position.z = -scrollOffset * 0.8;

    this.group.scale.set(baseScale, baseScale, baseScale);
  }

  public dispose() {
    this.outerWireframe.geometry.dispose();
    (this.outerWireframe.material as THREE.Material).dispose();
    this.innerCore.geometry.dispose();
    (this.innerCore.material as THREE.Material).dispose();
    this.gyroRing1.geometry.dispose();
    (this.gyroRing1.material as THREE.Material).dispose();
    this.gyroRing2.geometry.dispose();
    (this.gyroRing2.material as THREE.Material).dispose();
    this.vertexNodes.geometry.dispose();
    (this.vertexNodes.material as THREE.Material).dispose();
  }
}
