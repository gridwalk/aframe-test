// Import A-Frame
import 'aframe'

// A-Frame is now available globally
console.log('A-Frame version:', AFRAME.version)

// Add some interactivity
document.addEventListener('DOMContentLoaded', () => {
  // Add click handlers to shapes
  const shapes = document.querySelectorAll('a-box, a-sphere, a-cylinder')
  
  shapes.forEach(shape => {
    shape.addEventListener('click', (event) => {

      console.log(`${event.target.id} clicked`)
      
      // Change color on click
      const colors = ['#4CC3D9', '#EF2D5E', '#FFC65D', '#7BC8A4', '#FF6B6B', '#4ECDC4']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      event.target.setAttribute('color', randomColor)
      
      // Add a little animation
      event.target.setAttribute('animation__scale', {
        property: 'scale',
        to: '1.2 1.2 1.2',
        dur: 200,
        direction: 'alternate'
      })
    })
  })

  // Add keyboard controls
  document.addEventListener('keydown', (event) => {
    const scene = document.querySelector('a-scene')
    
    switch(event.key) {
      case 'r':
        // Reset all shapes to original colors
        const box = document.querySelector('a-box')
        const sphere = document.querySelector('a-sphere')
        const cylinder = document.querySelector('a-cylinder')
        
        if (box) box.setAttribute('color', '#4CC3D9')
        if (sphere) sphere.setAttribute('color', '#EF2D5E')
        if (cylinder) cylinder.setAttribute('color', '#FFC65D')
        break
      case ' ':
        // Toggle VR mode
        if (scene.is('vr-mode')) {
          scene.exitVR()
        } else {
          scene.enterVR()
        }
        break
    }
  })

  console.log('A-Frame VR project loaded!')
  console.log('Controls:')
  console.log('- Click shapes to change their color')
  console.log('- Press R to reset colors')
  console.log('- Press Space to toggle VR mode')
})
