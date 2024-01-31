import * as THREE from 'three';

//scene
const scene = new THREE.Scene();

//sphere
const geometry = new THREE.SphereGeometry(3,64,64);
const material = new THREE.MeshStandardMaterial({
    color: '#0000ff',
})
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh)

//camera
const camera = new THREE.PerspectiveCamera(45, 800, 600)
scene.add(camera)

//renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(800,600);
renderer.render(scene,camera)