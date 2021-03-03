// const OFFSET = 0.01;
// const X_SCALING = 10;
// const Y_SCALING = 6;

const canvas = document.querySelector("#renderCanvas")
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
let   scene =  new BABYLON.Scene(engine);

var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.maxZ = 100;
camera.minZ = 1 ;

let light = new BABYLON.PointLight("DirectionalLight", new BABYLON.Vector3(0, 0, -11), scene);

const Mat = new BABYLON.StandardMaterial("Mat", scene);
Mat.diffuseColor = new BABYLON.Color3(0,1,0);

const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
box.position.z = 90;
box.material = Mat;

let random = generate_randomness();
box.position = new BABYLON.Vector3(random.X_OFFSET,random.Y_OFFSET,90);
box.scaling  = new BABYLON.Vector3(random.X_SCALE,random.Y_SCALE,random.Z_SCALE);

let points = [];
points.push(new BABYLON.Vector3(2, -2, 0));
points.push(new BABYLON.Vector3(2, 2, 0));
points.push(new BABYLON.Vector3(-2, 2, 0));
points.push(new BABYLON.Vector3(-2, -2, 0));
points.push(points[0]); //close the triangle;
let cube = BABYLON.MeshBuilder.CreateLines("triangle", {points: points})

points = [
    points.push(new BABYLON.Vector3(2, -2, 0));
];


engine.runRenderLoop(function () {
    
    box.position.z -= 1.1;
    cube.rotation.z += BABYLON.Tools.ToRadians(5);

    if (random.UNITY<0.5){
        box.rotation.x += BABYLON.Tools.ToRadians(5);    
    } else {
        box.rotation.y += BABYLON.Tools.ToRadians(5);
    }
    
    if (box.position.z<=-10) {
        random = generate_randomness();

        box.position = new BABYLON.Vector3(random.X_OFFSET,random.Y_OFFSET,90);
        box.scaling  = new BABYLON.Vector3(random.X_SCALE,random.Y_SCALE,random.Z_SCALE);

        
        // console.log(box.position);
        
    }
    
        

    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});

function generate_randomness(){
    let obj = {
        UNITY:    Math.random(),//[0,1]
        X_OFFSET: Math.floor(20*Math.random()-10),//[-10,10]
        Y_OFFSET: Math.floor(20*Math.random()-10),//[-10,10]
        X_SCALE:  3*Math.random(),//[0,3]
        Y_SCALE:  3*Math.random(),//[0,3]
        Z_SCALE:  20*Math.random()//[0,20]
    };
    console.log(obj);
    return obj;
}