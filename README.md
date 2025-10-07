# A-Frame VR Project with Vite

A modern VR project built with A-Frame 1.7.0 and Vite for fast development and building.

## Features

- 🚀 **Vite** for lightning-fast development and building
- 🥽 **A-Frame 1.7.0** for WebXR and VR experiences
- 📱 **Responsive design** that works on desktop and mobile
- 🎮 **Interactive elements** with click handlers and animations
- 🎨 **Modern CSS** with custom styling and animations
- 🔧 **ES Module syntax** for modern JavaScript

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
aframe-test/
├── src/
│   ├── main.js          # Main JavaScript entry point
│   └── style.css        # Custom CSS styles
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Controls

- **Mouse/Touch**: Look around the scene
- **WASD**: Move around (desktop)
- **Click**: Change shape colors
- **R Key**: Reset all shapes to original colors
- **Space**: Toggle VR mode (if VR headset is available)

## VR Support

This project includes full VR support through A-Frame's WebXR implementation. To test in VR:

1. Use a compatible VR headset (Oculus, HTC Vive, etc.)
2. Open the project in a WebXR-compatible browser
3. Press Space or click the VR button to enter VR mode

## Customization

### Adding New Shapes

Add new A-Frame entities to the scene in `index.html`:

```html
<a-torus position="0 2 -3" radius="1" radius-tubular="0.3" color="#FF6B6B"></a-torus>
```

### Styling

Modify `src/style.css` to customize the appearance and add new UI elements.

### JavaScript

Add interactivity and custom logic in `src/main.js`. The file already includes:
- Click handlers for shapes
- Keyboard controls
- Color randomization
- Animation effects

## Browser Compatibility

- Chrome 80+
- Firefox 80+
- Safari 14+
- Edge 80+

For VR support, use Chrome or Firefox with WebXR support enabled.

## Development

The project uses Vite for fast development with:
- Hot Module Replacement (HMR)
- ES Module support
- Optimized builds
- Source maps for debugging

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## License

ISC
