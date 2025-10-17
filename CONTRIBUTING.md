# Contributing to Worcester Laundry Service

Thank you for considering contributing to this project! This document outlines the development workflow and best practices.

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/aransys/Project-1.git
   cd Project-1
   ```

2. **Install dependencies** (optional, for development tools)
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   This will open the site at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start live development server with hot reload
- `npm run serve` - Start simple HTTP server on port 8080
- `npm run validate` - Run all validators (HTML, CSS, JS)
- `npm run validate:html` - Validate HTML markup
- `npm run validate:css` - Lint CSS files
- `npm run validate:js` - Lint JavaScript files
- `npm run format` - Format all code with Prettier
- `npm run lighthouse` - Run Lighthouse performance audit
- `npm run lighthouse:mobile` - Run mobile-specific audit
- `npm run lighthouse:desktop` - Run desktop-specific audit

## Code Style

### HTML
- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Use kebab-case for IDs and classes
- Properly indent nested elements (2 spaces)

### CSS
- Follow the modular architecture in `assets/css/`
- Use CSS custom properties (variables) from `base.css`
- Follow BEM naming convention where appropriate
- Mobile-first approach with `min-width` media queries
- Keep specificity low

### JavaScript
- Use ES6+ features
- Use strict mode (`"use strict";`)
- Comment complex logic
- Use meaningful variable names
- Follow the existing code structure

## File Organization

```
Project-1/
├── assets/
│   ├── css/          # Modular stylesheets
│   ├── js/           # JavaScript files
│   ├── images/       # Image assets
│   ├── videos/       # Video files
│   └── favicon/      # Favicon files
├── index.html        # Main page
├── thankyou.html     # Thank you page
├── newsletter-thanks.html
├── package.json      # NPM configuration
└── README.md         # Project documentation
```

## Making Changes

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the code style guide
   - Test across different browsers
   - Ensure responsive design works

3. **Validate your code**
   ```bash
   npm run validate
   ```

4. **Format your code**
   ```bash
   npm run format
   ```

5. **Test performance**
   ```bash
   npm run lighthouse
   ```

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

7. **Push and create a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Testing Checklist

Before submitting a PR, ensure:

- [ ] HTML validates with no errors
- [ ] CSS validates with no errors
- [ ] JavaScript has no console errors
- [ ] Works in Chrome, Firefox, Safari, Edge
- [ ] Responsive on mobile (320px+), tablet (768px+), desktop (1200px+)
- [ ] All links work correctly
- [ ] Forms validate properly
- [ ] Images load correctly
- [ ] Accessibility: Can navigate with keyboard
- [ ] Accessibility: Screen reader compatible
- [ ] Performance: Lighthouse score > 90
- [ ] No console errors or warnings

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 15+)
- Chrome Mobile (Android 12+)

## Accessibility Standards

Follow WCAG 2.1 Level AA guidelines:

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast (4.5:1 for normal text)
- Alt text for images
- Focus indicators
- Skip navigation link

## Performance Targets

- Page Load Time: < 3 seconds
- First Contentful Paint: < 1.5 seconds
- Largest Contentful Paint: < 2.5 seconds
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## Questions?

If you have questions, please:
1. Check the README.md
2. Check existing issues
3. Create a new issue with the question label

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

