# Ronald Morand Campaign Website

A multilingual campaign website for Ronald Morand’s 2026 election campaign in Haiti.

**Live site:** https://rmorand2026.com  
**Hosting:** Render

## Features

- Home, About, Community, Donate, and Contact pages
- English, French, and Haitian Creole translations with visible language buttons
- Election countdown
- Campaign biography and community information
- Community photo slider, gallery, and click-to-expand images
- Local campaign videos in a swipeable row with Previous and More Videos buttons
- Links to Facebook campaign reels
- Haitian flag-inspired navbar, footer, and media cards
- Responsive layouts for desktop and mobile
- Donation links through Donorbox

## Tech Stack

React, Vite, React Router, Framer Motion, React Icons, CSS, i18next, and react-i18next.

## Project Structure

```text
src/
├── assets/             Campaign photos and local videos
├── components/         Navbar, Hero, CommunitySection, and other sections
├── data/               Campaign biography
├── pages/              Home, About, Community, Donate, Contact
├── styles/             Component stylesheets
├── App.jsx             Routes
├── i18n.js             Translations
└── main.jsx            App entry point
```

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

If the Vite app is inside a `frontend` directory, run these commands from that directory.

## Deployment

The site is deployed on **Render** and uses the custom domain **https://rmorand2026.com**. The domain and HTTPS setup should be managed through Render and the domain registrar’s DNS settings.

For a Render static site, the production build command is typically `npm run build`, with `dist` as the publish directory. React Router routes such as `/about` and `/contact` may require a rewrite from `/*` to `/index.html` in Render’s redirect/rewrite settings.

## Donations

The website links to the campaign’s hosted Donorbox donation page:

https://donorbox.org/ronald-morand-campaign-fund

Donation and payment details should be verified with the campaign owner before publication. Do not commit private banking or account information to this repository.

## Contact Form

The previous README described **Netlify Forms**, which does not automatically handle submissions on Render. Verify that the deployed form uses a working form service or backend before describing it as connected. Test a submission on the live site and confirm that the campaign receives it.

## Maintenance Notes

- Update site copy and translations in `src/i18n.js`.
- Update the long biography in `src/data/aboutBiography`.
- Update photos, videos, and Facebook reel links in `CommunitySection.jsx`.
- Keep content consistent across English, French, and Haitian Creole.
- Check mobile layouts and video playback after media updates.
