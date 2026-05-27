# Envejo Creative Design Hub - React Application

This React application is a conversion of the original HTML website for Envejo Creative Design Hub, a full-service creative studio in Chennai. The app features a modern component-based architecture with data stored in separate JSON files for easy maintenance.

## 🏗️ Project Structure

```
env_site/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   ├── Navbar.css
│   │   │   └── logo.svg
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   └── ServiceCard/
│   │       ├── ServiceCard.js
│   │       └── ServiceCard.css
│   ├── pages/              # Page components
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── Services/
│   │   │   ├── Services.js
│   │   │   └── Services.css
│   │   ├── Decor/
│   │   │   ├── Decor.js
│   │   │   └── Decor.css
│   │   └── B2B/
│   │       ├── B2B.js
│   │       └── B2B.css
│   ├── data/               # JSON data files
│   │   ├── services.json
│   │   ├── products.json
│   │   ├── decor.json
│   │   ├── classroomThemes.json
│   │   ├── b2b.json
│   │   ├── brandingPackages.json
│   │   └── config.json
│   ├── App.js              # Main application component
│   ├── App.css             # Global styles
│   └── index.js            # Application entry point
├── package.json
└── README.md
```

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm deploy` - Builds the app (alias for build)
- `npm eject` - Ejects from Create React App (one-way operation)

## 🌐 Deployment to Cloudflare Pages

### Prerequisites
- A Cloudflare account
- Git repository (GitHub, GitLab, or Bitbucket)

### Automatic Deployment (Recommended)

1. **Push your code to a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Go to **Pages** > **Create a project**
   - Connect your Git repository
   - Select the repository: `env_site`

3. **Configure Build Settings**
   - **Framework preset**: `Create React App`
   - **Build command**: `npm run build`
   - **Build output directory**: `build`
   - **Root directory**: `/` (leave as default)
   - **Environment variables**: None required

4. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will automatically build and deploy your site
   - Future commits to main branch will trigger automatic deployments

### Manual Deployment

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Install Wrangler CLI** (Cloudflare's CLI tool)
   ```bash
   npm install -g wrangler
   ```

3. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

4. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy build --project-name=envejo-website
   ```

### Custom Domain Setup

1. In Cloudflare Pages dashboard, go to your project
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Follow the instructions to configure your domain
5. SSL/TLS is automatically configured

### Environment Variables

If you need to add environment variables:
1. Go to your Pages project settings
2. Navigate to **Environment variables**
3. Add variables for Production and/or Preview environments

### Build Configuration

The project is configured with:
- **Node.js version**: Latest LTS (automatically detected)
- **Package manager**: npm
- **Build output**: `build/` directory
- **SPA routing**: Handled by `public/_redirects` file

### Continuous Deployment

Every push to your main branch will:
1. Trigger a new build on Cloudflare Pages
2. Run tests (if configured)
3. Deploy to production automatically
4. Generate a unique preview URL for each commit

### Preview Deployments

- Every pull request gets a unique preview URL
- Preview deployments are isolated from production
- Perfect for testing before merging

### Performance Features

Cloudflare Pages automatically provides:
- ✅ Global CDN distribution
- ✅ Automatic HTTPS
- ✅ Unlimited bandwidth
- ✅ HTTP/2 and HTTP/3 support
- ✅ Brotli compression
- ✅ DDoS protection
- ✅ Web Analytics (optional)

### Rollback

To rollback to a previous deployment:
1. Go to your project in Cloudflare Pages
2. Navigate to **Deployments**
3. Find the deployment you want to rollback to
4. Click **Rollback to this deployment**

## 🎨 Features

### ✅ Implemented

- **Component-Based Architecture**: Modular, reusable components
- **React Router**: Client-side routing for different pages
- **JSON Data Storage**: All content stored in separate JSON files
- **Responsive Design**: Mobile-first approach
- **Custom CSS**: Organized CSS with CSS variables for theming

### 📄 Pages

1. **Home** (`/`) - Hero section, featured services, why choose Envejo, process steps, CTA
2. **Services** (`/services`) - Complete services catalog with filtering
3. **Decor** (`/decor`) - Space design services and classroom themes
4. **B2B** (`/b2b`) - Business-to-business packages and pricing

### 🧩 Reusable Components

- **Navbar** - Navigation with logo and links
- **Footer** - Company information and links
- **ServiceCard** - Display service information with icon, title, description, tags, and pricing

## 📊 Data Structure

All data is stored in JSON files under `src/data/`:

- **services.json** - Service offerings (16 services)
- **products.json** - Products catalog (16 products)
- **decor.json** - Décor and space design services (9 items)
- **classroomThemes.json** - Classroom makeover themes (10 themes)
- **b2b.json** - B2B service packages (6 packages)
- **brandingPackages.json** - Branding pricing packages (3 tiers)
- **config.json** - Site configuration, hero content, industries, process steps

## 🎨 Design System

### Color Tokens

```css
--pink: #E91E8C
--purple: #7B2FF7
--gold: #C9920A
--teal: #0D9488
--green: #059669
```

### Typography

- **Display/Headings**: Playfair Display (serif)
- **Subheadings**: Space Grotesk (sans-serif)
- **Body Text**: DM Sans (sans-serif)

## 🔧 Customization

### Adding New Services

Edit `src/data/services.json`:

```json
{
  "id": 17,
  "cat": "digital",
  "icon": "🎯",
  "title": "New Service",
  "desc": "Description of the new service",
  "tags": ["Tag1", "Tag2"],
  "price": "₹999 onwards",
  "iconBg": "#F0FDFA"
}
```

### Adding New Pages

1. Create a new folder in `src/pages/`
2. Add the component file (e.g., `NewPage.js`)
3. Add the CSS file (e.g., `NewPage.css`)
4. Update `App.js` to add the route

## 🌐 Fonts

The application uses Google Fonts:
- **DM Sans** (400, 500, 600, 700)
- **Playfair Display** (800, 900)
- **Space Grotesk** (600, 700)

## 📱 Responsive Breakpoints

The application uses CSS Grid and Flexbox for responsive layouts. Key breakpoints are handled through CSS clamp() functions and auto-fill grid templates.

## 🔮 Future Enhancements

- Add modal components for consultations and bookings
- Implement portfolio page with project gallery
- Add pricing page with interactive pricing calculator
- Add about page with team information
- Integrate contact forms with backend API (Cloudflare Workers)
- Add animation library (Framer Motion)
- Implement lazy loading for images
- Add dark mode support
- Integrate Cloudflare Web Analytics
- Use Cloudflare Workers for serverless functions

## 🏗️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with CSS variables

### Hosting & Infrastructure
- **Cloudflare Pages** - Static site hosting with global CDN
- **Git** - Version control and continuous deployment
- **Node.js** - Build environment

### Features Provided by Cloudflare
- Global CDN with 300+ edge locations
- Automatic HTTPS with SSL/TLS
- HTTP/2 and HTTP/3 support
- Automatic image optimization
- DDoS protection
- Unlimited bandwidth
- Automatic deployments from Git
- Preview deployments for pull requests

## 📄 License

This project is created for Envejo Creative Design Hub.

## 👥 Contact

For questions about this project:
- Email: envejo.in@gmail.com
- Location: Guduvancherry, Chennai, Tamil Nadu

---

Built with ❤️ using React
