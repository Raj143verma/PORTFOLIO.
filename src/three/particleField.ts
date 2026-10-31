import * as THREE from 'three';

export class ParticleField {
  public points: THREE.Points;
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  private count: number = 450;
  private positions: Float32Array;
  private colors: Float32Array;
  private initialY: Float32Array;

  constructor() {
    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array(this.count * 3);
    this.colors = new Float32Array(this.count * 3);
    this.initialY = new Float32Array(this.count);

    const cyan = new THREE.Color(0x00e5ff);
    const blue = new THREE.Color(0x0a84ff);

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;
      // Spread into deep background space
      const x = (Math.random() - 0.5) * 32;
      const y = (Math.random() - 0.5) * 22;
      const z = -4 - Math.random() * 20;

      this.positions[i3] = x;
      this.positions[i3 + 1] = y;
      this.positions[i3 + 2] = z;
      this.initialY[i] = y;

      const chosenColor = Math.random() > 0.4 ? cyan : blue;
      this.colors[i3] = chosenColor.r;
      this.colors[i3 + 1] = chosenColor.g;
      this.colors[i3 + 2] = chosenColor.b;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    this.material = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.points = new THREE.Points(this.geometry, this.material);
  }

  public update(mouseX: number, mouseY: number, time: number) {
    const pos = this.geometry.attributes.position.array as Float32Array;

    // Subtle parallax
    this.points.rotation.y = mouseX * 0.08;
    this.points.rotation.x = -mouseY * 0.08;

    // Gentle floating
    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;
      pos[i3 + 1] = this.initialY[i] + Math.sin(time * 0.35 + pos[i3]) * 0.2;
    }

    this.geometry.attributes.position.needsUpdate = true;
  }

  public dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
