//Space change scene
//camera moves along a 3d line. make lots of points. move position on them. 
//Control - mouse. WASD, like plane.
//Music - spotify/sound clound? 

//Reddit integration:
/*
Image gallery

*/

const canvas= document.querySelector("#renderCanvas")
const engine= new BABYLON.Engine(canvas, true);
let   scene=  new BABYLON.Scene(engine);
// scene.clearColor = BABYLON.Color3.FromHexString("#2ecc71");

//Camera Path
let bezier2 = BABYLON.Curve3.CreateQuadraticBezier(
  new BABYLON.Vector3(10,0,-10), //Start
  new BABYLON.Vector3(7,4,-7), //Control
  new BABYLON.Vector3(10,10,0), //Destination
  100 //Num of points
); 

let cam_points = bezier2.getPoints();

let camera=  new BABYLON.UniversalCamera("UniversalCamera", cam_points[0], scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.maxZ= 100;
camera.minZ= 1 ;

// var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);
// camera.setTarget(BABYLON.Vector3.Zero());
// var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
// camera.attachControl(canvas, true);

let light = new BABYLON.PointLight("DirectionalLight", new BABYLON.Vector3(0, 0, -11), scene);

const Mat = new BABYLON.StandardMaterial("Mat", scene);
Mat.diffuseColor = new BABYLON.Color3(0,1,0);

const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
// box.position.z = 90;
box.material = Mat;

// let random = generate_randomness();
// box.position = new BABYLON.Vector3(random.X_OFFSET,random.Y_OFFSET,90);
// box.scaling  = new BABYLON.Vector3(random.X_SCALE,random.Y_SCALE,random.Z_SCALE);

// let points = [];
// points.push(new BABYLON.Vector3(2, -2, 0));
// points.push(new BABYLON.Vector3(2, 2, 0));
// points.push(new BABYLON.Vector3(-2, 2, 0));
// points.push(new BABYLON.Vector3(-2, -2, 0));
// points.push(points[0]); //close the triangle;
// let cube = BABYLON.MeshBuilder.CreateLines("triangle", {points: points})

// points = [];
// points.push(new BABYLON.Vector3(2, 0, 0));
// points.push(new BABYLON.Vector3(2, -1, 0));
// points.push(new BABYLON.Vector3(1, -2, 0));
// let lat = BABYLON.MeshBuilder.CreateLathe("lat", {shape: points}, scene);

// const adt = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
// const panel = new BABYLON.GUI.StackPanel();
// panel.width = "220px";
// panel.top   = "-50px";
// panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
// panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
// adt.addControl(panel);
// const slider = new BABYLON.GUI.Slider();
// slider.minimum = 0;
// slider.maximum = 1;
// slider.borderColor = "black";
// slider.color = "#AAAAAA";
// slider.background = "#white";
// slider.value = 1;
// slider.height = "20px";
// slider.width = "200px";
// panel.addControl(slider);

// let speed = 0.5;

// slider.onValueChangedObservable.add((value) => {
//   speed = 0.5 + value;
// });

engine.runRenderLoop(function () {
    
    // box.position.z -= speed;
    // cube.rotation.z += BABYLON.Tools.ToRadians(5);

    // if (random.UNITY<0.5){
    //     box.rotation.x += BABYLON.Tools.ToRadians(5);    
    // } else {
    //     box.rotation.y += BABYLON.Tools.ToRadians(5);
    // }
    
    // if (box.position.z<=-10) {
    //     random = generate_randomness();

    //     box.position = new BABYLON.Vector3(random.X_OFFSET,random.Y_OFFSET,90);
    //     box.scaling  = new BABYLON.Vector3(random.X_SCALE,random.Y_SCALE,random.Z_SCALE);

        
    
        
    // }
    
        

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

scene.onKeyboardObservable.add((kbInfo) => {

  console.log(kbInfo.event.keyCode);

  if (kbInfo.type===BABYLON.KeyboardEventTypes.KEYDOWN){
    if (kbInfo.event.keyCode==32){
      scene.clearColor = BABYLON.Color3.FromHexString("#2eaaaa");
    } else if (kbInfo.event.keyCode==90){ //z
      // camera.setPosition(new BABYLON.Vector3(0, 0, 20));
      camera.position = new BABYLON.Vector3(0, 0, 0);
    }
  } 

});

