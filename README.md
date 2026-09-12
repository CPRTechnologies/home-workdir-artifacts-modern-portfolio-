# Modern Portfolio Website

A clean, fully responsive, portfolio-ready single-page website built with **pure Vanilla HTML, CSS & JavaScript**.

No frameworks. No build tools. Just modern web standards.

![Preview](https://via.placeholder.com/1200x630/0f0f11/22d3ee?text=Modern+Portfolio)

## Features

- **Dark / Light theme** toggle with system preference detection + localStorage persistence
- **Smooth typing animation** in the hero section
- **Scroll-triggered animations** (Intersection Observer)
- **Animated skill progress bars**
- **Fully responsive** mobile-first design
- **Mobile navigation** with hamburger menu
- **Active section highlighting** in the navbar
- **Contact form** with toast notifications (ready to connect to a backend or Formspree)
- **Accessible** markup and keyboard-friendly
- **Modern CSS** (custom properties, Grid, Flexbox, clamp, etc.)

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter + JetBrains Mono)

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser  
   (or use a local server like Live Server / `npx serve`)

```bash
# Optional: quick local server
npx serve .
```

## Customization

### Personal Info
Edit the following in `index.html`:
- Name, title, description
- Social links (GitHub, LinkedIn, Twitter)
- About text & stats
- Project cards (title, description, tags, links)
- Contact email & location

### Colors & Theme
All design tokens live in `css/style.css` under `:root` and `[data-theme="light"]`.

Main accent color is currently cyan (`--accent: #22d3ee`).

### Adding Real Project Images
Replace the gradient placeholders in the Projects section with actual images:

```html
<div class="project-card__image">
  <img src="assets/project-1.jpg" alt="Project name" />
</div>
```

### Contact Form
The form currently simulates a successful submission.  
To make it real, connect it to:
- [Formspree](https://formspree.io)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- Your own backend endpoint

## Project Structure

```
modern-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/          ← put images here
└── README.md
```

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## License

MIT — feel free to use this for your own portfolio.

---

Built with care using Vanilla JS.
