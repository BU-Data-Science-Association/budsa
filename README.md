# BU Data Science Association Website

A modern, interactive website for the Boston University Data Science Association (BU-DSA). Built with vanilla HTML, CSS, and JavaScript, featuring a sleek dark theme with glassmorphism effects, smooth animations, and comprehensive event management.

## 🚀 Live Demo

[https://bu-data-science-association.github.io/dsa-website/]

## ✨ Features

### Core Features
- **Modern Design**: Dark theme with glassmorphism effects and animated particle backgrounds
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices with dedicated breakpoints
- **Interactive Elements**: Smooth scroll animations, ripple effects, and parallax scrolling
- **Performance Optimized**: Uses modern browser APIs like `IntersectionObserver` and `requestAnimationFrame`
- **Accessible**: Semantic HTML structure with proper ARIA labels and keyboard navigation
- **No Dependencies**: Pure vanilla JavaScript - no frameworks or libraries required

### Event Management System
- **Dynamic Event Sorting**: Events automatically sorted by date (chronological order)
- **Smart Filtering**: Filter events by category (All, Workshops, Social + Industry, Hackathons)
- **Upcoming Events Sidebar**: Dynamically populated with next 3 upcoming events
- **Past Events Page**: Dedicated page for archiving past events with easy copy-paste functionality
- **Date-Aware Updates**: Sidebar automatically updates as events pass their dates

### Interactive Features
- **Theme Toggle**: Switch between default purple/blue and red/pink themes
- **Mobile Navigation**: Slide-out hamburger menu with smooth animations
- **Form Integration**: Google Sheets integration for member signups
- **Scroll Animations**: Staggered card animations as you scroll through sections

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with modern HTML features and SEO optimization
- **CSS3**: Custom styling with CSS Grid, Flexbox, animations, and CSS variables for theming
- **Vanilla JavaScript (ES6+)**: Modern JavaScript with modules, arrow functions, and async/await
- **Google Fonts**: Inter font family for clean, modern typography
- **Google Apps Script**: Backend integration for form submissions

## 📁 Project Structure

```
dsa-website-deployable/
├── assets/                     # Images, icons, and static assets
│   ├── budsa_logo-modified.png # Main logo
│   ├── default_pfp.svg        # Default profile picture
│   └── [team member photos]   # Team member profile images
├── pasteventspage/            # Past events page and assets
│   ├── pastevents.html        # Past events page HTML
│   ├── pastevents.css         # Past events specific styling
│   └── pastevents.js          # Past events functionality
├── infodocu/                  # Documentation files
│   ├── documentation.md       # Comprehensive technical documentation
│   ├── google apps script.md  # Google Sheets integration guide
│   └── SEO_IMPLEMENTATION_GUIDE.md # SEO optimization details
├── index.html                 # Main website HTML
├── styles.css                 # Main stylesheet with animations
├── script.js                  # Core JavaScript functionality
├── sitemap.xml               # SEO sitemap
├── robots.txt                # Search engine directives
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- A local web server (optional, but recommended for full functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd dsa-website-deployable
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
   
   # Using Live Server (VS Code extension)
   # Right-click index.html and select "Open with Live Server"
   ```
   
   Then open `http://localhost:8000` in your browser.

## 📖 Usage

### Navigation
- Use the navigation bar to jump to different sections with smooth scrolling
- On mobile, tap the hamburger menu (☰) to access navigation links
- Click the theme toggle button (🟣) to switch between color themes
- Access "Past Events" page via the navigation menu

### Events Management
- **Main Events Page**: View all upcoming events sorted chronologically
- **Event Filtering**: Use filter buttons to view specific event categories
- **Upcoming Events Sidebar**: Always shows the next 3 upcoming events
- **Past Events**: Manually move events to the Past Events page by copying HTML

### Event Management Workflow
1. When an event passes, copy its HTML from the main page
2. Navigate to the Past Events page
3. Paste the event HTML in the designated area (marked with comments)
4. Delete the event from the main page
5. The upcoming events sidebar will automatically update

### Contact Form
- Fill out the join form to express interest in the club
- Form data is automatically sent to Google Sheets for processing
- All fields are required for submission

## 🎨 Customization

### Themes
The website supports two built-in themes:
- **Default Theme**: Purple/blue gradient with modern aesthetics
- **Red Theme**: Red/pink gradient with alternative color scheme
- Themes can be toggled via the theme button in the navigation

### Colors & Variables
Colors are defined using CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #7C3AED;
    --secondary-color: #3B82F6;
    --accent-color: #A855F7;
    /* ... more variables */
}
```

### Content Updates

#### Adding New Events
1. Copy an existing event card structure from `index.html`
2. Update the `data-category` and `data-date` attributes
3. Modify the title, date/time/location, and description
4. Events will automatically sort by date

#### Team Members
- Update team member cards in the respective sections
- Replace profile images in the `assets/` folder
- Update names, titles, and descriptions

#### Projects
- Modify project cards in the projects section
- Update project descriptions and technologies used

### Form Integration
- The contact form integrates with Google Sheets via Google Apps Script
- See `infodocu/google apps script.md` for setup instructions
- Update the `GOOGLE_SCRIPT_URL` in `script.js` with your script URL

## 🔧 Development

### File Organization
- **HTML**: Semantic structure with clear section divisions and proper SEO meta tags
- **CSS**: Organized by component type with CSS variables for theming
- **JavaScript**: Modular functions with clear naming conventions and ES6+ features

### Key Features Implementation
- **Event Sorting**: JavaScript Date objects for chronological ordering
- **Dynamic Sidebar**: Real-time filtering and population of upcoming events
- **Scroll Animations**: `IntersectionObserver` for performance-optimized animations
- **Responsive Design**: CSS Grid with `auto-fit` and `minmax()` for flexible layouts
- **Mobile Menu**: CSS transforms with JavaScript event handling
- **Theme System**: CSS custom properties with localStorage persistence

### Performance Optimizations
- Uses `requestAnimationFrame` for smooth parallax effects
- Lazy loading for non-critical animations
- Optimized image formats and sizes
- Minimal JavaScript bundle with no external dependencies

## 📱 Responsive Design

### Breakpoints
- **Desktop**: Default layout (769px+)
- **Tablet**: 768px and below
- **Mobile**: 480px and below

### Mobile Features
- Hamburger navigation menu
- Touch-optimized button sizes (minimum 44px)
- Stacked card layouts
- Optimized typography scaling
- Full-width background coverage

## 🔍 SEO & Accessibility

### SEO Features
- Comprehensive meta tags for social media sharing
- Structured data markup for search engines
- Semantic HTML structure
- Optimized page titles and descriptions
- XML sitemap for search engine crawling

### Accessibility Features
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color schemes
- Semantic HTML structure
- Alt text for images

## 📊 Browser Support

- **Chrome**: 60+ ✅
- **Firefox**: 55+ ✅
- **Safari**: 12+ ✅
- **Edge**: 79+ ✅
- **Mobile Safari**: iOS 12+ ✅
- **Chrome Mobile**: Android 8+ ✅

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
- Test on multiple browsers and devices (use browser dev tools)
- Keep the site lightweight and fast
- Maintain accessibility standards
- Update documentation if adding new features
- Test both themes when making visual changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: dsabu@bu.edu
- **GitHub**: [BU Data Science Association](https://github.com/bu-data-science-association)
- **Instagram**: [@bu_dsa](https://instagram.com/bu_dsa)
- **Slack**: Join our community workspace

## 🙏 Acknowledgments

- BU-DSA Executive Board for content, feedback, and testing
- Boston University for institutional support and resources
- The open-source community for inspiration and best practices
- Modern web development community for CSS and JavaScript techniques

## 📋 Recent Updates

### Version 2.0 Features
- ✅ Complete event management system with chronological sorting
- ✅ Dedicated Past Events page with easy management
- ✅ Dynamic upcoming events sidebar
- ✅ Theme switching functionality
- ✅ Enhanced mobile responsiveness
- ✅ Google Sheets form integration
- ✅ Comprehensive SEO optimization
- ✅ Performance optimizations and code cleanup

---

**Built with ❤️ by the BU Data Science Association**

*Last updated: January 2025*