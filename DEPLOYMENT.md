# Deployment Guide - GitHub Pages

## Prerequisites

- GitHub account
- Repository set up on GitHub
- GitHub Pages enabled in repository settings

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Configure Repository

Make sure your repository structure matches:
```
sandesh_portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── dist/
│   ├── css/
│   ├── img/
│   ├── js/
│   └── index.html
├── scss/
├── package.json
└── README.md
```

### 3. Push to GitHub

```bash
git add .
git commit -m "Add CI/CD pipeline and Google Analytics"
git push origin main
```

### 4. Automatic Deployment

The GitHub Actions workflow will:
1. ✅ Checkout your code
2. ✅ Install Node.js dependencies
3. ✅ Build SCSS to CSS
4. ✅ Deploy to GitHub Pages

### 5. View Your Site

After deployment completes (usually 1-2 minutes):
- Go to **Settings** → **Pages** in your repository
- Your site URL will be: `https://[username].github.io/[repository-name]`

## CI/CD Pipeline Details

The workflow (`deploy.yml`) automatically:
- Runs on every push to `main` or `master` branch
- Builds your SCSS files
- Deploys the `dist/` folder to GitHub Pages
- Can be manually triggered via **Actions** tab → **Run workflow**

## Troubleshooting

### Build Fails
- Check GitHub Actions logs: **Actions** tab → Click on failed workflow
- Ensure `package.json` has correct scripts
- Verify SCSS files compile without errors

### Site Not Updating
- Wait 1-2 minutes for deployment to complete
- Clear browser cache
- Check GitHub Pages settings are correct

### Google Analytics Not Working
- Verify Measurement ID is correct in `dist/index.html`
- Check browser console for errors
- Ensure cookies are accepted (check cookie banner)

## Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# The dist/ folder is ready for deployment
# Push to GitHub and GitHub Actions will handle the rest
```

