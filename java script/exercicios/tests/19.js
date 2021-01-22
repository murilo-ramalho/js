function iniciar() {
    //variaveis feita para jogos
        //cena
    var scene = new THREE.Scene();
        //altura da tela
    var WIDTH = window.innerWidth; 
        //largura da tela
    var HEIGHT = window.innerHeight; 
        //pocição e visão da camera
    var camera = new THREE.PerspectiveCamera(75, 1, 1, 50);
        //rederizção do espaço
    var renderer = new THREE.WebGLRenderer({antilias:true});

    //posição da camera
    camera.position.z = 300;

    //renderização da cena
    renderer.setSize(500, 500);
    var show = document.querySelector('div');
    show.appendChild(renderer.domElement);

    //cor de fundo
    renderer.setClearColor(0x1F5A94);
    
    //objeto 3d
    var geometry = new THREE.BoxGeometry(200,200,200);

    //material do objeto
    var material = new THREE.MeshBasicMaterial({color:0xC9C097, wireframe: true});

    //cubo
    var cubo = new THREE.Mesh(geometry, material);

    //adicionando o cubo na jogo
    scene.add(cubo);

    //renderizando a camera com o jg
    renderer.render(scene, camera);

    //renderizamento do jg
    function render() {
        renderer.render(scene,camera);

        //movimentação do cubo
        cubo.rotation.z += 0.01;
        cubo.rotation.y += 0.01;
        cubo.rotation.x += 0.01;

        requestAnimationFrame(render);
    }

    //renderizando o jg
    render();
}