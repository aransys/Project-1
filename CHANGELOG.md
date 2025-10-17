# Changelog

All notable changes to Worcester Laundry Service project will be documented in this file.

## [2.0.0] - 2024-10-17

### 🎉 Major Release - Architecture Overhaul

This release represents a significant modernization of the codebase with improved maintainability, performance, and developer experience.

### Added

#### Build System & Tooling
- ✨ `package.json` with comprehensive NPM scripts for development and testing
- ✨ ESLint configuration for JavaScript linting
- ✨ Stylelint configuration for CSS linting
- ✨ Prettier for code formatting
- ✨ HTML validation integration
- ✨ Lighthouse performance auditing scripts
- ✨ Live-server for development with hot reload
- ✨ `.gitignore` for proper version control
- ✨ `CONTRIBUTING.md` with development guidelines
- ✨ `assets/css/README.md` documenting CSS architecture

#### CSS Architecture
- ✨ `base.css` - CSS custom properties, reset, and typography
- ✨ `navbar.css` - Navigation component styles
- ✨ `hero.css` - Hero section with video background
- ✨ `services.css` - Services section with bubble animations
- ✨ `pricing.css` - Pricing tables and cards
- ✨ `contact.css` - Contact form and information
- ✨ `footer.css` - Footer with newsletter subscription
- ✨ `animations.css` - All keyframe animations centralized
- ✨ `responsive.css` - Consolidated media queries
- ✨ `main.css` - Central import file for all modules

#### JavaScript Improvements
- ✨ Debounce utility function for scroll performance
- ✨ Enhanced video initialization with error handling
- ✨ Improved form validation with better UX
- ✨ Smooth scroll enhancement for anchor links
- ✨ Intersection Observer for lazy-loaded animations
- ✨ Performance monitoring in development mode
- ✨ Escape key support for mobile menu
- ✨ Body scroll lock when mobile menu is open

#### Performance Optimizations
- ⚡ Resource hints (`preconnect`, `dns-prefetch`) for external resources
- ⚡ Optimized font loading (reduced weights, added `display=swap`)
- ⚡ Async Font Awesome loading to prevent render blocking
- ⚡ Video `preload="metadata"` for faster initial load
- ⚡ `playsinline` attribute for better mobile video handling
- ⚡ Deferred JavaScript loading with `defer` attribute
- ⚡ Combined and debounced scroll event listeners

#### Documentation
- 📚 Comprehensive CSS architecture documentation
- 📚 Contributing guidelines with code style guide
- 📚 Updated README with v2.0 improvements
- 📚 Enhanced setup instructions
- 📚 Available commands documentation

### Changed

#### CSS Refactoring
- 🔄 Split monolithic `styles.css` (1,836 lines) into 9 focused modules
- 🔄 Introduced consistent CSS custom properties for colors, spacing, transitions
- 🔄 Consolidated duplicate media queries
- 🔄 Improved naming conventions with clear patterns
- 🔄 Better separation of concerns (layout, components, utilities)
- 🔄 Reduced CSS specificity for better maintainability

#### JavaScript Optimization
- 🔄 Combined duplicate scroll event listeners into single handler
- 🔄 Added debouncing for better scroll performance
- 🔄 Improved error handling throughout
- 🔄 Better code organization with clear sections
- 🔄 Enhanced commenting and documentation
- 🔄 Removed unused character counter code (was referencing non-existent element)

#### HTML Improvements
- 🔄 Updated CSS link to use `main.css`
- 🔄 Added performance optimization meta tags
- 🔄 Optimized font loading
- 🔄 Enhanced video element attributes
- 🔄 Script loading optimization with `defer`

### Fixed
- 🐛 Removed duplicate scroll event listeners
- 🐛 Fixed character counter referencing non-existent DOM element
- 🐛 Improved mobile menu accessibility
- 🐛 Better video fallback handling for autoplay failures
- 🐛 Prevented body scroll when mobile menu is active

### Performance Improvements
- 📈 Reduced CSS file complexity for better browser parsing
- 📈 Debounced scroll handlers reduce CPU usage
- 📈 Async CSS loading prevents render blocking
- 📈 Optimized font loading reduces layout shifts
- 📈 Better code splitting enables future improvements
- 📈 Resource hints reduce connection latency

### Developer Experience
- 💻 Hot-reload development server
- 💻 Code validation tools integrated
- 💻 Automated formatting
- 💻 Performance auditing built-in
- 💻 Clear file structure and documentation
- 💻 Easy onboarding with setup scripts

### Security
- 🔒 Added `.gitignore` to prevent committing sensitive files
- 🔒 No inline JavaScript or styles (better CSP compliance)

### Maintenance
- 🧹 Backed up original `styles.css` as `styles.css.backup`
- 🧹 Removed redundant code
- 🧹 Improved code comments
- 🧹 Better variable naming

## [1.0.0] - 2024-12-19

### Initial Release
- ✨ Responsive single-page design
- ✨ Hero section with video background
- ✨ Services section with bubble animations
- ✨ Pricing tables
- ✨ Contact form
- ✨ Newsletter subscription
- ✨ Mobile hamburger menu
- ✨ WCAG 2.1 Level AA accessibility
- ✨ Cross-browser compatibility
- ✨ Comprehensive testing and documentation

---

## Version Numbering

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR**: Incompatible changes
- **MINOR**: Backwards-compatible new features  
- **PATCH**: Backwards-compatible bug fixes

## Categories

- ✨ Added: New features
- 🔄 Changed: Changes in existing functionality
- 🗑️ Deprecated: Soon-to-be removed features
- 🐛 Fixed: Bug fixes
- 🔒 Security: Security improvements
- ⚡ Performance: Performance improvements
- 📚 Documentation: Documentation changes
- 💻 Developer Experience: Tooling and workflow improvements

