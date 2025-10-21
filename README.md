# Drolly Inc - Logistics Website

A modern, responsive React frontend-only website for Drolly Inc, a logistics company. Built with React, Vite, Tailwind CSS, and React Router.

## Features

- **3 Pages**: Home, Privacy Policy, and Terms & Conditions
- **Contact Form**: Full validation with localStorage persistence
- **Live Chat Simulation**: Interactive messenger with simulated responses
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Legal Compliance**: Complete privacy policy and terms pages
- **No Backend**: All data stored in localStorage for demo purposes

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Hook Form** - Form validation
- **localStorage** - Data persistence

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd drollyinc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
drollyinc/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Site footer
│   │   ├── ContactForm.jsx     # Contact form with validation
│   │   └── Messenger.jsx       # Live chat simulation
│   ├── pages/
│   │   ├── Home.jsx            # Homepage with hero and about sections
│   │   ├── PrivacyPolicy.jsx   # Privacy policy page
│   │   └── Terms.jsx           # Terms & conditions page
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Features Overview

### Home Page
- **Hero Section**: Company branding and tagline
- **About Us**: Detailed company information since 2017
- **Contact Form**: Full validation with localStorage persistence
- **Live Chat**: Interactive messenger with simulated responses

### Contact Form
- Full name, email, phone (optional), and message fields
- Email validation using react-hook-form
- SMS consent checkbox with privacy policy link
- Success alerts for form submission
- Data persistence in localStorage

### Live Chat
- Real-time message interface
- Simulated instructor responses (2-3 second delay)
- Message history persistence
- Clear messages functionality

### Privacy Policy
- Complete privacy policy with required legal text
- SMS consent protection statement
- Opt-out instructions
- Link to Terms & Conditions

### Terms & Conditions
- Comprehensive terms with required SMS messaging text
- Service availability and limitations
- Opt-out instructions
- Link to Privacy Policy

## Legal Compliance

The website includes all required legal text:

- **Privacy Policy**: "Consent obtained via SMS will not be shared with third parties."
- **Terms**: "By subscribing to SMS messages via the web form, you agree to receive SMS messages from Drolly Inc. This includes conversational messages. Frequency of messages may vary. Message and data rates may apply. For help, text HELP. To opt-out, reply STOP."

## Data Storage

All data is stored locally using localStorage:
- Contact form submissions: `contactMessages`
- Chat messages: `messengerMessages`

## Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project uses ESLint for code quality and consistency. All components follow React best practices with functional components and hooks.

## License

This project is created for Drolly Inc. All rights reserved.

## Contact

For questions about this project, please use the contact form on the website.
