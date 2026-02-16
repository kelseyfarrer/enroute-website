# EN ROUTE STUDIO - Website

A beautiful, modern website for En Route Studio - an interior design and event styling studio based in Los Angeles.

## 🎨 What's Built

Your new website includes:
- **Homepage** - Hero section, services overview, approach, and email signup
- **Projects Page** - Portfolio grid showcasing your work
- **Contact Page** - Contact form with Netlify Forms integration
- **Responsive Design** - Looks great on desktop, tablet, and mobile
- **Modern Features** - Smooth scrolling, fade-in animations, form validation

## 📁 Project Structure

```
enroute-website/
├── index.html          # Homepage
├── projects.html       # Portfolio page
├── contact.html        # Contact page
├── css/
│   ├── styles.css      # Main styles
│   ├── projects.css    # Projects page styles
│   └── contact.css     # Contact page styles
├── js/
│   └── main.js         # JavaScript interactions
├── images/             # Your images go here
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## 🚀 LAUNCH INSTRUCTIONS

### Step 1: Add Your Images (CRITICAL!)

Before launching, you MUST add your images to the `/images/` folder. See `IMAGE-GUIDE.md` for the complete list of images needed.

**Quick checklist:**
- [ ] Homepage hero image (arches photo)
- [ ] Homepage gallery images (6 images)
- [ ] All project portfolio images (6+ images)
- [ ] Create folders: `images/` and `images/projects/`

### Step 2: Create GitHub Account (Free)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Choose a username (e.g., "enroutestudio")
4. Enter your email and create a password
5. Verify your email

### Step 3: Upload Your Site to GitHub

**Option A: Using GitHub Desktop (Easiest)**
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. Click "Create New Repository"
   - Name: `enroute-website`
   - Local Path: Select the `enroute-website` folder
4. Click "Create Repository"
5. Click "Publish repository" (uncheck "Keep this code private" if you want it public)

**Option B: Using Command Line**
1. Open Terminal/Command Prompt
2. Navigate to your website folder:
   ```bash
   cd path/to/enroute-website
   ```
3. Run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - En Route Studio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/enroute-website.git
   git push -u origin main
   ```
   (Replace YOUR-USERNAME with your GitHub username)

### Step 4: Create Netlify Account (Free)

1. Go to [netlify.com](https://www.netlify.com)
2. Click "Sign up"
3. Choose "Sign up with GitHub" (easiest option)
4. Authorize Netlify to access your GitHub

### Step 5: Deploy Your Site to Netlify

1. In Netlify dashboard, click "Add new site" → "Import an existing project"
2. Click "Deploy with GitHub"
3. Select your repository: `enroute-website`
4. Netlify will auto-detect settings (leave as default)
5. Click "Deploy site"
6. Wait 1-2 minutes for deployment (you'll see a progress indicator)

🎉 **Your site is now live!** Netlify will give you a URL like `random-name-123456.netlify.app`

### Step 6: Connect Your Custom Domain

1. In Netlify, go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Enter `enroute.design`
4. Follow Netlify's instructions to update your DNS settings

**DNS Settings (update at your domain registrar):**
- You'll need to add a CNAME record or A record
- Netlify will show you exactly what to add
- Changes can take 24-48 hours to propagate
- Netlify provides free SSL certificate automatically

### Step 7: Test Your Forms

1. Go to your live site
2. Test the contact form by submitting a test message
3. Check your email for the submission notification
4. Test the newsletter signup form

**Form notifications:**
- In Netlify dashboard, go to "Forms" → "Notifications"
- Add your email address to receive form submissions
- Submissions are also stored in Netlify dashboard

### Step 8: Update Squarespace DNS

Once your new site is working perfectly:

1. Log in to Squarespace
2. Go to Settings → Domains
3. Update DNS to point to Netlify (or transfer domain to another registrar)
4. **IMPORTANT:** Don't cancel Squarespace until your new site is fully live and tested!

## 🎨 How to Make Updates

### Update Text Content

1. Open the HTML file you want to edit (index.html, projects.html, or contact.html)
2. Find the text you want to change
3. Edit it (keep the HTML tags intact)
4. Save the file
5. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update text content"
   git push
   ```
6. Netlify will automatically redeploy (30-60 seconds)

### Add New Project to Portfolio

1. Add project images to `/images/projects/` folder
2. Open `projects.html`
3. Copy one of the existing project item blocks:
   ```html
   <div class="project-item">
       <div class="project-image">
           <img src="images/projects/YOUR-IMAGE.jpg" alt="Description">
       </div>
       <h3 class="project-title">Your Project Title</h3>
   </div>
   ```
4. Paste it in the projects grid
5. Update the image path and title
6. Save, commit, and push to GitHub

### Change Colors

1. Open `css/styles.css`
2. Find the `:root` section at the top
3. Edit the color values:
   ```css
   --color-terra-cotta: #3E1813;  /* Change this value */
   --color-warm-beige: #E1DDD0;   /* Change this value */
   ```
4. Save, commit, and push

### Change Fonts

1. Go to [Google Fonts](https://fonts.google.com)
2. Select fonts you want
3. Copy the import code
4. Open `css/styles.css`
5. Replace the existing `@import url(...)` line
6. Update the font variables:
   ```css
   --font-serif: 'Your Font', serif;
   ```

## 📝 Content Tips

### Homepage
- **Hero Image**: Should be high-quality, 1920x1080px minimum
- **Taglines**: Keep concise and poetic (current: "rooted in ritual" | "steeped with intention")
- **Descriptions**: Aim for 2-3 paragraphs per section

### Projects Page
- **Image Quality**: Use high-resolution images (at least 1200px wide)
- **Titles**: Keep project titles short and descriptive
- **Mix**: Show variety (interior design, events, different styles)

### Contact Page
- **Response Time**: Check your email regularly for form submissions
- **Spam Protection**: Netlify Forms includes spam filtering
- **Newsletter**: Submissions go to Netlify Forms (export as needed)

## 🔧 Advanced Customizations

### Add Google Analytics

1. Get your Google Analytics tracking ID
2. Add before `</head>` in each HTML file:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR-GA-ID');
   </script>
   ```

### Add More Pages

1. Duplicate any existing HTML file
2. Rename it (e.g., `about.html`)
3. Update the content
4. Add links to it from other pages:
   ```html
   <a href="about.html">About</a>
   ```

### Add Image Gallery Lightbox

Consider adding a lightbox library like:
- [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/)
- [GLightbox](https://biati-digital.github.io/glightbox/)

### Add Blog

For a blog, consider:
- [Netlify CMS](https://www.netlifycms.org/) (free, visual editor)
- [Jekyll](https://jekyllrb.com/) (static site generator)
- [Ghost](https://ghost.org/) (more advanced, hosted platform)

## 🆘 Troubleshooting

### Images Not Showing
- Check file paths match exactly (case-sensitive!)
- Ensure images are in correct folders
- Check image file extensions (.jpg, .png, not .jpeg)
- Clear browser cache (Cmd/Ctrl + Shift + R)

### Forms Not Working
- Ensure `data-netlify="true"` attribute is on `<form>` tag
- Check form `name` attribute is set
- Verify form notification email in Netlify dashboard
- Check spam folder for submissions

### Site Not Updating
- Check if push to GitHub was successful
- Check Netlify deploy status (should say "Published")
- Clear browser cache
- Wait 1-2 minutes for deployment

### Domain Not Working
- DNS changes take 24-48 hours
- Verify DNS settings match Netlify's requirements
- Check domain status in Netlify dashboard
- Ensure domain isn't still pointed to Squarespace

## 💰 Costs

### Current Setup (Free!)
- **Hosting**: Free (Netlify)
- **Forms**: Free up to 100 submissions/month (Netlify Forms)
- **SSL**: Free (Netlify)
- **Bandwidth**: 100GB/month free (Netlify)
- **Storage**: Unlimited (GitHub)

### If You Exceed Free Tier
- Netlify Pro: $19/month (1,000 form submissions, more bandwidth)
- Form submissions only: $19/month for up to 1,000/month
- Most small businesses never need to upgrade!

### Your Domain
- Keep paying your current domain registrar ($12-20/year)
- Or transfer to Netlify for $20/year

## 📚 Learning Resources

### Want to Learn More?
- [HTML & CSS Basics](https://www.freecodecamp.org/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Web Design Fundamentals](https://www.udemy.com/topic/web-design/)

### Get Help
- [Netlify Community](https://answers.netlify.com/)
- [Stack Overflow](https://stackoverflow.com/) - Search for HTML/CSS questions
- [r/webdev](https://reddit.com/r/webdev) - Reddit web development community

## 🎯 Next Steps

After your site is live:

1. **Set up analytics** - Track visitors and popular pages
2. **SEO optimization** - Add meta descriptions, alt tags
3. **Social media** - Share your new site on Instagram!
4. **Portfolio updates** - Add new projects as you complete them
5. **Client testimonials** - Add a testimonials section
6. **Press/Publications** - Showcase any press mentions

## ✨ Future Enhancements

Ideas for when you're ready:
- Blog section for design tips and project stories
- E-commerce for design services packages
- Client portal for project management
- Before/after image sliders
- Video backgrounds or portfolio videos
- Interactive 3D room tours
- Booking system integration (beyond Calendly)

## 🙋 Need More Help?

If you get stuck or want to add features:
- **Quick fixes**: ChatGPT or Claude can help with code questions
- **Hire help**: Find developers on Upwork, Fiverr, or Toptal
- **Agencies**: Many agencies specialize in Netlify deployments

## 📞 Your Site Details

- **Live URL**: (will be provided by Netlify)
- **Admin URL**: https://app.netlify.com (to manage site)
- **GitHub**: https://github.com/YOUR-USERNAME/enroute-website
- **Forms**: View submissions in Netlify dashboard

---

**Built with ❤️ for En Route Studio**

Need help? Have questions? The web development community is huge and friendly - don't hesitate to ask for help!

Remember: Your site is static HTML/CSS/JS which means:
✅ Fast loading times
✅ No security vulnerabilities like WordPress
✅ No maintenance or updates required
✅ Free hosting forever
✅ Easy to understand and modify
