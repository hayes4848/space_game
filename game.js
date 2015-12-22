// var gamepadSupportAvailable = !!navigator.webkitGetGamepads || !!navigator.webkitGamepads;
 var page = $('#body-container');
 var scene = new THREE.Scene();

  // This is what sees the stuff:
  var aspect_ratio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000);
  camera.position.z = 500;
  scene.add(camera);

  // This will draw what the camera sees onto the screen:
  var renderer = new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  page.add(renderer.domElement);

  var ambLight = new THREE.AmbientLight(0x404040);
  scene.add(ambLight);

  // ******** START CODING ON THE NEXT LINE ********

var geometry = new THREE.TorusKnotGeometry( 30, 3, 100, 20, 3, 7 ); 
var material = new THREE.MeshBasicMaterial( { color: 0x33cc33 } ); 
var torusKnot = new THREE.Mesh( geometry, material ); 
scene.add( torusKnot );

var frame = new THREE.SphereGeometry(50, 20, 20);
var ball = new THREE.Mesh(frame, material);
ball.position.set(-100, 100, 0);
scene.add(ball);


// checkGamePad = function(){
//   if(!!navigator.getGamepads){
//     var gamepad = navigator.getGamepads();
//     console.log(gamepad[0].id);
//   }
// }

// leftJoystick = function() {
//   var gamepad = navigator.getGamepads();
//   if(gamepad[0].axes[0] > 0.25){
//     ball.position.x += 1;
//   }else if (gamepad[0].axes[0] < -0.25){
//     ball.position.x -=1;
//   } else if(gamepad[0].axes[1] > 0.25){
//     ball.position.z += 1;
//   }else if (gamepad[0].axes[1] < -0.25){
//     ball.position.z -=1;
//   }
// }

// rightJoystick = function(){
//   var gamepad = navigator.getGamepads();
//   if(gamepad[0].axes[2] > 0.25){
//     ball.rotation.y += 0.01;
//   }else if(gamepad[0].axes[2] < -0.25){
//     ball.rotation.y -= 0.01;
//   }else if(gamepad[0].axes[3] > 0.25){
//     ball.rotation.x += 0.01;
//   }else if(gamepad[0].axes[3] < -0.25){
//     ball.rotation.x -= 0.01;
//   }
// }

// var applyDeadzone = function(number, threshold){
//    percentage = (Math.abs(number) - threshold) / (1 - threshold);

//    if(percentage < 0)
//       percentage = 0;

//    return percentage * (number > 0 ? 1 : -1);
// }


var animate = function(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // leftJoystick();
  // rightJoystick();
}
// checkGamePad();
animate();
  // Now, show what the camera sees on the screen:
  
