import * as THREE from 'three';

export class TechSphere {
  public group: THREE.Group;

  // Visual sub-elements
  private crystalCore: THREE.Mesh;
  private wireframeGlobe: THREE.Mesh;
  private globeNodes: THREE.Points;
  private orbitalRing1: THREE.Mesh;
  private orbitalRing2: THREE.Mesh;
  private satellites: THREE.Mesh[] = [];

  private clock = new THREE.Clock();
  private basePosition = new THREE.Vector3(2.1, 0, 0);

  constructor() {
    this.group = new THREE.Group();

    // 1. Faceted Glass Crystal Core (Refractive Quantum Core)
    const coreGeo = new THREE.IcosahedronGeometry(0.95, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a84ff,
      emissive: 0x001a44,
      emissiveIntensity: 0.8,
      roughness: 0.12,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.5,
      transparent: true,
      opacity: 0.92,
      flatShading: true
    });
    this.crystalCore = new THREE.Mesh(coreGeo, coreMat);
    this.group.add(this.crystalCore);

    // 2. Holographic Latitude/Longitude Wireframe Cage
    const globeGeo = new THREE.SphereGeometry(1.4, 18, 12);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    this.wireframeGlobe = new THREE.Mesh(globeGeo, globeMat);
    this.group.add(this.wireframeGlobe);

    // 3. Glowing Corner Nodes on the Globe Cage
    const nodeMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.065,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.globeNodes = new THREE.Points(globeGeo, nodeMat);
    this.group.add(this.globeNodes);

    // 4. Primary Gyroscopic Orbital Ring
    const ring1Geo = new THREE.TorusGeometry(1.9, 0.02, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x007799,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9
    });
    this.orbitalRing1 = new THREE.Mesh(ring1Geo, ring1Mat);
    this.orbitalRing1.rotation.x = Math.PI / 4;
    this.group.add(this.orbitalRing1);

    // 5. Secondary Gyroscopic Orbital Ring
    const ring2Geo = new THREE.TorusGeometry(2.15, 0.016, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x0a84ff,
      emissive: 0x002277,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.9
    });
    this.orbitalRing2 = new THREE.Mesh(ring2Geo, ring2Mat);
    this.orbitalRing2.rotation.y = -Math.PI / 3;
    this.group.add(this.orbitalRing2);

    // 6. Orbiting Satellites
    const satGeo = new THREE.SphereGeometry(0.065, 12, 12);
    const satColors = [0x00e5ff, 0x30d158, 0x0a84ff];

    for (let i = 0; i < 3; i++) {
      const satMat = new THREE.MeshStandardMaterial({
        color: satColors[i],
        emissive: satColors[i],
        emissiveIntensity: 1.2,
        roughness: 0.1,
        metalness: 0.8
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      this.satellites.push(sat);
      this.group.add(sat);
    }

    // Default right-offset position
    this.group.position.copy(this.basePosition);
  }

  public update(mouseX: number, mouseY: number, scrollProgress: number, isMobile: boolean) {
    const elapsed = this.clock.getElapsedTime();

    // 1. Position adjustment: right side on desktop, centered on mobile
    if (isMobile) {
      this.group.position.set(0, -0.2, 0);
      this.group.scale.set(0.78, 0.78, 0.78);
    } else {
      this.group.position.set(2.1, 0, 0);
      this.group.scale.set(1.0, 1.0, 1.0);
    }

    // 2. Crystal Core Rotation & Breathing
    this.crystalCore.rotation.x = elapsed * 0.25;
    this.crystalCore.rotation.y = -elapsed * 0.35;
    const pulse = 1 + Math.sin(elapsed * 2.0) * 0.05;
    this.crystalCore.scale.set(pulse, pulse, pulse);

    // 3. Holographic Globe Rotation
    this.wireframeGlobe.rotation.y = elapsed * 0.18;
    this.wireframeGlobe.rotation.z = Math.sin(elapsed * 0.1) * 0.15;
    this.globeNodes.rotation.copy(this.wireframeGlobe.rotation);

    // 4. Gyroscopic Rings
    this.orbitalRing1.rotation.z = elapsed * 0.45;
    this.orbitalRing2.rotation.x = elapsed * 0.35;

    // 5. Orbiting Satellites on mathematical trajectories
    for (let i = 0; i < this.satellites.length; i++) {
      const sat = this.satellites[i];
      const radius = 1.9 + i * 0.25;
      const speed = (0.7 + i * 0.3) * (i % 2 === 0 ? 1 : -1);
      const angle = elapsed * speed + (i * Math.PI * 2) / 3;

      const tilt = (i * Math.PI) / 4;
      sat.position.x = Math.cos(angle) * radius;
      sat.position.y = Math.sin(angle) * radius * Math.cos(tilt);
      sat.position.z = Math.sin(angle) * radius * Math.sin(tilt);
    }

    // 6. Smooth Mouse Parallax Tilt
    const targetRotX = -mouseY * 0.25;
    const targetRotY = mouseX * 0.35;
    this.group.rotation.x += (targetRotX - this.group.rotation.x) * 0.05;
    this.group.rotation.y += (targetRotY - this.group.rotation.y) * 0.05;

    // 7. Scroll Glide
    this.group.position.y -= scrollProgress * 1.5;
  }

  public dispose() {
    this.crystalCore.geometry.dispose();
    (this.crystalCore.material as THREE.Material).dispose();

    this.wireframeGlobe.geometry.dispose();
    (this.wireframeGlobe.material as THREE.Material).dispose();

    this.globeNodes.geometry.dispose();
    (this.globeNodes.material as THREE.Material).dispose();

    this.orbitalRing1.geometry.dispose();
    (this.orbitalRing1.material as THREE.Material).dispose();

    this.orbitalRing2.geometry.dispose();
    (this.orbitalRing2.material as THREE.Material).dispose();

    for (const sat of this.satellites) {
      sat.geometry.dispose();
      (sat.material as THREE.Material).dispose();
    }
  }
}
