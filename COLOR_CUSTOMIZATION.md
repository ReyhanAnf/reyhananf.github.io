# 🎨 Color & Theme Customization Guide

## Overview

This guide helps you customize the look and feel of your enhanced portfolio to match your brand identity.

## 🌈 Color System

Your portfolio uses a Tailwind CSS color system with these key colors:

```
primary      - Main brand color (CTAs, highlights)
secondary    - Accent color (backgrounds, alt buttons)
background   - Page background
foreground   - Text color
card         - Card backgrounds
border       - Border color
muted        - Muted/secondary text
destructive  - Error states
```

## 📝 How to Change Colors

### 1. Access Your Theme Config

Open `tailwind.config.ts`:

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss"

const config = {
  theme: {
    extend: {
      colors: {
        // Your colors are defined here
        primary: { ... },
        secondary: { ... },
        // etc
      }
    }
  }
}
```

### 2. Change Primary Color (Most Common)

The primary color is used for:
- Buttons and CTAs
- Links and highlights
- Badges and tags
- Hero accents

**Find this in your config:**
```typescript
colors: {
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    // ... continue with your shades
    500: "#0ea5e9",  // Main color
    // ...
  }
}
```

**Popular Primary Colors:**
- Blue: `#0ea5e9` (Current)
- Purple: `#a855f7`
- Pink: `#ec4899`
- Green: `#10b981`
- Orange: `#f97316`
- Red: `#ef4444`
- Cyan: `#06b6d4`
- Indigo: `#6366f1`

**Example - Change to Purple:**
```typescript
primary: {
  50: "#faf5ff",
  100: "#f3e8ff",
  // ... etc
  500: "#a855f7", // Purple instead of blue
  // ...
}
```

### 3. Change Secondary Color

Secondary color is used for:
- Background accents
- Alternative buttons
- Secondary highlights

```typescript
secondary: {
  50: "#fafaf9",
  100: "#f5f5f4",
  500: "#78716c",  // Main secondary color
  // ...
}
```

## 🎨 Color Combinations

### Professional Blue + Purple
```typescript
primary: { 500: "#0ea5e9" },    // Blue
secondary: { 500: "#8b5cf6" },  // Purple
```

### Modern Dark + Teal
```typescript
primary: { 500: "#06b6d4" },    // Teal
secondary: { 500: "#1e293b" },  // Dark
```

### Bold Orange + Slate
```typescript
primary: { 500: "#f97316" },    // Orange
secondary: { 500: "#64748b" },  // Slate
```

### Tech Purple + Cyan
```typescript
primary: { 500: "#a855f7" },    // Purple
secondary: { 500: "#06b6d4" },  // Cyan
```

## 📐 Color Shades

Tailwind uses a 50-950 scale. Higher numbers = darker:

```
50   - Lightest (backgrounds)
100  - Very light
200  - Light
300  - Light-medium
400  - Medium-light
500  - Main color ← Use this for primary
600  - Medium-dark
700  - Dark
800  - Very dark
900  - Darkest
950  - Darkest (almost black)
```

**For a color you like**, generate shades at:
- [Tailwind Color Generator](https://uicolors.app/create)
- [Shadcn Color Picker](https://www.shadcn-ui.com/docs/theming)

## 🌙 Dark Mode

Your portfolio likely already supports dark mode. Colors automatically invert:

```typescript
// In Tailwind config or CSS
@media (prefers-color-scheme: dark) {
  // Dark colors applied automatically
}
```

**Or manually set dark variants:**
```typescript
primary: {
  500: "#0ea5e9",           // Light mode
  dark: "#38bdf8",          // Dark mode
}
```

## 🎭 Component-Specific Customization

### Buttons

Find button styling in `components/ui/button.tsx`:

```tsx
// Change button colors
className="bg-primary hover:bg-primary/90"
// To:
className="bg-blue-600 hover:bg-blue-700"
```

### Cards

Cards use `bg-card` which you can customize:

```typescript
// tailwind.config.ts
colors: {
  card: "#ffffff",      // Light mode
  // Dark mode handled by CSS variables
}
```

### Text

Text colors follow this hierarchy:

```
foreground       - Primary text (black/white)
muted-foreground - Secondary text (gray)
```

Change in config:
```typescript
foreground: "#1f2937",           // Dark text
"muted-foreground": "#6b7280",   // Gray text
```

## 🎨 Advanced: CSS Variables

For more control, use CSS variables in your globals.css:

```css
/* app/globals.css */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.6%;
    --primary: 0 84.6% 60.2%;
    --primary-foreground: 0 0% 100%;
    /* ... etc ... */
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: 0 0% 3.6%;
      --foreground: 0 0% 98%;
      --primary: 0 84.6% 60.2%;
      /* ... etc ... */
    }
  }
}
```

## 🔄 Gradient Customization

Components use gradients. Customize them:

```tsx
// In header-improved.tsx or other components
className="bg-gradient-to-r from-primary/10 via-card to-primary/5"
// Change to:
className="bg-gradient-to-r from-blue-500/10 via-white to-blue-500/5"
```

## 📊 Opacity Modifiers

Tailwind allows opacity control:

```
primary       - 100% opacity
primary/90    - 90% opacity
primary/75    - 75% opacity
primary/50    - 50% opacity
primary/25    - 25% opacity
primary/10    - 10% opacity (very light)
```

**Example: Lighter primary for backgrounds**
```tsx
className="bg-primary/10"  // Very light primary
className="border-primary/20"  // Subtle border
```

## 🎯 Common Customizations

### Make Links More Prominent
```tsx
// In component using links
className="text-primary hover:text-primary/80"
```

### Change Badge Colors
```tsx
// In skill-enhanced.tsx
className="bg-primary/10 text-primary"
// Or:
className="bg-green-500/10 text-green-600"
```

### Update Button Hover State
```tsx
className="hover:bg-primary/90"
// Change 90 to:
// 80 for subtle
// 95 for aggressive
```

## 🎨 Real Examples

### Example 1: Change to Purple Theme

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",  // ← Purple
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
      },
    }
  }
}
```

### Example 2: Dark Modern Theme

```typescript
// tailwind.config.ts
colors: {
  background: "#0f172a",    // Very dark blue
  foreground: "#f1f5f9",    // Light text
  primary: {
    500: "#06b6d4",         // Bright cyan
  },
  secondary: {
    500: "#1e293b",         // Dark slate
  },
  card: "#1e293b",          // Dark cards
}
```

### Example 3: Warm Theme

```typescript
// tailwind.config.ts
colors: {
  primary: {
    500: "#f97316",         // Orange
  },
  secondary: {
    500: "#ef4444",         // Red
  },
}
```

## ✅ Testing Your Changes

After updating colors:

1. **Clear cache**: `rm -rf .next`
2. **Rebuild**: `npm run build`
3. **Start dev**: `npm run dev`
4. **Check**:
   - Buttons look good ✓
   - Links are visible ✓
   - Badges are clear ✓
   - Text is readable ✓
   - Dark mode works ✓
   - Hover states look right ✓

## 📱 Responsive Color Changes

You can change colors based on screen size:

```tsx
className="text-primary md:text-blue-600 lg:text-purple-600"
```

But it's better to use theme config for consistency.

## 🎓 Tips & Tricks

1. **Contrast**: Ensure text is readable on backgrounds
2. **Consistency**: Use the same color throughout
3. **Accessibility**: Check color contrast ratios
4. **Brand**: Match your personal brand colors
5. **Testing**: Test in light and dark mode

## 🔗 Resources

- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Color Generator](https://uicolors.app/create)
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Psychology](https://www.interaction-design.org/literature/topics/color-psychology)

## 🆘 Troubleshooting

**Colors not changing?**
- Clear `.next` folder
- Restart dev server
- Check config syntax

**Colors look different on mobile?**
- Check responsive classes
- Test actual device, not just browser preview
- Verify media query breakpoints

**Dark mode not working?**
- Ensure next-themes is installed
- Check layout.tsx has theme provider
- Clear browser cache

---

Happy customizing! Make your portfolio uniquely yours! 🚀
