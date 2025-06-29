# Resume Portfolio Website

A modern, responsive portfolio website built with React and TypeScript.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **React + TypeScript**: Built with modern React hooks and TypeScript for type safety
- **Sections**:
  - Hero section with introduction
  - About me with personal information
  - Skills showcase with technologies
  - Projects portfolio with live demos and code links
  - Contact form for inquiries
- **Smooth Scrolling**: Navigation with smooth scrolling to sections
- **Interactive Elements**: Hover effects and animations throughout

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone or download this repository
2. Navigate to the project directory:

   ```bash
   cd resume-portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update the content in the components:

   - `src/components/Hero.tsx` - Your name and title
   - `src/components/About.tsx` - Your bio and experience
   - `src/components/Skills.tsx` - Your technical skills
   - `src/components/Projects.tsx` - Your projects and work
   - `src/components/Contact.tsx` - Your contact information
   - `src/components/Footer.tsx` - Your social media links

2. **Styling**: Modify `src/App.css` and `src/index.css` to change colors, fonts, and layout

3. **Images**: Add your profile picture and project images to the `public` folder

4. **Resume**: Add your resume PDF to the `public` folder and update the link in the About component

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Deployment

To deploy your portfolio:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Technologies Used

- React 18
- TypeScript
- CSS3 with Flexbox and Grid
- React Hooks (useState)
- Responsive Design
- Modern ES6+ JavaScript

## Browser Support

This portfolio supports all modern browsers including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own use. If you have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
