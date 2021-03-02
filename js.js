let random_num = Math.random();
const SPEED = 0.3;
const OFFSET = 0.01;

const canvas = document.querySelector("#renderCanvas")
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
let   scene =  new BABYLON.Scene(engine);

var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.maxZ = 100;
camera.minZ = 1 ;

let light = new BABYLON.PointLight("DirectionalLight", new BABYLON.Vector3(0, 0, -11), scene);

const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
box.position.z = 90;

engine.runRenderLoop(function () {
    
    box.position.z -= 1*SPEED;
    if (box.position.z<=-10) {
        box.position = new BABYLON.Vector3(0,0,90);
        random_num = Math.random();
        console.log(random_num);
    }
    
    if (random_num<0.25){
        box.position.x += OFFSET;
    } else if (random_num>=0.25 && random_num<0.5){
        box.position.x -= OFFSET;
    } else if (random_num>=0.5 && random_num<0.75){
        box.position.y += OFFSET;
    } else {
        box.position.y -= OFFSET;
    }
        

    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});