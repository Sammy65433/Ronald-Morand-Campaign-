


# Ronald Morand Campaign Website

A multilingual campaign website for Ronald Morand’s 2026 election campaign in Haiti.

**Live site:** https://rmorand2026.com  
**Hosting:** Render

## My Role and Contributions

I developed the campaign website using React and Vite, creating a responsive experience for visitors on desktop and mobile. My work included:

- Building the Home, About, Community, Donate, and Contact pages with React Router.
- Adding English, French, and Haitian Creole language options using i18next and react-i18next.
- Creating campaign-focused UI elements, including an election countdown, photo gallery, expandable images, and a swipeable video section.
- Organizing campaign photos, videos, biography content, and Facebook reel links so the site can be updated as the campaign evolves.
- Styling the navigation, footer, and media cards with colors inspired by the Haitian flag.
- Connecting donation calls to action to a hosted Donorbox page.
- Deploying the site on Render with a custom domain.

## Features

- Responsive Home, About, Community, Donate, and Contact pages
- English, French, and Haitian Creole language buttons
- Election countdown
- Campaign biography and community information
- Photo slider, gallery, and click-to-expand images
- Local campaign videos in a swipeable row with Previous and More Videos controls
- Links to Facebook campaign reels
- Donation links through Donorbox

## Tech Stack

React, Vite, React Router, Framer Motion, React Icons, CSS, i18next, and react-i18next.

## Technical Highlights

**Multilingual content:** Used i18next and react-i18next to present campaign content in three languages and provide visible language-switching controls.

**Media-heavy pages:** Built interactive photo and video sections that allow visitors to explore campaign content without leaving the site.

**Responsive design:** Adapted page layouts, navigation, and media components for desktop and mobile screens.

**Deployment:** Published the Vite application on Render and connected it to a custom domain.

## Project Structure

```text
src/
├── assets/          Campaign photos and local videos
├── components/      Navbar, Hero, CommunitySection, and other sections
├── data/            Campaign biography
├── pages/           Home, About, Community, Donate, Contact
├── styles/          Component stylesheets
├── App.jsx          Routes
├── i18n.js          Translations
└── main.jsx         App entry point
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

The site is deployed on Render at https://rmorand2026.com. A typical Render static-site configuration uses `npm run build` as the build command and `dist` as the publish directory. Client-side routes may require a rewrite from `/*` to `/index.html`.

## Donations

Donation buttons link to the campaign’s hosted Donorbox page:

https://donorbox.org/ronald-morand-campaign-fund

Donation and payment details should be verified with the campaign owner before publication. Private banking or account information should never be committed to this repository.

## Contact Form Status

The contact page is included in the site. The deployed form’s submission handling still needs to be verified. Netlify Forms does not automatically process submissions from a site hosted on Render, so this README does not claim that messages are currently delivered.

## Future Improvements

- Connect the contact form to a verified form service or backend, then confirm campaign staff receive test submissions.
- Improve accessibility by reviewing keyboard navigation, image descriptions, form labels, and color contrast.
- Optimize campaign images and videos for faster mobile loading.
- Add a content-management workflow so campaign staff can update media and copy without editing source code.
- Review all three language versions whenever campaign information changes.
- Add privacy-conscious analytics to understand which pages visitors use most.

## Maintenance Notes

- Update site copy and translations in `src/i18n.js`.
- Update the long biography in `src/data/aboutBiography`.
- Update photos, videos, and Facebook reel links in `CommunitySection.jsx`.
- Check content consistency across English, French, and Haitian Creole.
- Recheck mobile layouts and video playback after media updates.

