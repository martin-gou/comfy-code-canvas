
# Project Name

## Hosting on GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Deployment Instructions

1. Push your code to a GitHub repository
2. Ensure GitHub Pages is enabled in your repository settings:
   - Go to the repository settings
   - Scroll down to the GitHub Pages section
   - Select the `gh-pages` branch as the source
   - Save the settings

3. The GitHub Actions workflow will automatically deploy your site when you push to the main branch

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router (with HashRouter for GitHub Pages compatibility)

