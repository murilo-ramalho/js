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

const geometria = new THREE.BoxGeometry(50, 1, 20);
const materialchao = new THREE.MeshBasicMaterial({color:0x006400});
const chao = new THREE.Mesh(geometria, materialchao);
scene.add(chao);
chao.position.y -= 1.5;

camera.position.z = 4;

//loop de renderização, animação ou movimento
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.05;
    renderer.render(scene,camera);
}
document.addEventListener("keydown", mover);

function mover(event) {
        switch (event.keyCode) {
            case 37: //left 
                camera.rotation.y += 0.1;
                break;
            case 38: //up
                camera.rotation.x += 0.1;
                break;
            case 39: //right 
                camera.rotation.y -= 0.1;
                break;
            case 40: //dowm
                camera.rotation.x -= 0.1;
                break;
            case 87: // andar pra frente
                camera.position.z -= 0.1
                break; 
            case 83: // andar pra traz
                camera.position.z += 0.1
                break; 
            case 68: // andar pro lado direito
                camera.position.x += 0.1
                break; 
            case 65: // andar pro lado esquerdo
                camera.position.x -= 0.1
                break;
            default:
                break;
        }
};

//inicio do movimento
animate();