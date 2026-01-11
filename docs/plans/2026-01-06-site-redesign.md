# Site Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the portfolio site based on the mockups in `assets/img/designs/` - new header, footer, home page, about page, and project page template.

**Architecture:** Jekyll static site with TailwindCSS. Replace existing sidebar layout with new header/footer structure. Reuse existing content-section patterns for project pages.

**Tech Stack:** Jekyll, TailwindCSS, Alpine.js (for mobile menu)

---

## Task 1: Create New Header Include

**Files:**
- Create: `_includes/header.html`

**Step 1: Create the header file**

Create `_includes/header.html`:

```html
<header class="site-header">
  <a href="/" class="site-logo">THAIA TZICKAS</a>
  <nav class="site-nav">
    <a href="/">Work</a>
    <a href="/about">About</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
```

**Step 2: Commit**

```bash
git add _includes/header.html
git commit -m "feat: add new header include"
```

---

## Task 2: Update Footer Include with Contact Section

**Files:**
- Modify: `_includes/footer.html`

**Step 1: Replace footer content**

Replace contents of `_includes/footer.html` with:

```html
<footer id="contact" class="site-footer">
  <div class="footer-content">
    <div class="footer-section">
      <h4>Contact</h4>
      <a href="mailto:hello@thaiatzickas.com">hello@thaiatzickas.com</a>
    </div>
    <div class="footer-section">
      <h4>Social</h4>
      <div class="social-links">
        <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>THAIA TZICKAS</span>
  </div>
</footer>
```

**Step 2: Commit**

```bash
git add _includes/footer.html
git commit -m "feat: update footer with contact section"
```

---

## Task 3: Update Default Layout

**Files:**
- Modify: `_layouts/default.html`

**Step 1: Replace layout with new header/footer structure**

Replace contents of `_layouts/default.html` with:

```html
---
---
<!DOCTYPE html>
<html lang="en">
  {% include head.html %}

  <body class="bg-white text-black">
    {% include header.html %}
    <main id="main">
      {{ content }}
    </main>
    {% include footer.html %}
  </body>
</html>
```

**Step 2: Commit**

```bash
git add _layouts/default.html
git commit -m "refactor: update default layout with header/footer"
```

---

## Task 4: Update CSS - Remove Sidebar, Add New Styles

**Files:**
- Modify: `assets/styles/main.css`

**Step 1: Replace CSS with new styles**

Replace contents of `assets/styles/main.css` with:

```css
@tailwind base;
@tailwind components;

html {
  @apply font-body antialiased;
}

@layer base {
  body {
    font-family: "Geist", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }
}

@layer components {
  /* Header */
  .site-header {
    @apply fixed top-0 left-0 right-0 z-50;
    @apply flex justify-between items-center;
    @apply px-8 py-6;
    @apply bg-white;
  }

  .site-logo {
    @apply text-sm font-medium tracking-wide;
  }

  .site-nav {
    @apply flex gap-8;
  }

  .site-nav a {
    @apply text-sm text-grey-20 hover:text-black transition-colors;
  }

  /* Footer */
  .site-footer {
    @apply px-8 py-16 mt-24;
    @apply border-t border-grey-70;
  }

  .footer-content {
    @apply flex justify-between max-w-screen-xl mx-auto;
  }

  .footer-section h4 {
    @apply text-sm text-grey-20 mb-4;
  }

  .footer-section a {
    @apply text-sm hover:text-grey-20 transition-colors;
  }

  .social-links {
    @apply flex flex-col gap-2;
  }

  .footer-bottom {
    @apply mt-16 text-center;
    @apply text-sm font-medium tracking-wide;
  }

  /* Main content area */
  #main {
    @apply pt-24; /* Space for fixed header */
  }

  /* Home page */
  .hero-statement {
    @apply px-8 py-16 max-w-4xl;
  }

  .hero-statement p {
    @apply text-3xl lg:text-4xl font-normal leading-tight;
  }

  .project-grid {
    @apply px-8;
  }

  .project-row {
    @apply grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8;
  }

  .project-row.reverse {
    @apply lg:flex-row-reverse;
  }

  .project-card {
    @apply relative block;
  }

  .project-card img {
    @apply w-full h-auto;
    @apply hover:opacity-90 transition-opacity duration-300;
  }

  .project-card .project-title {
    @apply mt-3 text-sm;
  }

  .project-card.align-right {
    @apply lg:col-start-2;
  }

  .project-card.align-left {
    @apply lg:col-start-1;
  }

  /* About page */
  .about-section {
    @apply grid grid-cols-1 lg:grid-cols-12 gap-8;
    @apply px-8 py-16;
    @apply border-b border-grey-70;
  }

  .about-label {
    @apply lg:col-span-3;
    @apply text-sm text-grey-20;
  }

  .about-content {
    @apply lg:col-span-9;
  }

  .about-bio {
    @apply text-2xl lg:text-3xl leading-relaxed max-w-3xl;
  }

  .about-image {
    @apply px-8 py-16;
  }

  .about-image img {
    @apply w-full h-auto;
  }

  .testimonial-section {
    @apply grid grid-cols-1 lg:grid-cols-12 gap-8;
    @apply px-8 py-16;
  }

  .testimonial-content {
    @apply lg:col-span-9;
  }

  .testimonial-quote {
    @apply text-xl lg:text-2xl leading-relaxed mb-8;
  }

  .testimonial-attribution {
    @apply flex items-center gap-4;
  }

  .testimonial-avatar {
    @apply w-12 h-12 rounded-full object-cover;
  }

  .testimonial-name {
    @apply text-sm font-medium;
  }

  .testimonial-title {
    @apply text-sm text-grey-20;
  }

  /* Project page */
  .project-hero {
    @apply relative;
  }

  .project-hero img {
    @apply w-full h-auto;
  }

  .project-hero-title {
    @apply absolute bottom-0 left-0 right-0;
    @apply p-8;
    @apply text-white text-4xl lg:text-6xl font-medium;
    @apply bg-gradient-to-t from-black/50 to-transparent;
  }

  .project-nav {
    @apply flex justify-between;
    @apply px-8 py-8;
    @apply border-t border-grey-70;
  }

  .project-nav a {
    @apply text-sm text-grey-20 hover:text-black transition-colors;
  }

  /* Content sections (keep existing patterns) */
  .content-section {
    img, video {
      @apply w-full h-auto;
    }

    &.text-box {
      @apply px-8 py-16;
    }

    .horizontal-split {
      @apply grid grid-cols-1 lg:grid-cols-2;
      @apply gap-0;

      > * {
        @apply w-full block;
      }
    }

    .half-text {
      @apply my-2 lg:pr-10;
    }

    h3 {
      @apply text-2xl font-medium mb-4;
    }
  }
}

@tailwind utilities;
```

**Step 2: Commit**

```bash
git add assets/styles/main.css
git commit -m "refactor: replace sidebar styles with new header/footer/page styles"
```

---

## Task 5: Update Home Layout

**Files:**
- Modify: `_layouts/home.html`

**Step 1: Replace home layout with new design**

Replace contents of `_layouts/home.html` with:

```html
---
layout: default
---

<section class="hero-statement">
  <p>I'm passionate about understanding how different design disciplines intersect and create meaningful connections.</p>
</section>

<section class="project-grid">
  {% for post in site.posts %}
    {% assign mod = forloop.index | modulo: 2 %}
    <div class="project-row">
      <a href="/{{ post.slug }}" class="project-card {% if mod == 0 %}align-right{% else %}align-left{% endif %}">
        <img src="/{{ post.hero-image }}" alt="{{ post.title }}">
        <span class="project-title">{{ post.title }}</span>
      </a>
    </div>
  {% endfor %}
</section>
```

**Step 2: Commit**

```bash
git add _layouts/home.html
git commit -m "feat: update home layout with hero and alternating grid"
```

---

## Task 6: Create About Page

**Files:**
- Create: `about.html`

**Step 1: Create about page**

Create `about.html` in root:

```html
---
layout: default
title: "About"
---

<section class="about-section">
  <span class="about-label">About</span>
  <div class="about-content">
    <p class="about-bio">
      Crafting visual experiences that captivate and inspire. I'm a graphic designer dedicated to bringing visions to life. With expertise in creating impactful retail environments and brand experiences, my portfolio showcases a fusion of creativity and functionality.
    </p>
  </div>
</section>

<section class="about-image">
  <img src="/assets/img/about/profile.jpg" alt="Thaia Tzickas">
</section>

<section class="testimonial-section">
  <span class="about-label">Testimonials</span>
  <div class="testimonial-content">
    <p class="testimonial-quote">
      "Working with Thaia was an incredible experience. Her attention to detail and creative vision transformed our retail space into something truly special. She delivered beyond our expectations."
    </p>
    <div class="testimonial-attribution">
      <img src="/assets/img/testimonials/avatar.jpg" alt="" class="testimonial-avatar">
      <div>
        <div class="testimonial-name">Name Here</div>
        <div class="testimonial-title">Title @ Company</div>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Commit**

```bash
git add about.html
git commit -m "feat: add about page with bio and testimonials"
```

---

## Task 7: Update Project Layout with Hero and Navigation

**Files:**
- Modify: `_layouts/project.html`

**Step 1: Replace project layout**

Replace contents of `_layouts/project.html` with:

```html
---
layout: default
---

<section class="project-hero">
  <img src="/{{ page.hero-image }}" alt="{{ page.title }}">
  <h1 class="project-hero-title">{{ page.title }}</h1>
</section>

<article class="project-content">
  {{ content }}
</article>

{% assign posts = site.posts %}
{% assign post_count = posts | size %}
{% for post in posts %}
  {% if post.slug == page.slug %}
    {% assign current_index = forloop.index0 %}
  {% endif %}
{% endfor %}

{% assign prev_index = current_index | minus: 1 %}
{% assign next_index = current_index | plus: 1 %}

<nav class="project-nav">
  {% if prev_index >= 0 %}
    {% assign prev_post = posts[prev_index] %}
    <a href="/{{ prev_post.slug }}">&larr; {{ prev_post.title }}</a>
  {% else %}
    <span></span>
  {% endif %}

  {% if next_index < post_count %}
    {% assign next_post = posts[next_index] %}
    <a href="/{{ next_post.slug }}">{{ next_post.title }} &rarr;</a>
  {% else %}
    <span></span>
  {% endif %}
</nav>
```

**Step 2: Commit**

```bash
git add _layouts/project.html
git commit -m "feat: update project layout with hero title and prev/next nav"
```

---

## Task 8: Update Project Posts - Remove Duplicate Hero Image

**Files:**
- Modify: `_posts/2025-05-27-SS23_Slipspeed.md`
- Modify: `_posts/2025-05-27-SS22_HovrMachina3.md`
- Modify: `_posts/2025-05-27-FW22_Winterized.md`

**Step 1: Update Slipspeed post**

In `_posts/2025-05-27-SS23_Slipspeed.md`, remove the first content-section that duplicates the hero image (lines 8-10):

```html
<div class="content-section">
    <img src="assets/img/projects/SS23_Slipspeed/1.jpg" />
</div>
```

The file should start with the text-box section after the frontmatter.

**Step 2: Update HovrMachina3 post**

In `_posts/2025-05-27-SS22_HovrMachina3.md`, remove the first content-section (lines 8-10):

```html
<div class="content-section">
    <img src="assets/img/projects/SS22_HovrMachina3/1.jpg" />
</div>
```

**Step 3: Update Winterized post**

In `_posts/2025-05-27-FW22_Winterized.md`, remove the first content-section (lines 8-10):

```html
<div class="content-section">
    <img src="assets/img/projects/FW22_Winterized/1.jpg" />
</div>
```

**Step 4: Commit**

```bash
git add _posts/
git commit -m "refactor: remove duplicate hero images from project posts"
```

---

## Task 9: Delete Old Sidebar Include

**Files:**
- Delete: `_includes/sidebar.html`
- Delete: `_includes/social-links.html` (if unused)

**Step 1: Remove old includes**

```bash
rm _includes/sidebar.html
rm _includes/social-links.html
```

**Step 2: Commit**

```bash
git add -A
git commit -m "chore: remove unused sidebar and social-links includes"
```

---

## Task 10: Build and Test

**Step 1: Run Jekyll build**

```bash
bundle exec jekyll build
```

Expected: Build completes without errors.

**Step 2: Run Jekyll serve**

```bash
bundle exec jekyll serve
```

Expected: Site runs at localhost:4000. Verify:
- Home page shows header, hero statement, project grid
- About page shows bio and testimonials sections
- Project pages show hero image with title overlay
- Contact link scrolls to footer
- Previous/next navigation works on project pages

**Step 3: Commit any fixes if needed**

---

## Task 11: Create Placeholder Directories for About Assets

**Files:**
- Create: `assets/img/about/.gitkeep`
- Create: `assets/img/testimonials/.gitkeep`

**Step 1: Create directories**

```bash
mkdir -p assets/img/about
mkdir -p assets/img/testimonials
touch assets/img/about/.gitkeep
touch assets/img/testimonials/.gitkeep
```

**Step 2: Commit**

```bash
git add assets/img/about/.gitkeep assets/img/testimonials/.gitkeep
git commit -m "chore: add placeholder directories for about page assets"
```
