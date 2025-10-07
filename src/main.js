// A-Frame main JavaScript file
console.log('A-Frame VR Experience loaded!');

// Wait for A-Frame to be ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, A-Frame should be ready');
  
  // Add any custom A-Frame components or logic here
  // Example: Add click handlers for VR objects
  
  // Add click event to the box
  const box = document.querySelector('a-box');
  if (box) {
    box.addEventListener('click', () => {
      console.log('Box clicked!');
      // Change box color on click
      box.setAttribute('color', '#FF6B6B');
    });
  }
  
  // Add click event to the sphere
  const sphere = document.querySelector('a-sphere');
  if (sphere) {
    sphere.addEventListener('click', () => {
      console.log('Sphere clicked!');
      // Change sphere color on click
      sphere.setAttribute('color', '#4ECDC4');
    });
  }
  
  // Add click event to the cylinder
  const cylinder = document.querySelector('a-cylinder');
  if (cylinder) {
    cylinder.addEventListener('click', () => {
      console.log('Cylinder clicked!');
      // Change cylinder color on click
      cylinder.setAttribute('color', '#45B7D1');
    });
  }
});

// Handle VR mode changes
const scene = document.querySelector('a-scene');
if (scene) {
  scene.addEventListener('enter-vr', () => {
    console.log('Entered VR mode');
  });
  
  scene.addEventListener('exit-vr', () => {
    console.log('Exited VR mode');
  });
}
