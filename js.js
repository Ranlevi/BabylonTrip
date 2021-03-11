//Space change scene
//camera moves along a 3d line. make lots of points. move position on them. 
//can have guided tour mode , or manual moving
//Music - spotify/sound clound? 
//Reddit integration:
// Image gallery

//Spining Cube in the center
//Camera Path
//Guided Tour/Manual Modes

//Room 1:
//floating boxes. Each side different color.
//When viewed from the side, forms a bigger box of single color.

const canvas= document.querySelector("#renderCanvas")
const engine= new BABYLON.Engine(canvas, true);
let   scene=  new BABYLON.Scene(engine);


class SceneContent {
  constructor(scene){
    // this.light = new BABYLON.PointLight("DirectionalLight", new BABYLON.Vector3(0, 0, -11), scene);
    this.lights = [];

    let light = new BABYLON.DirectionalLight("Hemi", new BABYLON.Vector3(0,0,1), scene);
    light.diffuse = BABYLON.Color3.FromHexString("#FF00FF");
    this.lights.push(light);
  
    light = light.clone('light2');
    light.direction = new BABYLON.Vector3(0,0,-1);
    light.diffuse = BABYLON.Color3.FromHexString("#FF0000");
    this.lights.push(light);

    light = light.clone('light3');
    light.direction = new BABYLON.Vector3(0,1,0);
    light.diffuse = BABYLON.Color3.FromHexString("#00FF00");
    this.lights.push(light);

    light = light.clone('light4');
    light.direction = new BABYLON.Vector3(0,-1,0);
    light.diffuse = BABYLON.Color3.FromHexString("#00FFFF");
    this.lights.push(light);

    light = light.clone('light5');
    light.direction = new BABYLON.Vector3(1,0,0);
    light.diffuse = BABYLON.Color3.FromHexString("#FFD79F");
    this.lights.push(light);

    light = light.clone('light5');
    light.direction = new BABYLON.Vector3(-1,0,0);
    light.diffuse = BABYLON.Color3.FromHexString("#FFD79F");
    this.lights.push(light);
    // this.mat   = new BABYLON.StandardMaterial("Mat", scene);
    // this.mat.diffuseColor = new BABYLON.Color3(0,1,0);

    this.items = [];
    
    let item  = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
    // item.material = this.mat;
    item.position = new BABYLON.Vector3(0,0,-1);
    this.items.push(item);

    item = item.clone("box2");
    item.position = new BABYLON.Vector3(1,0,0);
    this.items.push(item);

    item = item.clone("box3");
    item.position = new BABYLON.Vector3(0,1,0);
    this.items.push(item);

    item = item.clone("box4");
    item.position = new BABYLON.Vector3(1,1,-1);
    this.items.push(item);
  }

  changeContent(){
    // this.item.dispose();
    // this.item  = BABYLON.MeshBuilder.CreateCylinder("cylinder", {}, scene);
    // this.item.material = this.mat;
  }
}

let content = new SceneContent(scene);

//Camera Path
// let catmullRom = BABYLON.Curve3.CreateCatmullRomSpline(
//   [
//   new BABYLON.Vector3(0,0,-10),
//   new BABYLON.Vector3(10,0,0),
//   new BABYLON.Vector3(0,10,0),
//   new BABYLON.Vector3(0,0,10),
//   new BABYLON.Vector3(-10,-10,10),
//   new BABYLON.Vector3(-10,0,0)  
//   ],
//   60,    //Num of points
//   true); //Closed curve

// let cam_points = catmullRom.getPoints();
// let current_position = 0;

let camera = new BABYLON.ArcRotateCamera("ArcCam",0,0,10,new BABYLON.Vector3(0,0,0),scene);
console.log(camera.position);

// let camera=  new BABYLON.UniversalCamera("UniversalCamera", cam_points[current_position], scene);
// camera.setTarget(BABYLON.Vector3.Zero());
camera.maxZ= 100;
camera.minZ= 1 ;
camera.attachControl(canvas, true);
// camera.inputs.removeByType("FreeCameraKeyboardMoveInput");

//GUI
// const adt = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
// const panel = new BABYLON.GUI.StackPanel();
// panel.width = "220px";
// panel.top   = "-50px";
// panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
// panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
// adt.addControl(panel);

//Guided Tour Mode
// let is_guided_tour = false;

// let button = BABYLON.GUI.Button.CreateSimpleButton("btn", "Enable Guided Tour Mode");
// button.color = "#808080";
// button.value = 1;
// button.height = "100px";
// button.width = "100px";
// button.thickness = 2;
// panel.addControl(button);

// button.onPointerClickObservable.add(() => {
  
//   is_guided_tour = !is_guided_tour;
  
//   if (is_guided_tour){
//     button.textBlock.text = "Switch To Manual Mode";
//   } else {
//     button.textBlock.text = "Switch To Guided Tour Mode";
//   }
// });



engine.runRenderLoop(function () {

    // box.rotation.z += BABYLON.Tools.ToRadians(5);
    // content.item.rotation.z += BABYLON.Tools.ToRadians(5);
    
    // if (is_guided_tour){

    //   if (current_position===cam_points.length-1){
    //     current_position = 0;
    //   } else {
    //     current_position += 1;      
    //   }

    //   // camera.setTarget(BABYLON.Vector3.Zero());
    //   // camera.position = cam_points[current_position];
    // }
    // console.log('alpha ', camera.alpha);
    // console.log('beta ', camera.beta);
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

  // console.log(kbInfo.event.keyCode);

  // if (!is_guided_tour){
  //   if (kbInfo.type===BABYLON.KeyboardEventTypes.KEYDOWN){
  //     console.log(camera.position);
  //     if (kbInfo.event.keyCode===81){ //q
        
  //       if (current_position===cam_points.length-1){
  //         current_position = 0;
  //       } else {
  //         current_position += 1;
  //       } 
        
  //     } else if (kbInfo.event.keyCode===65){ //a
        
  //       if (current_position===0){
  //         current_position=cam_points.length-1;
  //       } else {
  //         current_position -= 1;
  //       }

  //     } else if (kbInfo.event.keyCode===32){ //Space
        
  //       content.changeContent();
  //     }

  //     camera.position = cam_points[current_position];
  //     camera.setTarget(BABYLON.Vector3.Zero());
  //   }
  // }
   
});

  

  

  // if (kbInfo.type===BABYLON.KeyboardEventTypes.KEYDOWN){
  //   if (kbInfo.event.keyCode==32){
  //     scene.clearColor = BABYLON.Color3.FromHexString("#2eaaaa");
  //   } else 
    
  //     current_position += 1;
  //     camera.position = cam_points[current_position];
  //   //   camera.setTarget(BABYLON.Vector3.Zero());

    //   console.log(camera.position);

    // }
  // } 



// scene.clearColor = BABYLON.Color3.FromHexString("#2ecc71");
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
// var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);
// camera.setTarget(BABYLON.Vector3.Zero());
// var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

// let bezier2 = BABYLON.Curve3.CreateQuadraticBezier(
//   new BABYLON.Vector3(10,0,-10), //Start
//   new BABYLON.Vector3(7,4,-7),   //Control
//   new BABYLON.Vector3(10,10,0),  //Destination
//   100                            //Num of points
// ); 


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