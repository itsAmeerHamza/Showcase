# 🚀 Ameer Hamza - Portfolio

<div align="center">

![Portfolio Preview](https://prodofolio.vercel.app)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.5-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-teal?style=for-the-badge&logo=tailwindcss)

*A modern, responsive portfolio website built with React and enhanced with beautiful particle animations*

[🌐 Live Demo](https://prodofolio.vercel.app) • [📧 Contact](mailto:hamzaameer24@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/itsameerhamza)

</div>

---

## ✨ Features

### 🎨 **Modern Design**
- **Gradient Typography** - Beautiful gradient text effects with Inter & Poppins fonts
- **Glass Morphism** - Modern glassmorphism effects on social icons
- **Smooth Animations** - Fade-in animations and floating effects
- **Responsive Design** - Perfect on all devices from mobile to desktop

### 🌟 **Interactive Elements**
- **Particle System** - Dynamic particle background with hover interactions
- **Social Icons** - Animated social media links with hover effects
- **Download Resume** - Direct PDF download functionality
- **Mobile Optimized** - Disabled zoom for app-like experience

### 🚀 **Performance & SEO**
- **Vite Build** - Lightning-fast development and production builds
- **Google Fonts** - Optimized font loading with preconnect
- **Modern CSS** - CSS Grid, Flexbox, and modern properties
- **Accessibility** - ARIA labels and semantic HTML

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18.3.1, JSX |
| **Build Tool** | Vite 6.0.5 |
| **Styling** | CSS3, Tailwind CSS 3.4.17 |
| **Icons** | Font Awesome 6.7.2 |
| **Particles** | @tsparticles/react 3.0.0 |
| **Fonts** | Google Fonts (Inter, Poppins) |
| **Deployment** | Vercel |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ameer-hamza-portfolio.git
   cd ameer-hamza-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📱 Responsive Design

| Device | Breakpoint | Features |
|--------|------------|----------|
| **Mobile** | < 480px | Optimized touch targets, disabled zoom |
| **Tablet** | 480px - 768px | Adjusted spacing and typography |
| **Desktop** | > 768px | Full feature set with hover effects |

---

## 🎨 Customization

### Colors & Themes
The portfolio uses a modern color palette with CSS custom properties:

```css
/* Primary Colors */
--primary-blue: #667eea;
--primary-purple: #764ba2;
--accent-green: #51cf66;
--accent-yellow: #ffd43b;
```

### Typography
- **Headings**: Poppins (600 weight)
- **Body Text**: Inter (300-400 weight)
- **Responsive**: Fluid typography with `clamp()`

### Particle Configuration
Customize particles in `src/components/Particles.jsx`:
- Colors, shapes, and animations
- Interaction modes (hover, click)
- Performance settings

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Other Platforms
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Firebase**: Use Firebase CLI

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── react-brands-solid.svg
├── src/
│   ├── components/
│   │   ├── Buttons.jsx      # Social media icons
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Particles.jsx    # Particle system
│   │   └── Titles.jsx       # Name and title
│   ├── App.css             # Main styles
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── vercel.json             # Vercel configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies
```

---

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Loading Speed**: < 2s on 3G
- **Mobile Performance**: 60fps animations

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Ameer Hamza**
- 🌐 Portfolio: [ameer-hamza-portfolio.vercel.app](https://ameer-hamza-portfolio.vercel.app)
- 📧 Email: [hamzaameer24@gmail.com](mailto:hamzaameer24@gmail.com)
- 💼 LinkedIn: [itsameerhamza](https://www.linkedin.com/in/itsameerhamza)
- 🐙 GitHub: [itsAmeerHamza](https://github.com/itsAmeerHamza)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

by [Ameer Hamza](https://github.com/itsAmeerHamza)

</div>