import * as THREE from 'three';
import glslify from 'glslify';
import planeFrag from '../shaders/plane.frag';
import planeVert from '../shaders/plane.vert';

export default class StretchPlane {
  constructor(scene) {
    this.scene = scene;

    this.init();
  }

  init() {
    this.geo = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
    console.log('stretch plane geo:  ', this.geo);

    this.uniforms = {
      uTexture: {
        value: null
      },
      uOffset: {
        value: new THREE.Vector2(0.0, 0.0)
      },
      uOffsetX: {
        value: 0.0
      },
      uAlpha: {
        value: 1
      },
      uTime: {
        value: 0.0
      }
    };

    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: glslify(planeVert),
      fragmentShader: glslify(planeFrag),
      transparent: true,
      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(this.geo, this.material);
    this.mesh.add(new THREE.AxesHelper());

    this.scene.add(this.mesh);
  }

  update(time, wheelDelta) {
    this.mesh.material.uniforms.uTime.value = time;
    this.mesh.material.uniforms.uOffsetX.value = wheelDelta;
  }
}
