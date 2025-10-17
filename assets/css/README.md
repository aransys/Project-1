# CSS Architecture

This directory contains the modular CSS architecture for Worcester Laundry Service website.

## Structure

```
assets/css/
├── main.css              # Main import file - use this in HTML
├── base.css              # Reset, variables, typography
├── navbar.css            # Navigation and header
├── hero.css              # Hero section with video
├── services.css          # Services section with bubbles
├── pricing.css           # Pricing tables
├── contact.css           # Contact form and info
├── footer.css            # Footer with newsletter
├── animations.css        # All keyframe animations
├── responsive.css        # Media queries
└── styles.css.backup     # Original monolithic file (backup)
```

## CSS Variables

All CSS custom properties are defined in `base.css`:

- **Colors**: Primary, accent, text, background colors
- **Spacing**: Consistent spacing scale (xs to 3xl)
- **Transitions**: Standardized timing functions
- **Border Radius**: Consistent rounded corners
- **Shadows**: Shadow scale from small to extra large
- **Z-index**: Layering system

## Usage

### In HTML
```html
<link rel="stylesheet" href="assets/css/main.css" />
```

### Adding New Styles

1. **Small additions**: Add to the relevant module (e.g., new button styles → `base.css`)
2. **New sections**: Create a new CSS file and import it in `main.css`
3. **Animations**: Add keyframes to `animations.css`
4. **Responsive**: Add media queries to `responsive.css`

## Best Practices

1. **Use CSS Variables**: Always use variables from `base.css` instead of hard-coded values
   ```css
   /* Good */
   padding: var(--space-md);
   color: var(--primary-blue);
   
   /* Avoid */
   padding: 1rem;
   color: #005f8c;
   ```

2. **Mobile First**: Write base styles for mobile, then use `min-width` media queries
   ```css
   /* Mobile first */
   .element { font-size: 1rem; }
   
   @media (min-width: 768px) {
     .element { font-size: 1.2rem; }
   }
   ```

3. **BEM Naming**: Use Block Element Modifier methodology
   ```css
   .block { }
   .block__element { }
   .block--modifier { }
   ```

4. **Avoid Deep Nesting**: Keep specificity low
   ```css
   /* Good */
   .card { }
   .card__header { }
   
   /* Avoid */
   .section .container .card .header { }
   ```

## Performance Notes

- CSS imports use `@import url()` for better caching
- All animations respect `prefers-reduced-motion`
- Variables allow for easy theming and maintenance
- Modular structure enables code splitting in future builds

## Migration from Old CSS

The original `styles.css` (1,836 lines) has been split into 9 focused modules:

- **base.css**: Lines 1-250 (variables, reset, typography)
- **navbar.css**: Lines 38-200 (header and navigation)
- **hero.css**: Lines 219-483 (hero section)
- **services.css**: Lines 484-836 (services and bubbles)
- **pricing.css**: Lines 799-1021 (pricing section)
- **contact.css**: Lines 1022-1260 (contact form)
- **footer.css**: Lines 1261-1574 (footer)
- **animations.css**: Lines 446-1523 (all keyframes)
- **responsive.css**: Lines 1647-1836 (media queries)

The original file is preserved as `styles.css.backup` for reference.

