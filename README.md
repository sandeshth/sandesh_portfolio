# Sandesh Thapa - Data Scientist Portfolio

A modern, responsive portfolio website showcasing data science projects, skills, and experience.

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

## Customization

### Update Personal Information

1. **Contact Information**: Edit `dist/index.html` and update:
   - Email address
   - Phone number
   - Social media links (LinkedIn, GitHub, Twitter, Kaggle)

2. **About Section**: Update the about text in the About section

3. **Projects**: Replace placeholder projects with your actual projects:
   - Update project titles, descriptions, and tags
   - Add links to live projects and GitHub repositories
   - Replace placeholder icons with actual project images

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

Sandesh Thapa - Data Scientist & Analytics Professional

---

**Note**: Remember to update all placeholder content (email, phone, social links, projects, experience) with your actual information before deploying!

