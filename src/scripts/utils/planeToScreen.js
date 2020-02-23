// return height and width of plane that covers viewport at the given plane z position
export default (camera, planeZ, viewWidth, viewHeight) => {
  const cameraZ = camera.position.z;
  const distance = cameraZ - planeZ;
  const aspect = viewWidth / viewHeight;
  const vFov = (camera.fov * Math.PI) / 180;
  const height = 2 * Math.tan(vFov / 2) * distance;
  const width = height * aspect;

  return {
    width,
    height
  };
};
