# 🚀 Quick Start Guide

Get your portfolio live in 5 minutes!

---

## ⚡ Immediate Next Steps

### 1. **Add Your Images** (2 minutes)
```
/assets/
  ├── logo.png  ← Add your logo here (or use the SVG placeholder)
  └── foto.png  ← Add your professional photo here
```

**Recommended sizes:**
- Logo: 200x60px (transparent PNG)
- Photo: 600x600px minimum

---

### 2. **Update Your Info** (3 minutes)

Open `index.html` and search/replace:

| Find | Replace With | Location |
|------|--------------|----------|
| `https://instagram.com` | Your Instagram URL | Lines ~125, ~415 |
| `https://linkedin.com` | Your LinkedIn URL | Lines ~128, ~418 |
| `https://behance.net` | Your Behance URL | Lines ~131, ~424 |
| `1234567890` | Your WhatsApp number | Lines ~134, ~421 |

---

### 3. **Setup Contact Form** (5 minutes)

#### Option A: EmailJS (Recommended)
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up (free)
3. Create service + template
4. Add to HTML before `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>emailjs.init('YOUR_PUBLIC_KEY');</script>
```
5. Update `script.js` line ~140 with your IDs

#### Option B: FormSubmit (Simpler)
1. Edit `script.js` line ~140
2. Change to:
```javascript
const response = await fetch('https://formsubmit.co/your@email.com', {
    method: 'POST',
    body: formData
});
```
3. Check email for confirmation link
4. Done!

---

### 4. **Deploy** (2 minutes)

#### GitHub Pages:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin YOUR_REPO_URL
git push -u origin main
```
Settings → Pages → Select branch → Save

#### Netlify/Vercel:
- Drag & drop your folder
- Instant deployment!

---

## ✅ Checklist

- [ ] Add logo.png and foto.png to `/assets/`
- [ ] Update biography in About section
- [ ] Replace social media URLs
- [ ] Update WhatsApp number
- [ ] Setup contact form (EmailJS or FormSubmit)
- [ ] Replace placeholder projects with yours
- [ ] Test on mobile device
- [ ] Deploy!

---

## 🎨 Quick Customizations

### Change Colors
`style.css` lines 5-15:
```css
--color-primary: #182b31;
--color-accent: #4a9eff;
```

### Change Font
`index.html` line 10:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap">
```

`style.css` line 22:
```css
--font-family: 'Poppins', sans-serif;
```

---

## 📱 Test Your Site

1. **Desktop:** Chrome, Firefox, Safari
2. **Mobile:** Test responsive design
3. **Forms:** Try sending a test message
4. **Links:** Check all social media links work
5. **Images:** Verify logo and photo display

---

## 🆘 Quick Fixes

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Verify files are in `/assets/` folder

**Form not working?**
- Check browser console for errors
- Verify EmailJS/FormSubmit setup
- Test internet connection

**Animations laggy?**
- GSAP CDN might be slow
- Clear browser cache
- Test on different device

---

## 📚 Full Documentation

For detailed instructions, see:
- **SETUP.md** - Complete setup guide
- **README.md** - Project overview and features

---

## 🎉 You're Ready!

Your portfolio has:
- ✨ Professional design
- 📱 Mobile responsive
- 🎬 Smooth animations
- 📧 Working contact form
- 🚀 Ready to deploy

**Time to impress!** 💼

---

**Quick Links:**
- [EmailJS Setup](https://www.emailjs.com/docs/)
- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)

**Last updated:** December 2025
