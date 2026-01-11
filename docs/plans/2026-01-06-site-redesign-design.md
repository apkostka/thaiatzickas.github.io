# Site Redesign Design

Portfolio website redesign for Thaia Tzickas based on provided design mockups.

## Global Elements

### Header
- Left: "THAIA TZICKAS" (links to home)
- Right: "Work / About / Contact" navigation
- "Work" links to home page (project grid)
- "About" links to about page
- "Contact" scrolls to footer contact section

### Footer
- Contact section with email and social links
- Anchor target for "Contact" nav link

## Pages

### Home Page

**Hero Section**
- Large statement text: "I'm passionate about understanding how different design disciplines intersect and create meaningful connections."
- Full-width, prominent typography

**Project Grid**
- 2-column layout with equal-sized project images
- Alternating left/right positioning (first project on left, second on right, etc.)
- Each project displays:
  - Project image (hero-image from frontmatter)
  - Project title label (positioned on opposite side of image)
- Links to individual project pages

### About Page

**Bio Section**
- Two-column layout
- Left: "About" label
- Right: Bio paragraph (placeholder text for Thaia to fill in)

**Image Section**
- Large full-width or near-full-width image
- Placeholder for Thaia's photo or featured work

**Testimonials Section**
- Left: "Testimonials" label
- Right: Quote block with:
  - Quote text
  - Attribution: Name, title/company, avatar image

### Project Page Template

**Hero Section**
- Full-width hero image
- Large project title overlaid on image

**Content Sections**
Flexible content blocks defined in each project's markdown:
- Full-width images
- Side-by-side image pairs (horizontal-split)
- Text blocks with title and two-column paragraph layout

**Project Navigation**
- Previous/next project links at bottom
- Links to adjacent projects in chronological order

## Data Structure

### Project Frontmatter
```yaml
---
layout: project
title: "Project Title"
slug: "project-slug"
hero-image: "assets/img/projects/ProjectFolder/hero.jpg"
---
```

### Testimonial Data (in about page or _data file)
```yaml
testimonials:
  - quote: "Testimonial text..."
    name: "Person Name"
    title: "Job Title @ Company"
    avatar: "assets/img/testimonials/avatar.jpg"
```

## Typography & Styling

- Clean, minimal aesthetic
- White/light gray background
- Black text
- Large, bold headings for hero statements
- Consistent spacing and alignment with design mockups
- Existing TailwindCSS setup will be used for styling

## Technical Notes

- Jekyll static site with existing structure
- TailwindCSS for styling
- Alpine.js available for interactivity (mobile menu)
- No JavaScript required for core functionality
