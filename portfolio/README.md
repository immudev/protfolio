# UI/UX Designer Portfolio

A simple and minimalist single-page portfolio website for UI/UX designers, featuring smooth scroll animations and a clean, modern design.

## Features

- **Hero Section**: Eye-catching introduction with resume download button
- **Services Section**: Showcase your design services (UI Design, UX Research, Prototyping)
- **Work Section**: Display your selected projects with descriptions
- **About Me Section**: Tell your story and share your background
- **Contact Section**: Make it easy for clients to reach you
- **Smooth Scroll Animations**: Framer Motion powered animations that trigger on scroll
- **Responsive Design**: Looks great on all devices
- **Minimalist Aesthetic**: Clean, modern design with ample whitespace

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **ESLint** - Code quality

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Customization

### 1. Personal Information

Edit `/app/page.tsx` to update:
- Your name and title in the Hero section
- Services you offer
- Project portfolio items
- About me content
- Contact information (email, phone, social links)

### 2. Resume

Replace `/public/resume.txt` with your actual resume PDF file named `resume.pdf`.

### 3. Colors

The portfolio uses a neutral color scheme with zinc tones. To customize colors, update the Tailwind classes in `/app/page.tsx`:
- `bg-zinc-900` - Dark backgrounds
- `text-zinc-600` - Secondary text
- `border-zinc-200` - Borders

### 4. Images

Replace the placeholder gradient backgrounds in the Work and About sections with actual images:
- Add your images to the `/public` folder
- Use Next.js `Image` component for optimized loading

### 5. Animations

Adjust animation timing and effects in the `fadeInUp` and `staggerContainer` variants in `/app/page.tsx`.

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main portfolio page
├── public/
│   └── resume.txt        # Resume file (replace with PDF)
├── package.json
└── README.md
```

## Deployment

Deploy easily on Vercel:

```bash
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

## License

Feel free to use this template for your own portfolio!
