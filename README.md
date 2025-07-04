# Haven Landing Page

A modern, neumorphic landing page for Haven - the easiest way to grow your savings with real yield.

## Tech Stack

- **Framework:** Remix with TypeScript
- **Styling:** Tailwind CSS with custom neumorphic shadows
- **Animations:** Framer Motion
- **Icons:** Heroicons & Lucide React
- **Fonts:** Playfair Display (headers) & Montserrat (body)

## Features

- 🎨 **Multi-theme support** - Light Pink, Terracotta, Grey, and Obsidian themes
- 📱 **Mobile-first design** - Optimized for mobile with responsive layouts
- ✨ **Neumorphic UI** - Soft, tactile design elements
- 🎯 **SEO optimized** - Targeting stable coin, savings, and finance keywords
- 📧 **Email capture** - Waitlist signup functionality
- 🔄 **Smooth animations** - Framer Motion powered interactions

## Project Structure

```
app/
├── components/
│   ├── ui/          # Reusable UI components
│   ├── sections/    # Page sections (Hero, Features, etc.)
│   └── layout/      # Layout components
├── lib/
│   ├── constants.ts # FAQ data, comparison table, site config
│   ├── themes.ts    # Color themes and theme utilities
│   └── utils.ts     # Utility functions
├── types/
│   └── index.ts     # TypeScript type definitions
├── hooks/           # Custom React hooks
└── styles/          # Additional styles
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Themes

The app supports four color themes:
- **Light Pink** (default) - Soft, warm pink tones
- **Terracotta** - Earthy, orange-red palette
- **Grey** - Clean, neutral grays
- **Obsidian** - Dark, high-contrast theme

## Next Steps

1. Create theme context and provider
2. Build reusable UI components
3. Implement page sections
4. Add email capture functionality
5. Set up analytics
6. Add mobile app mockups

## Environment Variables

```bash
# Add to .env file when needed
FORMSPREE_ENDPOINT=your_formspree_endpoint
ANALYTICS_ID=your_analytics_id
```
