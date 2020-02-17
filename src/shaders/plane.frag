uniform float uTime;
varying vec2 vUv;

void main() {
  vec3 color = vec3(0.0);

  
  color = vec3(vUv.x);

  gl_FragColor = vec4(color, 1.0);
}