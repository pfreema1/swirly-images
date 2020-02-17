uniform float uTime;

varying vec2 vUv;

vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
  float M_PI = 3.1415926535897932384626433832795;
  position.x = position.x + (sin(uv.y * M_PI) * offset.x);
  position.y = position.y + (sin(uv.x * M_PI) * offset.y);
  return position;
}

void main() {
  vec3 pos = position;
  vec2 offset = vec2(0.3, 0.0);

  vUv = uv;
  // vUv = uv + (offset * 2.0); // maybe this is how to stretch the image along with the geo?
  pos = deformationCurve(position, uv, offset);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
}