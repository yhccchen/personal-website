# Personal Academic Website

A clean, professional personal website for UC Berkeley researchers, ready to deploy on GitHub Pages.

## Features

- **Clean & Professional Design**: Minimalist layout with UC Berkeley color scheme
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Publications Section**: Organized display with filtering by type (Journal, Conference, Preprint)
- **Contact & Links**: Professional contact information and social media links
- **Smooth Animations**: Subtle animations for enhanced user experience
- **Easy to Customize**: Simple HTML structure for easy content updates

## Setup Instructions

### 1. Fork or Download This Repository

First, get the website files on your GitHub account.

### 2. Customize Your Content

Edit the following sections in `index.html`:

- **Line 14**: Replace "Your Name" with your actual name in the title
- **Lines 18, 36, 37**: Update with your name and title
- **Lines 39-41**: Add your research description
- **Line 50**: Add your profile photo (or use a professional photo service)
- **Lines 62-75**: Update your bio and research interests
- **Lines 78-92**: Update your statistics (publications, years, citations)
- **Lines 108-166**: Add your actual publications
- **Lines 178-198**: Update contact information and email
- **Lines 202-230**: Add your social media and academic profile links

### 3. Deploy to GitHub Pages

1. Create a new repository on GitHub named `[your-username].github.io`
2. Upload all files (index.html, styles.css, script.js) to the repository
3. Go to Settings > Pages in your repository
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click Save
7. Your site will be live at `https://[your-username].github.io` in a few minutes

## File Structure

```
personal-website/
├── index.html      # Main HTML file with content
├── styles.css      # Styling (UC Berkeley colors, clean design)
├── script.js       # Interactive features (navigation, filters)
└── README.md       # This file
```

## Customization Guide

### Colors
The website uses UC Berkeley's official colors. To change them, edit the CSS variables in `styles.css`:
- `--primary-color`: Main color (Berkeley Blue: #003262)
- `--secondary-color`: Accent color (California Gold: #FDB515)

### Adding Publications
Copy this template in the publications section:
```html
<article class="publication-card" data-category="journal">
    <div class="publication-year">2024</div>
    <h3 class="publication-title">Paper Title</h3>
    <p class="publication-authors"><strong>Your Name</strong>, Co-authors</p>
    <p class="publication-venue"><i class="fas fa-book"></i> Journal Name</p>
    <div class="publication-links">
        <a href="#" class="pub-link"><i class="fas fa-file-pdf"></i> PDF</a>
        <a href="#" class="pub-link"><i class="fas fa-link"></i> DOI</a>
    </div>
</article>
```

### Profile Photo
Replace the placeholder image URL on line 50 with:
- A direct link to your photo
- Upload your photo to the repository and use a relative path
- Use a service like Gravatar for a professional photo

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Free to use and modify for personal academic websites.

## Need Help?

- For GitHub Pages issues: [GitHub Pages Documentation](https://docs.github.com/pages)
- For customization: Edit the HTML/CSS files directly
- For adding features: The structure is simple and extensible