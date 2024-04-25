import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 从threejs扩展库引入gui.js
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
const gui = new GUI();//创建GUI对象 
gui.domElement.style.left = '0px';
gui.domElement.style.width = '300px';

//场景
const scene = new THREE.Scene();
//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(600);
scene.add(axesHelper);

// 一个网格模型
const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
const material = new THREE.MeshLambertMaterial({ color: 0xc98a31 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);



gui.addColor(material, 'color').onChange(function (value) {
  mesh.material.color.set(value);
}).name('球体颜色');


//光源设置
const directionalLight = new THREE.DirectionalLight(0xdd1d1d, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);

const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

gui.addColor(directionalLight, 'color').onChange(function (value) {
  directionalLight.color.set(value);
}).name('平行光');
gui.add(directionalLight, 'intensity', 0, 2.0).name('平行光强度');


gui.addColor(ambient, 'color').onChange(function (value) {
  ambient.color.set(value);
}).name('环境光');

gui.add(ambient, 'intensity', 0, 1.0).name('环境光强度');


// 通过GUI改变mesh.position对象的xyz属性
gui.add(mesh.position, 'x', 0, 180);
gui.add(mesh.position, 'y', 0, 180);
gui.add(mesh.position, 'z', 0, 180);


const obj = {
  scale: 0,
};
// 参数3数据类型：对象(下拉菜单)
gui.add(obj, 'scale', {
  left: -100,
  center: 0,
  right: 100
}).name('位置选择').onChange(function (value) {
  mesh.position.x = value;
});


//渲染器和相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(292, 223, 185);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);



// 渲染循环
function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();


const controls = new OrbitControls(camera, renderer.domElement);

// 画布跟随窗口变化
window.onresize = function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};