# Portfolio Website - Setup Guide

## 🎉 Welcome!

Your professional portfolio website is ready! This guide will help you customize and deploy it.

---

## 📁 Project Structure

```
/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality
├── /assets/            # Images folder
│   ├── logo.png        # Your logo (add this)
│   ├── foto.png        # Your photo (add this)
│   └── README.md       # Assets instructions
├── SETUP.md            # This file
└── README.md           # Project overview
```

---

## 🎨 1. Add Your Images

### Logo (logo.png)
1. Create or export your logo as PNG with transparent background
2. Recommended size: 200x60px
3. Save as `/assets/logo.png`

### Professional Photo (foto.png)
1. Use a high-quality professional headshot
2. Recommended size: 600x600px minimum
3. Save as `/assets/foto.png`

**Note:** The site has fallback images, so it works without these files, but adding them makes it truly yours!

---

## 🎨 2. Customize Your Content

### Update Personal Information

Open `index.html` and update:

1. **Hero Section** (lines ~55-75):
   - Update title/subtitle
   - Modify professional description

2. **About Section** (lines ~100-130):
   - Replace biography paragraphs
   - Update social media links

3. **Projects** (lines ~220-350):
   - Replace project titles and descriptions
   - Update project images URLs
   - Add your actual project case study links

4. **Contact Links** (lines ~400-440):
   - Update social media URLs
   - Update WhatsApp number (replace `1234567890` with your actual number)

---

## 📧 3. Setup Contact Form (Choose One Method)

### OPTION A: EmailJS (Recommended - Free & Easy)

1. **Sign up at [EmailJS](https://www.emailjs.com/)**

2. **Create Email Service:**
   - Dashboard → Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Connect your email account

3. **Create Email Template:**
   - Dashboard → Email Templates → Create New Template
   - Use this template structure:
   ```
   New message from {{from_name}}
   
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```

4. **Get Your Credentials:**
   - Public Key (Account → General)
   - Service ID (from Email Services)
   - Template ID (from Email Templates)

5. **Add EmailJS to your site:**

   In `index.html`, add this script before `</body>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script>
       emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your public key
   </script>
   ```

6. **Update script.js:**

   Find the contact form section (around line 140) and replace the try block:
   ```javascript
   try {
       await emailjs.send(
           'YOUR_SERVICE_ID',      // Replace with your service ID
           'YOUR_TEMPLATE_ID',     // Replace with your template ID
           {
               from_name: name,
               from_email: email,
               message: message
           }
       );
       
       showMessage('success', 'Thank you! Your message has been sent successfully.');
       contactForm.reset();
   }
   ```

---

### OPTION B: FormSubmit.co (Simpler - No Registration)

1. **Update the contact form submit handler in `script.js`:**

   Replace the try block (around line 140):
   ```javascript
   try {
       const response = await fetch('https://formsubmit.co/your.email@example.com', {
           method: 'POST',
           body: formData,
           headers: {
               'Accept': 'application/json'
           }
       });
       
       if (response.ok) {
           showMessage('success', 'Thank you! Your message has been sent successfully.');
           contactForm.reset();
       } else {
           throw new Error('Form submission failed');
       }
   }
   ```

2. **Replace `your.email@example.com` with your actual email**

3. **First submission:** FormSubmit will send a confirmation email. Click the link to activate.

4. **Optional: Add these hidden fields to the form in `index.html`:**
   ```html
   <input type="hidden" name="_subject" value="New Portfolio Contact!">
   <input type="hidden" name="_captcha" value="false">
   <input type="hidden" name="_next" value="https://yourdomain.com/thanks.html">
   ```

---

## 🎨 4. Customize Colors

Your color palette is in `style.css` (lines 5-15):

```css
--color-primary: #182b31;
--color-secondary: #1e3460;
--color-tertiary: #58717d;
--color-quaternary: #b4c3cc;
--color-background: #0a0e14;
--color-text: #f4fefe;
```

Feel free to adjust these to match your brand!

---

## 🚀 5. Deploy Your Site

### GitHub Pages (Free)

1. Create a new GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch → Save
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify (Free)

1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Done! Automatic HTTPS and custom domain support

### Vercel (Free)

1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

---

## ✨ Features Included

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations (GSAP)
- ✅ Glassmorphism effects
- ✅ Modern microinteractions
- ✅ Parallax scrolling
- ✅ Mobile hamburger menu
- ✅ Back to top button
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ 3D card hover effects
- ✅ Social media integration
- ✅ SEO-friendly structure
- ✅ Accessibility features
- ✅ Performance optimized

---

## 🛠️ Customization Tips

### Change Fonts
Replace the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Update in `style.css`:
```css
--font-family: 'YourFont', sans-serif;
```

### Add Dark/Light Mode Toggle
This can be added as an enhancement. Let me know if you need this!

### Modify Animations
All GSAP animations are in `script.js` - easy to customize timing, easing, and effects.

---

## 📱 Social Media Links

Update these in `index.html`:

- **Instagram:** Line ~125 and ~415
- **LinkedIn:** Line ~128 and ~418
- **Behance:** Line ~131 and ~424
- **WhatsApp:** Line ~134 and ~421

Replace the URLs and phone numbers with your actual profiles.

---

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📊 SEO Optimization

1. Update meta description in `index.html` (line 6)
2. Add your actual name in the title (line 7)
3. Consider adding:
   - Open Graph tags for social sharing
   - Favicon
   - Sitemap
   - robots.txt

---

## 🆘 Troubleshooting

### Images not showing?
- Check file paths are correct
- Ensure images are in `/assets/` folder
- Check image file names match exactly (case-sensitive)

### Animations not working?
- Check browser console for errors
- Ensure GSAP CDN is loaded (check internet connection)
- Clear browser cache

### Contact form not sending?
- Check EmailJS/FormSubmit setup
- Look for errors in browser console
- Verify API keys are correct

---

## 📝 Next Steps

1. ✅ Add your logo and photo to `/assets/`
2. ✅ Update all personal content in `index.html`
3. ✅ Setup contact form (EmailJS or FormSubmit)
4. ✅ Update social media links
5. ✅ Customize colors if needed
6. ✅ Test on different devices
7. ✅ Deploy to hosting platform

---

## 💡 Need Help?

- Check browser console for error messages
- Verify all file paths are correct
- Ensure internet connection for CDN resources
- Test in multiple browsers

---

## 🎯 Optional Enhancements

Want to add more features? Consider:
- Blog section
- Testimonials slider
- Skills/tech stack visualization
- Resume download button
- Dark mode toggle
- Multilingual support
- Analytics integration (Google Analytics)
- Live chat widget

---

**Ready to launch? Your portfolio looks amazing! 🚀**

Good luck with your professional journey!
