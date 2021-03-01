const canvas = document.querySelector("#renderCanvas")
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
let   scene =  new BABYLON.Scene(engine);

var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.maxZ = 100;
camera.minZ = 1 ;

let light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(1, 0, 0), scene);
light.setPosition(0,0,-10);
const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);

engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});