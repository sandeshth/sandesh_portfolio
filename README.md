# Sandesh Thapa - Data Professional Portfolio

A modern, responsive portfolio website showcasing data projects, skills, and experience across
analytics, data engineering, and data science.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with optimized assets
- 🎯 SEO optimized with meta tags
- 🌈 Beautiful gradient effects and transitions
- 📊 Sections for: About, Skills, Projects, Experience, Contact

## Tech Stack

- **HTML5** - Semantic markup
- **SCSS/CSS3** - Modern styling with variables, mixins, and animations
- **JavaScript (ES6+)** - Interactive features and animations
- **Sass** - CSS preprocessing
- **Font Awesome 6** - Icons
- **Google Fonts** - Typography (Poppins & Raleway)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sandesh_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Compile SCSS to CSS:
```bash
npm run build
```

### Development

To watch for SCSS changes and auto-compile:
```bash
npm run dev
```

Or use the watch command:
```bash
npm run sass
```

## Google Analytics Setup

This portfolio includes Google Analytics tracking, gated behind the cookie consent banner via
Google's Consent Mode (analytics storage defaults to `denied` until the visitor clicks Accept).
To set it up:

1. **Get your Measurement ID** from Google Analytics (see `GOOGLE_ANALYTICS_SETUP.md`)
2. **Update `dist/index.html`** - Replace `G-XXXXXXXXXX` with your actual Measurement ID
3. **View analytics** at [Google Analytics Dashboard](https://analytics.google.com/)

See `GOOGLE_ANALYTICS_SETUP.md` for detailed instructions.

## CI/CD Pipeline

This project includes a GitHub Actions workflow for automatic deployment:

- **Automatic builds** on every push to `main`/`master`
- **Automatic deployment** to GitHub Pages
- **SCSS compilation** handled automatically

See `DEPLOYMENT.md` for deployment instructions.

## Customization

### Update Personal Information

1. **Contact Information**: Edit `dist/index.html` and update:
   - Email address
   - Phone number
   - Social links (LinkedIn, GitHub, Twitter, Kaggle) — these are currently non-clickable
     `<span>` placeholders in the `.social-links` block. To activate one, change its `<span
     class="social-link" style="cursor: default;">` to `<a class="social-link" href="https://..."
     target="_blank" rel="noopener">` and drop the inline `cursor` style.

2. **About Section**: Update the about text in the About section

3. **Projects**: Replace placeholder projects with your actual projects:
   - Update project titles, descriptions, and tags
   - Replace placeholder icons with actual project images
   - **Adding live/repo links**: the "View Project" / "View Code" hover icons were removed from
     `dist/index.html` because they pointed nowhere (`href="#"`). Once you have real demo/repo
     URLs, re-add a `.project-overlay` block inside each `.project-image` div (styles already
     exist in `scss/main.scss`):
     ```html
     <div class="project-overlay">
       <div class="project-links">
         <a href="https://your-demo-url" class="project-link" title="View Project" target="_blank" rel="noopener">
           <i class="fas fa-external-link-alt"></i>
         </a>
         <a href="https://github.com/you/repo" class="project-link" title="View Code" target="_blank" rel="noopener">
           <i class="fab fa-github"></i>
         </a>
       </div>
     </div>
     ```

4. **Experience**: Update the timeline with your actual work experience and education

5. **Skills**: Modify skill levels and add/remove skills as needed

### Styling

- Colors: Edit `scss/_config.scss` to change the color scheme
- Fonts: Update font imports in `dist/index.html`
- Layout: Modify grid layouts and spacing in `scss/main.scss`

### Images

- Replace `dist/img/profile.jpg` with your professional photo
- Replace `dist/img/front.jpg` with your hero background image
- Add project images to `dist/img/` and reference them in project cards

## Project Structure

```
sandesh_portfolio/
├── dist/                 # Production files
│   ├── css/
│   │   └── main.css     # Compiled CSS
│   ├── img/             # Images
│   ├── js/
│   │   └── main.js      # JavaScript
│   └── index.html       # Main HTML file
├── scss/                # Source SCSS files
│   ├── _config.scss     # Variables and mixins
│   └── main.scss        # Main stylesheet
├── package.json         # Dependencies
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. Optimize images before adding them
2. Use WebP format for better compression
3. Minimize JavaScript if adding more features
4. Consider lazy loading for images

## Deployment

The `dist/` folder contains all the files needed for deployment. You can:

1. Deploy to GitHub Pages
2. Deploy to Netlify
3. Deploy to Vercel
4. Use any static hosting service

## License

ISC

## Author

Sandesh Thapa - Data Professional (Analyst, Engineer & Scientist)

---

**Note**: Remember to update all placeholder content (email, phone, social links, projects, experience) with your actual information before deploying!

