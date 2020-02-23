import * as THREE from 'three';
import planeToScreen from './utils/planeToScreen';

export default class Twister {
  constructor(stretchPlane, bgCamera) {
    this.stretchPlanes = [stretchPlane];
    this.r = 3;
    this.angle = 0;

    this.screenDim = planeToScreen(
      bgCamera,
      0,
      window.innerWidth,
      window.innerHeight
    );
    console.log('this.screenDim:  ', this.screenDim);
  }

  checkTopEdge(plane) {
    if (plane.mesh.position.y > this.screenDim.height / 2) {
      plane.mesh.position.y = -this.screenDim.height / 2;
    }
  }

  checkBottomEdge(plane) {}

  isGoingUp(wheelDelta) {
    return wheelDelta > 0 ? true : false;
  }

  update(time, wheelDelta) {
    wheelDelta *= 0.005;
    this.angle = (this.angle + wheelDelta) % (4 * Math.PI + Math.PI * 0.25);
    console.log(THREE.Math.radToDeg(this.angle));

    for (let i = 0; i < this.stretchPlanes.length; i++) {
      let plane = this.stretchPlanes[i];

      // check edges
      if (this.isGoingUp(wheelDelta)) {
        this.checkTopEdge(plane);
      } else {
        this.checkBottomEdge(plane);
      }

      // position the plane
      plane.mesh.position.x = this.r * Math.cos(this.angle);
      plane.mesh.position.z = this.r * Math.sin(this.angle);
      plane.mesh.position.y = THREE.Math.mapLinear(
        this.angle,
        Math.PI * 0.25,
        4 * Math.PI + Math.PI * 0.25,
        -this.screenDim.height,
        this.screenDim.height
      );

      plane.mesh.rotation.y = -this.angle + Math.PI * 0.5;
    }
  }
}
