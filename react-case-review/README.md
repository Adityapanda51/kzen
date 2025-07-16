---

# React Case Review App

A modern, responsive React application for a legal case review landing page, designed to help users affected by Mesothelioma connect with legal professionals. The app features a pixel-perfect UI, a secure claim form, and informative content, all optimized for accessibility and mobile responsiveness.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)

---

## Features

- **Free Case Review Card:** Highlights the benefits of a free, confidential case evaluation.
- **Claim Form:** Securely collects user information, including personal details and case specifics, with validation and privacy notice.
- **Auto-switching date pickers**
- **Mesothelioma Info Card:** Provides important information and facts for affected individuals, especially women.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Modern UI:** Clean, accessible layout using React and CSS.
- **Accessibility:** Semantic HTML for better usability.
- **Easy Customization:** Modular components and clear structure for quick updates.
- **Static image card with interactive "Contact Us" hotspot**
- **SEO-optimized with `meta description` and `robots.txt**

---

## Tech Stack

- **Frontend:** React (with Vite)
- **Styling:** CSS Modules / Plain CSS
- **Build Tool:** Vite
- **Package Manager:** npm

---


## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-case-review
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```
   (or the port shown in your terminal)

---

## Project Structure

```
react-case-review/
  ├── public/                  # Static files (e.g., vite.svg)
  ├── src/
  │   ├── assets/              # Images and icons
  │   │   ├── backgrounds/
  │   │   │   ├── bg-placeholder.jpg
  │   │   │   └── Rectangle.jpg
  │   │   ├── Group.jpg
  │   │   └── icons/
  │   ├── components/          # Reusable React components
  │   │   ├── ClaimForm.css
  │   │   ├── ClaimForm.jsx
  │   │   ├── FreeCaseReviewCard.css
  │   │   ├── FreeCaseReviewCard.jsx
  │   │   ├── MesotheliomaInfoCard.css
  │   │   ├── MesotheliomaInfoCard.jsx
  │   ├── pages/               # Page-level components
  │   │   └── HomePage.jsx
  │   ├── styles/              # Global styles
  │   │   └── global.css
  │   ├── App.css
  │   ├── App.jsx
  │   ├── index.css
  │   ├── main.jsx
  ├── package.json
  ├── package-lock.json
  ├── vite.config.js
  ├── eslint.config.js
  ├── index.html
  └── README.md
```

---

## Customization

- **Form Fields & Validation:**  
  Edit `src/components/ClaimForm.jsx` to add, remove, or change form fields and validation logic.

- **Informational Content:**  
  Update the text in `src/components/MesotheliomaInfoCard.jsx` and `src/components/FreeCaseReviewCard.jsx` to match your needs.

- **Styling:**  
  Adjust global styles in `src/styles/global.css` or component-specific styles in their respective CSS files.

- **Assets:**  
  Replace images in `src/assets/backgrounds/` and `src/assets/icons/` as needed.

---

## Deployment

To build the app for production:

```bash
npm run build
```

The output will be in the `dist/` folder. You can deploy this folder to any static hosting service (e.g., Netlify, Vercel, GitHub Pages).

---
