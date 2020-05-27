var scene = new THREE.Scene();

// Set field of view, aspect ratio, near and far clipping plane
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer(); // Define renderer
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild ( renderer.domElement ); // Append renderer to dom

var geometry = new THREE.BoxGeometry(); //Define geometry type
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); //Define material
var cube = new THREE.Mesh( geometry, material ); //Create mesh
scene.add( cube ); // Add mesh to scene

camera.position.z = 5; // Move camera from (0,0,0) position

// Create loop 
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.00;
    cube.rotation.y += 0.02;
    renderer.render( scene, camera );
}
animate();

