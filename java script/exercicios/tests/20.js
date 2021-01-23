// cena
const scene = new THREE.Scene();
// visão
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// renderização
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// objeto
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color:0x00ff00});
const cube = new THREE.Mesh(geometry,material);
scene.add(cube);

camera.position.z = 4;

//loop de renderização, animação ou movimento
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.05;
    renderer.render(scene,camera);
}
//inicio do movimento
animate();