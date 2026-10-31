import * as THREE from 'three';

export class ParticleField {
  public points: THREE.Points;
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  private count: number = 1200;
  private positions: Float32Array;
  private colors: Float32Array;
  private initialY: Float32Array;

  constructor() {
    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array(this.count * 3);
    this.colors = new Float32Array(this.count * 3);
    this.initialY = new Float32Array(this.count);

    const cyan = new THREE.Color(0x00f0ff);
    const blue = new THREE.Color(0x0077ff);
    const emerald = new THREE.Color(0x00ffaa);

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;
      // Spread across wide 3D space
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20 - 2;

      this.positions[i3] = x;
      this.positions[i3 + 1] = y;
      this.positions[i3 + 2] = z;
      this.initialY[i] = y;

      // Color variation between cyan, blue, emerald
      const rand = Math.random();
      const chosenColor = rand > 0.6 ? cyan : rand > 0.25 ? blue : emerald;

      this.colors[i3] = chosenColor.r;
      this.colors[i3 + 1] = chosenColor.g;
      this.colors[i3 + 2] = chosenColor.b;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    this.material = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.points = new THREE.Points(this.geometry, this.material);
  }

  public update(mouseX: number, mouseY: number, time: number) {
    const pos = this.geometry.attributes.position.array as Float32Array;

    // Parallax shift based on mouse
    this.points.rotation.y = mouseX * 0.15;
    this.points.rotation.x = -mouseY * 0.15;

    // Gentle particle vertical breathing/drift
    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;
      pos[i3 + 1] = this.initialY[i] + Math.sin(time * 0.5 + pos[i3]) * 0.25;
    }

    this.geometry.attributes.position.needsUpdate = true;
  }

  public dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
