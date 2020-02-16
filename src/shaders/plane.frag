uniform float u_time;
varying vec2 vUv;

void main() {
  vec3 color = vec3(vUv.x);

  

  gl_FragColor = vec4(color, 1.0);
}