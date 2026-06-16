# Deploying to cPanel - Complete Instructions

## Overview
This website is built with TanStack Start (React + Vite). For cPanel hosting, you need to build the site as static files and upload them.

## Prerequisites
- Node.js 18+ installed locally
- npm or bun package manager

## Step 1: Build the Project

Run the following command in your terminal:

```bash
npm install
npm run build
```

This will create a `dist` folder containing all the static files needed for deployment.

## Step 2: Upload to cPanel

### Option A: Using cPanel File Manager

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to your `public_html` folder (or the folder for your domain)
4. Click **Upload** and select all files from the `dist` folder:
   - `index.html`
   - `assets/` folder (with all JS and CSS files)
   - `.htaccess` file (already included in the `public` folder, copy it)

### Option B: Using FTP

1. Connect to your server via FTP (FileZilla, Cyberduck, etc.)
2. Navigate to your `public_html` directory
3. Upload all contents from the `dist` folder
4. Also upload the `.htaccess` file from the `public` folder

## Step 3: Verify Deployment

1. Visit your website URL
2. Test navigation between pages
3. Check that all assets (CSS, JS, images) load correctly

## Important Notes

### The .htaccess File
The `.htaccess` file is crucial for SPA (Single Page Application) routing. It ensures that:
- All routes redirect to `index.html` for React Router to handle
- Static assets are served directly
- GZIP compression is enabled for better performance
- Security headers are set

### If Your Site is in a Subdirectory

If deploying to a subdirectory (e.g., `example.com/myapp/`):

1. Update `vite.config.ts`:
```javascript
export default defineConfig({
  base: "/myapp/",
  // ... rest of config
});
```

2. Rebuild: `npm run build`
3. Upload to the subdirectory in cPanel

### Troubleshooting

**Blank page after deployment:**
- Check browser console for errors
- Ensure all files were uploaded correctly
- Verify `.htaccess` is present and readable

**404 errors on refresh:**
- Make sure `.htaccess` file was uploaded
- Check that mod_rewrite is enabled on your server (most cPanel hosts have this)

**Images not loading:**
- Verify the `assets` folder structure is preserved
- Check file permissions (should be 644 for files, 755 for folders)

## File Structure After Build

```
dist/
├── index.html
├── assets/
│   ├── [hash].js
│   ├── [hash].css
│   └── [images]
└── .htaccess (copy from public/.htaccess)
```

## Support

For issues specific to your hosting provider, contact their support team with:
- Error messages from browser console
- Server error logs (available in cPanel under "Error Logs")
