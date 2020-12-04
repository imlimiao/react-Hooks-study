import React from "react";

import * as THREE from "three";
/*
const sceneInit = (props: any) => {
  // 获取浏览器窗口的宽高，后续会用
  var width = window.innerWidth;
  var height = window.innerHeight;
  // 创建一个场景
  var scene = new THREE.Scene();
  // 创建一个具有透视效果的摄像机
  var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 800);
  // 设置摄像机位置，并将其朝向场景中心
  camera.position.x = 10;
  camera.position.y = 10;
  camera.position.z = 30;
  camera.lookAt(scene.position);
  // 创建一个 WebGL 渲染器，Three.js 还提供 <canvas>, <svg>, CSS3D 渲染器。
  var renderer = new THREE.WebGLRenderer();
  // 设置渲染器的清除颜色（即背景色）和尺寸。
  // 若想用 body 作为背景，则可以不设置 clearColor，然后在创建渲染器时设置 alpha: true，即 new THREE.WebGLRenderer({ alpha: true })
  renderer.setClearColor(0xffffff);
  renderer.setSize(width, height);
  // 创建一个长宽高均为 4 个单位长度的立方体（几何体）
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  // 创建材质（该材质不受光源影响）
  var cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });
  // 创建一个立方体网格（mesh）：将材质包裹在几何体上
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  // 设置网格的位置
  cube.position.x = 0;
  cube.position.y = -2;
  cube.position.z = 0;
  // 将立方体网格加入到场景中
  scene.add(cube);
  // 将渲染器的输出（此处是 canvas 元素）插入到 body 中
  document.body.appendChild(renderer.domElement);
  // 渲染，即摄像机拍下此刻的场景
  renderer.render(scene, camera);

  return (
    <div>
      <div id="canvas-frame"></div>
    </div>
  );
};*/

// 初始化,创建了一个场景
const sceneInit=()=>{
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshBasicMaterial( { color: 0xFFB6C1 } ); // 颜色是 十六进制的转换。
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  animate();
}

export default sceneInit;
