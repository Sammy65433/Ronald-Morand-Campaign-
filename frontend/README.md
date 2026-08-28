```md
Ronald Morand Campaign Website

Overview

This project is a React + Vite campaign fundraising website for Ronald Morand’s 2026 election campaign in Haiti.

The site includes:
- a landing page
- an about page
- a community/media page
- a donate page
- a contact page
- multilingual support for English, French, and Haitian Creole
- third-party donation support through Donorbox
- campaign images, videos, and community gallery sections
- modern styling with glassmorphism, motion animations, and responsive layout
- Netlify deployment
- Netlify contact form handling

Live Site

- https://rmorand2026.netlify.app/

Tech Stack

- React
- Vite
- React Router DOM
- Framer Motion
- React Icons
- CSS
- Donorbox
- i18next
- react-i18next
- Netlify

Project Structure

```bash
src/
  assets/
  components/
  pages/
  styles/
  App.jsx
  main.jsx
  i18n.js
```

Components

1. `Navbar.jsx`
Purpose:
- top navigation bar for the website
- links to Home, About, Community, Donate, and Contact
- contains language switcher support
- styled with premium dark glass navbar styling

2. `Hero.jsx`
Purpose:
- main homepage hero section
- campaign headline and mission statement
- countdown to election day
- donate button linked to Donorbox
- campaign image
- floating badge, quote card, and Haiti-inspired visual accents

3. `Countdown.jsx`
Purpose:
- countdown timer to Election Day: December 13, 2026
- displays days, hours, minutes, and seconds
- translation support added

4. `CampaignSpotlight.jsx`
Purpose:
- premium image-text section on the homepage
- highlights Ronald Morand’s campaign vision
- includes two images, icons, quote card, and glass layout
- translation support added

5. `AboutSection.jsx`
Purpose:
- main content for the About page
- explains Ronald Morand’s mission, leadership, and vision
- includes two images and mission cards
- translation support added

6. `CommunitySection.jsx`
Purpose:
- main content for the Community page
- shows community hero area
- includes image slider
- shows community photos first
- includes media banner
- includes Facebook video/reel links
- uses campaign/community images from assets
- translation support added

7. `DonateSection.jsx`
Purpose:
- main content for the Donate page
- focused fundraising layout
- includes campaign goal
- includes suggested donation levels
- links to Donorbox hosted donation page
- includes backup donation methods like Zelle, bank transfer, and campaign email
- translation support added
- Donorbox embed removed in favor of cleaner CTA button

8. `ContactSection.jsx`
Purpose:
- contact form for supporters or people with questions
- collects name, email, phone, and message
- connected to Netlify Forms
- translation support added

9. `SupportSection.jsx`
Purpose:
- extra homepage fundraising/support section
- highlights sample donation amounts and campaign support messaging
- translation support added

10. `Footer.jsx`
Purpose:
- footer at bottom of pages
- contains campaign copyright
- translation support added

11. `LanguageSwitcher.jsx`
Purpose:
- dropdown language selector
- changes site language using i18next
- supports English, French, and Haitian Creole

12. `GoogleTranslate.jsx`
Purpose:
- earlier test component for Google Translate widget
- no longer needed in final translation flow
- replaced by `i18next` + `LanguageSwitcher`

Pages

1. `Home.jsx`
Purpose:
- main landing page

Contains:
- Navbar
- Hero
- CampaignSpotlight
- SupportSection
- Footer

2. `About.jsx`
Purpose:
- About page route

Contains:
- Navbar
- AboutSection
- Footer

3. `Community.jsx`
Purpose:
- Community page route

Contains:
- Navbar
- CommunitySection
- Footer

4. `Donate.jsx`
Purpose:
- Donate page route

Contains:
- Navbar
- DonateSection
- Footer

5. `Contact.jsx`
Purpose:
- Contact page route

Contains:
- Navbar
- ContactSection
- Footer

Styles

1. `index.css`
Purpose:
- global resets
- base font styles
- body styling
- links, buttons, inputs defaults

2. `App.css`
Purpose:
- shared layout utilities
- section spacing
- general reusable styles

3. `Navbar.css`
Purpose:
- premium sticky glass navbar styling
- hover effects
- dark campaign header look
- responsive nav layout

4. `Hero.css`
Purpose:
- homepage hero styling
- gradients
- glass cards
- floating badge
- quote card
- image card
- countdown styling
- CTA buttons

5. `CampaignSpotlight.css`
Purpose:
- homepage spotlight section styling
- two-image layout
- glass cards
- icons
- quote card
- responsive design

6. `AboutSection.css`
Purpose:
- About page styling
- text/image split layout
- mission cards
- glass and premium section design

7. `CommunitySection.css`
Purpose:
- Community page styling
- hero area
- image slider
- photo gallery
- media banner
- Facebook video cards
- responsive grid layout

8. `DonateSection.css`
Purpose:
- Donate page styling
- donation CTA layout
- progress bar
- impact cards
- Donorbox button
- support method cards
- responsive donation page design

9. `ContactSection.css`
Purpose:
- contact form styling
- contact info card styling
- inputs, textarea, buttons, spacing

10. `Footer.css`
Purpose:
- footer styling

Routing

`App.jsx` handles routes:
- `/`
- `/about`
- `/community`
- `/donate`
- `/contact`

`main.jsx`
Purpose:
- renders React app
- wraps app in `BrowserRouter`
- imports global CSS
- imports i18n configuration

`i18n.js`
Purpose:
- multilingual translation setup
- supports:
  - English
  - French
  - Haitian Creole
- used with `react-i18next`

Assets

Current assets include:
- Ronald Morand portrait/campaign images
- community images
- Facebook reel links for campaign media

Donation Setup

Main donation platform:
- Donorbox

Hosted donation link:
- https://donorbox.org/ronald-morand-campaign-fund

Backup donation methods currently shown:
- Zelle: `267-616-3905`
- Account Number: `52709339541`
- Routing Number: `021200025`
- Campaign Email: `rmorand2026@gmail.com`

Deployment

Hosted on:
- Netlify

Live URL:
- https://rmorand2026.netlify.app/

Netlify Features Used:
- site hosting
- continuous deploy
- Netlify Forms for contact form submissions

Features Completed

- Vite React app setup
- React Router page routing
- homepage hero section
- election countdown
- premium navbar styling
- about page design
- community page with slider, media, and gallery
- donation page redesign
- donorbox donation link integration
- multilingual support with i18n
- language switcher setup
- motion animations with Framer Motion
- glassmorphism styling
- responsive layouts
- campaign/community image integration
- Netlify deployment
- Netlify contact form connection

Translation Status

Completed:
- English
- French
- Haitian Creole

Translation is handled through:
- `i18n.js`
- `useTranslation()`
- `LanguageSwitcher.jsx`

Things Still To Finish

- connect custom domain fully when ready
- verify final donation processor setup with campaign owner
- confirm all live donation/account details with owner
- optional final polish on copy/content
- optional backend/contact storage if needed later

Dependencies Used

Install commands used during project:

Frontend setup:
```bash
npm create vite@latest frontend -- --template react
npm install
npm install react-router-dom
npm install framer-motion
npm install react-icons
npm install i18next react-i18next
```

Optional or earlier packages discussed:
- axios
- react-countup

How to Run

From the frontend folder:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Future Improvements

- connect custom GoDaddy domain
- add live payment processor once campaign owner completes setup
- add clickable lightbox for community photos
- add analytics if needed
- improve donor/supporter data collection if needed
- optional admin dashboard later

Notes

- The site is designed for campaign fundraising and community storytelling
- Donorbox is being used instead of Stripe product links because it better supports donation workflows
- Contact form is handled through Netlify
- Community photos should remain authentic where possible
- Domain connection is intentionally being saved for the final step
- Payment processor verification should be completed by the campaign owner using their own banking and identity information
```



