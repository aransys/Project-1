# 🚀 Quick Start Guide

## For Users (Just Want to View the Site)

1. Open `index.html` in your web browser
2. That's it! 

## For Developers (Want to Work on the Project)

### Option 1: Simple Setup (No Installation)
```bash
# Just open the file
open index.html
# or double-click index.html in your file explorer
```

### Option 2: Professional Setup (Recommended)

#### Step 1: Install Node.js
- Download from [nodejs.org](https://nodejs.org/) (if not installed)

#### Step 2: Install Development Tools
```bash
cd Project-1
npm install
```

#### Step 3: Start Development Server
```bash
npm run dev
```
Opens at `http://localhost:3000` with automatic reload on changes.

---

## 📋 Common Tasks

### Making Changes to Styles

**Find the right file:**
```
assets/css/
├── navbar.css    ← Navigation styles
├── hero.css      ← Hero section styles
├── services.css  ← Services section styles
├── pricing.css   ← Pricing styles
├── contact.css   ← Contact form styles
├── footer.css    ← Footer styles
└── base.css      ← Colors, spacing, global styles
```

**Make your changes:**
1. Edit the appropriate CSS file
2. Save
3. Browser automatically reloads (if using `npm run dev`)

### Changing Colors

Edit `assets/css/base.css`:
```css
:root {
  --primary-blue: #005f8c;     /* Change this */
  --accent-blue: #98deff;       /* Or this */
  /* ... */
}
```
All colors update automatically throughout the site!

### Adding New JavaScript Functionality

Edit `assets/js/script.js`:
```javascript
// Add your code in the appropriate section
// ==========================================================================
// Your Feature Name
// ==========================================================================

function yourFunction() {
  // Your code here
}
```

---

## 🛠️ Development Commands

```bash
# Development
npm run dev              # Start development server (hot reload)
npm run serve            # Simple server without hot reload

# Code Quality
npm run validate         # Check everything (HTML, CSS, JS)
npm run validate:html    # Check HTML only
npm run validate:css     # Check CSS only
npm run validate:js      # Check JavaScript only
npm run format           # Auto-format all code

# Performance
npm run lighthouse           # Full performance audit
npm run lighthouse:mobile    # Mobile performance audit
npm run lighthouse:desktop   # Desktop performance audit
```

---

## 🎯 Quick Fixes

### CSS Not Loading?
Check that `index.html` has:
```html
<link rel="stylesheet" href="assets/css/main.css" />
```

### JavaScript Not Working?
1. Check browser console (F12)
2. Look for error messages
3. Ensure `script.js` is loaded:
```html
<script src="assets/js/script.js" defer></script>
```

### Changes Not Showing?
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Close and reopen the page

---

## 📁 Project Structure

```
Project-1/
│
├── index.html              ← Main page
├── thankyou.html          ← Contact form thank you
├── newsletter-thanks.html ← Newsletter thank you
│
├── assets/
│   ├── css/
│   │   ├── main.css        ← Import file (use this in HTML)
│   │   ├── base.css        ← Variables, colors, spacing
│   │   ├── navbar.css      ← Navigation
│   │   ├── hero.css        ← Hero section
│   │   ├── services.css    ← Services section
│   │   ├── pricing.css     ← Pricing section
│   │   ├── contact.css     ← Contact form
│   │   ├── footer.css      ← Footer
│   │   ├── animations.css  ← All animations
│   │   └── responsive.css  ← Media queries
│   │
│   ├── js/
│   │   └── script.js       ← All JavaScript
│   │
│   ├── images/            ← Images
│   ├── videos/            ← Videos
│   └── favicon/           ← Favicons
│
├── package.json           ← NPM configuration
├── README.md              ← Full documentation
├── CONTRIBUTING.md        ← How to contribute
├── CHANGELOG.md           ← Version history
├── IMPROVEMENTS.md        ← Technical improvements
└── QUICK_START.md         ← This file
```

---

## 🎨 Customization Guide

### Change Site Colors
1. Open `assets/css/base.css`
2. Edit the `:root` variables:
```css
:root {
  --primary-blue: #YOUR_COLOR;
  --accent-blue: #YOUR_COLOR;
}
```

### Change Fonts
1. Open `index.html`
2. Replace Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT" />
```
3. Update `assets/css/base.css`:
```css
body {
  font-family: "YOUR_FONT", sans-serif;
}
```

### Change Content
Edit `index.html`:
- Hero text: Search for `<h1 class="hero-title">`
- Services: Search for `<section id="services">`
- Pricing: Search for `<section id="pricing">`
- Contact info: Search for `<section id="contact">`

### Add New Section
1. Add HTML in `index.html`
2. Create new CSS file: `assets/css/your-section.css`
3. Import in `assets/css/main.css`:
```css
@import url('your-section.css');
```

---

## 🐛 Common Issues

### Issue: CSS Changes Not Applying
**Solution:** Hard refresh or clear cache

### Issue: JavaScript Console Errors
**Solution:** Check that all files exist and paths are correct

### Issue: Fonts Not Loading
**Solution:** Check internet connection (fonts load from Google)

### Issue: Images Not Showing
**Solution:** Check that image paths are correct (case-sensitive!)

### Issue: Video Not Playing
**Solution:** 
- Check video file exists at `assets/videos/laundry-service.mp4`
- Some browsers block autoplay

---

## 📚 Learn More

- **Full Documentation**: Read `README.md`
- **Technical Details**: Read `IMPROVEMENTS.md`
- **Contributing Guide**: Read `CONTRIBUTING.md`
- **Version History**: Read `CHANGELOG.md`
- **CSS Architecture**: Read `assets/css/README.md`

---

## 💡 Tips

1. **Use the development server** (`npm run dev`) for the best experience
2. **Validate your code** (`npm run validate`) before committing
3. **Format your code** (`npm run format`) for consistency
4. **Test in multiple browsers** before deploying
5. **Check performance** (`npm run lighthouse`) regularly

---

## 🆘 Need Help?

1. Check the documentation files listed above
2. Look for similar code in existing files
3. Check browser console (F12) for errors
4. Search for error messages online
5. Create an issue on GitHub

---

## ✅ Before You Commit

```bash
# Run these commands:
npm run validate    # Check code quality
npm run format      # Format code
npm run lighthouse  # Check performance

# Make sure:
# ✓ No console errors
# ✓ Works in Chrome, Firefox, Safari
# ✓ Responsive on mobile
# ✓ Lighthouse score > 90
```

---

**Happy Coding! 🎉**

For detailed information, see the main [README.md](README.md)

