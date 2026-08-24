

Ronald Morand Campaign Website

Overview

This project is a React + Vite campaign fundraising website for Ronald Morand’s 2026 election campaign in Haiti.

The site includes:
- a landing page
- an about page
- a community/media page
- a donate page
- a contact page
- multilingual support started for English, French, and Haitian Creole
- third-party donation support through Donorbox
- campaign images, videos, and community gallery sections
- modern styling with glassmorphism, motion animations, and responsive layout

Tech Stack

- React
- Vite
- React Router DOM
- Framer Motion
- React Icons
- CSS
- Donorbox
- i18next / react-i18next

Project Structure

src/
- assets/
- components/
- pages/
- styles/
- App.jsx
- main.jsx
- i18n.js

Components

1. Navbar.jsx
Purpose:
- top navigation bar for the website
- links to Home, About, Community, Donate, and Contact
- contains language switcher support
- styled with premium dark glass navbar styling

2. Hero.jsx
Purpose:
- main homepage hero section
- campaign headline and mission statement
- countdown to election day
- donate button linked to Donorbox
- campaign image
- floating badge, quote card, and Haiti-inspired visual accents

3. Countdown.jsx
Purpose:
- countdown timer to Election Day: December 13, 2026
- displays days, hours, minutes, seconds

4. CampaignSpotlight.jsx
Purpose:
- premium image-text section on the homepage
- highlights Ronald Morand’s campaign vision
- includes two images, icons, quote card, and glass layout

5. AboutSection.jsx
Purpose:
- main content for the About page
- explains Ronald Morand’s mission, leadership, and vision
- includes two images and mission cards

6. CommunitySection.jsx
Purpose:
- main content for the Community page
- shows community photos first
- includes media banner
- includes Facebook video/reel links
- uses campaign/community images from assets

7. DonateSection.jsx
Purpose:
- main content for the Donate page
- focused fundraising layout inspired by donation landing pages
- includes campaign goal
- includes suggested donation levels
- links to Donorbox hosted donation page
- includes backup donation methods like Zelle and bank transfer

8. ContactSection.jsx
Purpose:
- contact form for supporters or people with questions
- collects name, email, phone, and message
- intended for contact/support page

9. SupportSection.jsx
Purpose:
- extra homepage fundraising/support section
- highlights sample donation amounts and campaign support messaging

10. Footer.jsx
Purpose:
- footer at bottom of pages
- contains campaign copyright

11. LanguageSwitcher.jsx
Purpose:
- dropdown language selector
- changes site language using i18next

12. GoogleTranslate.jsx
Purpose:
- earlier test component for Google Translate widget
- mostly replaced by i18next approach

Pages

1. Home.jsx
Purpose:
- main landing page
Contains:
- Navbar
- Hero
- CampaignSpotlight
- SupportSection
- Footer

2. About.jsx
Purpose:
- About page route
Contains:
- Navbar
- AboutSection
- Footer

3. Community.jsx
Purpose:
- Community page route
Contains:
- Navbar
- CommunitySection
- Footer

4. Donate.jsx
Purpose:
- Donate page route
Contains:
- Navbar
- DonateSection
- Footer

5. Contact.jsx
Purpose:
- Contact page route
Contains:
- Navbar
- ContactSection
- Footer

Styles

1. index.css
Purpose:
- global resets
- base font styles
- body styling
- links, buttons, inputs defaults

2. App.css
Purpose:
- shared layout utilities
- section spacing
- general reusable styles

3. Navbar.css
Purpose:
- premium sticky glass navbar styling
- hover effects
- dark campaign header look
- responsive nav layout

4. Hero.css
Purpose:
- homepage hero styling
- gradients
- glass cards
- floating badge
- quote card
- image card
- countdown styling
- CTA buttons

5. CampaignSpotlight.css
Purpose:
- homepage spotlight section styling
- two-image layout
- glass cards
- icons
- quote card
- responsive design

6. AboutSection.css
Purpose:
- About page styling
- text/image split layout
- mission cards
- glass and premium section design

7. CommunitySection.css
Purpose:
- Community page styling
- photo gallery
- media banner
- Facebook video cards
- responsive grid layout

8. DonateSection.css
Purpose:
- Donate page styling
- centered fundraising layout
- donation amount cards
- Donorbox button
- support method cards
- responsive donation page design

9. ContactSection.css
Purpose:
- contact form styling
- inputs, textarea, buttons, spacing

10. Footer.css
Purpose:
- footer styling

Routing

App.jsx handles routes:
- `/`
- `/about`
- `/community`
- `/donate`
- `/contact`

main.jsx
Purpose:
- renders React app
- wraps app in BrowserRouter
- imports global CSS
- imports i18n configuration

i18n.js
Purpose:
- multilingual translation setup
- supports:
  - English
  - French
  - Haitian Creole
- used with react-i18next

Assets

Current assets include:
- Ronald Morand portrait/campaign images
- community images
- optional videos linked externally through Facebook reels

Donation Setup

Main donation platform:
- Donorbox

Hosted donation link:
- https://donorbox.org/ronald-morand-campaign-fund

Backup donation methods currently shown:
- Zelle: 267-616-3905
- Account Number: 52709339541
- Routing Number: 10212000250

Features Completed So Far

- Vite React app setup
- React Router page routing
- homepage hero section
- election countdown
- premium navbar styling
- about page design
- community page with media and gallery
- donation page redesign
- donorbox donation link integration
- multilingual foundation with i18n
- motion animations with Framer Motion
- glassmorphism styling
- responsive layouts
- campaign/community image integration

Things Still To Finish

- finalize contact form behavior
- finish translation content for all final text
- final polish on donation page if needed
- verify all community images and captions
- connect domain last
- deploy production version
- optional backend/contact storage if needed later

Dependencies Used

Install commands used during project:

Frontend setup:
- npm create vite@latest frontend -- --template react
- npm install
- npm install react-router-dom
- npm install framer-motion
- npm install react-icons
- npm install i18next react-i18next

Optional/earlier packages discussed:
- axios
- react-countup

How to Run

From frontend folder:
- npm install
- npm run dev

Future Improvements

- finish French and Haitian Creole translations
- add clickable lightbox for community photos
- connect contact form to backend or form service
- deploy with custom domain
- improve donor/supporter data collection if needed
- optional admin dashboard later

Notes

- The site is designed for campaign fundraising and community storytelling
- Donorbox is being used instead of Stripe product links because it better supports custom donation amounts
- Community photos should remain authentic where possible
- Domain connection is intentionally being saved for the final step
































