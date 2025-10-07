# A-Frame VR Experience

A modern VR web experience built with A-Frame 1.7.0 and Vite, optimized for deployment on Vercel.

## Features

- 🥽 **A-Frame 1.7.0** - Latest stable version of A-Frame
- ⚡ **Vite** - Fast build tool and development server
- 📱 **VR Ready** - Works on desktop and mobile VR devices
- 🎨 **Interactive 3D Scene** - Clickable 3D objects with color changes
- 🚀 **Vercel Ready** - Optimized for deployment on Vercel
- 📦 **ES Modules** - Modern JavaScript module system

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to Vercel

## VR Experience

The scene includes:
- **Interactive 3D Objects**: Box, sphere, and cylinder that change color when clicked
- **VR Controls**: Full VR mode support with hand tracking
- **Responsive Design**: Works on desktop and mobile devices
- **Modern Lighting**: Ambient and directional lighting with shadows

### VR Controls

- **Desktop**: Use mouse to look around, WASD keys to move
- **Mobile**: Touch and drag to look around, use VR button for VR mode
- **VR Headset**: Full 6DOF tracking and hand controllers

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
npm run deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Build Configuration

The project is configured with:
- Static site generation
- Proper routing for SPA
- Security headers
- Optimized asset delivery

## Project Structure

```
aframe-test/
├── src/
│   ├── main.js          # Main JavaScript logic
│   └── style.css        # CSS styles
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel deployment config
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Customization

### Adding New 3D Objects

Add new A-Frame entities in `index.html`:

```html
<a-entity geometry="primitive: box" position="0 1 -3" color="#FF6B6B"></a-entity>
```

### Adding Interactions

Modify `src/main.js` to add custom interactions:

```javascript
const newObject = document.querySelector('a-entity');
newObject.addEventListener('click', () => {
  // Your interaction code here
});
```

### Styling

Customize the appearance in `src/style.css` or add new CSS classes.

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## VR Device Support

- Oculus Quest/Quest 2
- HTC Vive
- Windows Mixed Reality
- Google Cardboard (mobile)
- WebXR compatible devices

## License

ISC

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Resources

- [A-Frame Documentation](https://aframe.io/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [WebXR Documentation](https://immersive-web.github.io/webxr/)
