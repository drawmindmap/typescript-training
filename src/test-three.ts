import {
  BoxGeometry,
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import { GUI } from 'dat.gui';
import { Test } from 'test';

// eslint-disable-next-line no-console
console.log(new Test('test'));

const scene = new Scene();
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);
const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const light = new DirectionalLight();

light.position.x = 3;
light.position.y = 2;
light.position.z = 1;
scene.add(light);

camera.position.x = 1;
camera.position.y = 2;
camera.position.z = 5;
camera.lookAt(0, 0, 0);

const geometry = new BoxGeometry(2, 2, 2);
const material = new MeshPhongMaterial({
  color: 'red',
});
const mesh = new Mesh(geometry, material);
scene.add(mesh);

function animate(): void {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

requestAnimationFrame(animate);

const gui = new GUI();
gui.addColor(material, 'color');
