# BU Data Science Association Website

A modern, interactive single-page website for the Boston University Data Science Association (BU-DSA). Built with vanilla HTML, CSS, and JavaScript, featuring a sleek dark theme with glassmorphism effects and smooth animations.

## 🚀 Live Demo

[Add your live website URL here]

## ✨ Features

- **Modern Design**: Dark theme with glassmorphism effects and animated backgrounds
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile
- **Interactive Elements**: Smooth scroll animations, event filtering, and ripple effects
- **Performance Optimized**: Uses modern browser APIs like `IntersectionObserver` and `requestAnimationFrame`
- **Accessible**: Semantic HTML structure with proper ARIA labels
- **No Dependencies**: Pure vanilla JavaScript - no frameworks or libraries required

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern HTML features
- **CSS3**: Custom styling with animations, transitions, and responsive design
- **Vanilla JavaScript (ES6+)**: Modern JavaScript without any frameworks
- **Google Fonts**: Inter font family for typography

## 📁 Project Structure

```
dsa-website/
├── assets/                 # Images, icons, and other static assets
│   ├── budsa_logo-modified.png
│   ├── default_pfp.svg
│   └── [social media icons]
├── index.html             # Main HTML file
├── styles.css             # All CSS styles and animations
├── script.js              # JavaScript functionality
├── README.md              # This file
└── WEBSITE_DOCUMENTATION.md  # Detailed technical documentation
```

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd dsa-website
   ```

2. **Open the website**
   
   **Option A: Direct file opening**
   - Simply double-click `index.html` to open in your browser
   
   **Option B: Using a local server (recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have it installed)
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
   
   Then open `http://localhost:8000` in your browser.

## 📖 Usage

### Navigation
- Use the navigation bar to jump to different sections
- On mobile, tap the hamburger menu (☰) to access navigation links
- Click "Back to Top" in the footer to return to the top

### Events Section
- Use the filter buttons to view different types of events
- Events are categorized as: All, Workshops, Social + Industry, and Hackathons

### Contact Form
- Fill out the join form to express interest in the club
- All fields are required for submission

## 🎨 Customization

### Colors
The main color scheme is defined in `styles.css`:
- Primary: `#7C3AED` (Purple)
- Secondary: `#3B82F6` (Blue)
- Background: Dark gradient from `#0A0A0F` to `#16213E`

### Content Updates
- **Team Members**: Update the team section in `index.html` with new member information
- **Events**: Add or modify event cards in the events section
- **Projects**: Update the projects grid with new project information
- **Contact Information**: Update email addresses and social media links

### Styling
- All styles are in `styles.css` with clear section comments
- Animations and keyframes are at the bottom of the file
- Responsive breakpoints are at 768px and 480px

## 🔧 Development

### File Organization
- **HTML**: Semantic structure with clear section divisions
- **CSS**: Organized by component type with utility classes
- **JavaScript**: Modular functions with clear naming conventions

### Key Features Implementation
- **Scroll Animations**: Uses `IntersectionObserver` for performance
- **Event Filtering**: Dynamic show/hide with smooth transitions
- **Mobile Menu**: CSS-based toggle with JavaScript enhancement
- **Form Handling**: Client-side validation with user feedback

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly** on different devices and browsers
5. **Commit your changes**
   ```bash
   git commit -m "Add: description of your changes"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Development Guidelines
- Follow the existing code style and naming conventions
- Test on multiple browsers and devices
- Keep the site lightweight and fast
- Maintain accessibility standards
- Update documentation if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: dsabu@bu.edu
- **Website**: [Add your website URL]
- **GitHub**: [Add your GitHub profile]

## 🙏 Acknowledgments

- BU-DSA Executive Board for content and feedback
- Boston University for institutional support
- The open-source community for inspiration and tools

---

**Built with ❤️ by the BU Data Science Association**
