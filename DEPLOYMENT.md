# Cloudflare Pages Deployment Guide

## Quick Start

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub/GitLab**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages → Create a project → Connect to Git
   - Select your repository

3. **Configure Build**
   - Framework: **Create React App**
   - Build command: `npm run build`
   - Build output: `build`
   - Click **Save and Deploy**

### Option 2: Direct Upload via Wrangler

```bash
# Build the project
npm run build

# Install Wrangler (if not already installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy build --project-name=envejo-website
```

## Build Configuration

### Cloudflare Pages Settings
```
Framework preset: Create React App
Build command: npm run build
Build output directory: build
Root directory: / (default)
Node version: 18 (or latest LTS)
```

### Environment Variables
None required for basic deployment.

## Routing Configuration

The `public/_redirects` file handles client-side routing:
```
/* /index.html 200
```

This ensures all routes are served by index.html for React Router to handle.

## Custom Domain

1. Go to Pages project → Custom domains
2. Add your domain
3. Update DNS records as instructed
4. SSL is automatically provisioned

## Performance Optimization

Cloudflare Pages automatically provides:
- Brotli/Gzip compression
- HTTP/2 & HTTP/3
- Global CDN caching
- Minification
- Image optimization

## Monitoring

### Enable Web Analytics
1. Pages project → Web Analytics
2. Enable analytics
3. No code changes needed

### View Metrics
- Visit your project dashboard
- Check visitor stats, performance metrics
- Monitor build times and success rates

## Troubleshooting

### Build Fails
- Check build logs in Cloudflare dashboard
- Ensure `package.json` scripts are correct
- Verify Node.js version compatibility

### Routing Issues
- Confirm `_redirects` file exists in `public/` folder
- Check that file is included in build output

### Assets Not Loading
- Verify `homepage: "."` in package.json
- Use relative paths for imports
- Check browser console for errors

## Branch Deployments

- **main branch** → Production
- **develop branch** → Preview (if configured)
- **Pull requests** → Automatic preview URLs

## Rollback

1. Go to project → Deployments
2. Select previous successful deployment
3. Click "Rollback to this deployment"

## Limits (Free Plan)

- Builds: 500/month
- Bandwidth: Unlimited
- Requests: Unlimited
- Custom domains: 100 per project
- Build time: 20 minutes max

## Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Community Discord](https://discord.cloudflare.com)
- [Cloudflare Community](https://community.cloudflare.com)
