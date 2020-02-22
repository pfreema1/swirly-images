import * as THREE from 'three';

export default class Twister {
  constructor(stretchPlane) {
    this.stretchPlanes = [stretchPlane];
    this.r = 3;
    this.angle = 0;
  }

  update(time, wheelDelta) {
    wheelDelta *= 0.005;
    this.angle = (this.angle + wheelDelta) % (2 * Math.PI);
    for (let i = 0; i < this.stretchPlanes.length; i++) {
      let plane = this.stretchPlanes[i];

      plane.mesh.position.x = this.r * Math.cos(this.angle);
      plane.mesh.position.z = this.r * Math.sin(this.angle);

      plane.mesh.rotation.y = -this.angle + Math.PI * 0.5;
    }
  }
}
