uniform float u_time;

varying vec2 vUv;


void main() {
  vec3 pos = position;
  vUv = uv;
  pos.z = pos.z + sin(u_time);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
}