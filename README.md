# Jason James Medicine Portfolio

A professional website portfolio for Dr. Jason James, showcasing his medical practice, biography, and charitable work.

## Tech Stack
- Pure HTML5
- CSS3 (with responsive design)
- Vanilla JavaScript
- No frameworks or build tools

---

## 🚀 DEVELOPMENT ENVIRONMENT SETUP

### 1. Local Server Setup (Live Server)

**Install Live Server Extension:**
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Live Server" by Ritwick Dey
4. Click Install

**Using Live Server:**
- Right-click on `index.html` → "Open with Live Server"
- OR click "Go Live" button in the bottom-right status bar
- Your site will open at `http://127.0.0.1:5500`
- **Auto-reload:** Any file changes automatically refresh the browser

**Alternative (No Extension):**
```powershell
# Python 3 built-in server
python -m http.server 8000
# Then visit http://localhost:8000
```

---

## 🌐 HOSTING STRATEGY (Professional Site)

### Recommended Hosting Options:

**Option 1: Netlify (RECOMMENDED)**
- **Cost:** Free tier available, Pro at $19/month
- **Why:** Dead simple deployment, automatic HTTPS, custom domains, form handling
- **Deployment:** Drag & drop your folder or connect to GitHub
- **Custom Domain:** Easy DNS setup, SSL certificates included
- **Ideal for:** Static sites like yours

**Option 2: Vercel**
- Similar to Netlify, excellent performance
- Free tier with custom domains

**Option 3: GitHub Pages**
- **Cost:** FREE
- **Limitation:** No server-side processing (fine for your needs)
- **Custom Domain:** Supported
- **Note:** Public repos only for free tier

**Option 4: Traditional Hosting (Bluehost, SiteGround)**
- **Cost:** $3-15/month
- **Pros:** Full control, cPanel, email hosting included
- **Cons:** More technical setup required

**MY RECOMMENDATION:** Start with **Netlify's free tier** → upgrade when ready. You can connect your GitHub repo for automatic deployments, then add your custom domain when purchased.

---

## 📋 PROJECT STRUCTURE

```
jason-james-medicine-portfolio/
├── index.html              # Home page
├── donations.html          # Donations showcase page
├── css/
│   ├── style.css          # Main styles
│   ├── responsive.css     # Media queries
│   └── reset.css          # CSS reset/normalization
├── js/
│   ├── main.js            # Main JavaScript
│   └── mobile-menu.js     # Mobile navigation handler
├── images/
│   ├── portrait/          # Doctor's portrait
│   ├── biography/         # Biography section images
│   └── donations/         # Donation project images
├── assets/
│   └── icons/             # SVG icons, favicon
└── README.md
```

---

## 🎨 WEBSITE ARCHITECTURE

### Header (All Pages)
```
┌─────────────────────────────────────────────────┐
│ Jason James Medicine    [Home] [Donations]      │
└─────────────────────────────────────────────────┘
```
- **Left:** Logo/Brand name
- **Right:** Navigation (desktop)
- **Mobile:** Hamburger menu (collapsible)

### Home Page Layout
1. **Hero Section:** Large portrait of Dr. Jason James
2. **Biography Section:** 
   - Text content with interspersed images
   - Responsive grid/flexbox layout
3. **Contact Section:**
   - Phone number (clickable `tel:` link for mobile)
   - Email address (clickable `mailto:` link)
   - Optional: Contact form

### Donations Page
**Structure per entry:**
```
┌──────────────────────────────────────┐
│  [Donation Image]                    │
│                                      │
│  Donation Title - [Date]             │
│  Description: Summary of donation    │
│  Impact: What was achieved           │
└──────────────────────────────────────┘
```

---

## ✅ DEVELOPMENT CHECKLIST

### Phase 1: Foundation (Week 1)
- [ ] Create project folder structure
- [ ] Set up HTML files (`index.html`, `donations.html`)
- [ ] Create CSS files with reset/base styles
- [ ] Install Live Server extension
- [ ] Test local server setup
- [ ] Initialize GitHub repository (already done)
- [ ] Create `.gitignore` file

### Phase 2: HTML Structure (Week 1-2)
- [ ] Build header component with navigation
- [ ] Create home page sections (hero, bio, contact)
- [ ] Build donations page card structure
- [ ] Add semantic HTML5 tags
- [ ] Ensure accessibility (alt text, ARIA labels)

### Phase 3: Styling (Week 2-3)
- [ ] Design color scheme & typography
- [ ] Style header and navigation
- [ ] Style home page sections
- [ ] Style donations page cards
- [ ] Add hover effects and transitions
- [ ] Implement mobile-first responsive design

### Phase 4: Responsive Design (Week 3)
- [ ] Test on mobile (320px - 480px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (1200px+)
- [ ] Implement mobile navigation menu
- [ ] Optimize images for different screen sizes
- [ ] Test touch interactions on mobile

### Phase 5: JavaScript Interactivity (Week 3-4)
- [ ] Mobile hamburger menu toggle
- [ ] Smooth scroll navigation
- [ ] Optional: Image lazy loading
- [ ] Optional: Simple animations on scroll

### Phase 6: Content & Media (Week 4)
- [ ] Collect and optimize images
- [ ] Write/receive biography content
- [ ] Compile donation entries with dates
- [ ] Add contact information
- [ ] Create favicon

### Phase 7: Testing & Optimization (Week 4-5)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Accessibility audit
- [ ] Performance optimization (image compression, CSS/JS minification)
- [ ] SEO basics (meta tags, Open Graph)

### Phase 8: Deployment (Week 5)
- [ ] Purchase domain name
- [ ] Set up Netlify account
- [ ] Deploy to Netlify
- [ ] Configure custom domain
- [ ] Test production site
- [ ] Set up analytics (Google Analytics or privacy-friendly alternative)

---

## 🛒 FUTURE E-COMMERCE STRATEGY

### Third-Party E-Commerce Recommendations:

**Option 1: Shopify Buy Button (RECOMMENDED)**
- **Integration:** Embed products/checkout on your existing site
- **Cost:** $5/month + transaction fees (2%)
- **Features:** Handles payments, inventory, shipping to Mexico
- **How it works:** Add a few lines of JavaScript to embed products
- **Pros:** Professional, handles all payment security, international shipping
- **Mexico Support:** ✅ Full support

**Option 2: Stripe Payment Links**
- **Cost:** No monthly fee, 3.6% + €0.25 per transaction
- **Integration:** Simple links or embeddable checkout
- **Pros:** No subscription, very flexible
- **Cons:** You manage inventory tracking manually
- **Mexico Support:** ✅ Supported

**Option 3: Ecwid**
- **Cost:** Free tier available, $15/month for standard
- **Integration:** Embed store on any website
- **Features:** Full e-commerce, inventory management
- **Mexico Support:** ✅ Supported

**Option 4: WooCommerce (if you move to WordPress later)**
- **Cost:** Free plugin + hosting costs
- **Note:** Requires WordPress (not viable with your current static site)

**MY RECOMMENDATION:** Start with **Shopify Buy Button**. When ready:
1. Create Shopify account
2. Add products to Shopify admin
3. Generate "Buy Button" code
4. Paste code into your HTML
5. Shopify handles checkout, payment processing, and international shipping compliance

**Implementation Example:**
```html
<!-- Add to your HTML when ready -->
<div id='product-component-1234'></div>
<script src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"></script>
<script>
  // Shopify provides this code
  ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('product', { /* config */ });
  });
</script>
```

---

## 📱 MOBILE RESPONSIVENESS GUIDELINES

### Breakpoints:
```css
/* Mobile First Approach */
/* Base styles: Mobile (320px+) */

@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 1024px) {
  /* Desktop */
}

@media (min-width: 1440px) {
  /* Large desktop */
}
```

### Key Considerations:
- **Touch Targets:** Minimum 44x44px for buttons/links
- **Font Size:** Minimum 16px base (prevents zoom on iOS)
- **Images:** Use `max-width: 100%; height: auto;`
- **Navigation:** Hamburger menu for mobile
- **Testing:** Use Chrome DevTools device emulation + real devices

---

## 🔧 USEFUL VS CODE EXTENSIONS

1. **Live Server** - Local development server (ESSENTIAL)
2. **Prettier** - Code formatter
3. **Auto Rename Tag** - Automatically rename paired HTML tags
4. **CSS Peek** - Jump to CSS definitions
5. **HTML CSS Support** - IntelliSense for CSS
6. **GitHub Copilot** - Already installed ✅

---

## 📊 TIMELINE ESTIMATE

**Total Time:** 4-6 weeks (working part-time, 10-15 hours/week)

- **Weeks 1-2:** Setup, HTML structure, basic styling
- **Weeks 2-3:** Responsive design, JavaScript
- **Week 4:** Content integration, testing
- **Week 5:** Deployment, final adjustments
- **Week 6:** Buffer for revisions

---

## 🚨 IMPORTANT REMINDERS

1. **Version Control:** Commit frequently with clear messages
2. **Backup Images:** Keep original high-res versions before optimization
3. **Mobile First:** Design for mobile, then scale up to desktop
4. **Accessibility:** Use semantic HTML, alt text, proper contrast ratios
5. **Performance:** Optimize images (use WebP format when possible)
6. **Security:** Never put sensitive info in client-side code
7. **Domain Email:** When you buy the domain, set up professional email (doctor@jasonjamesmedicine.com)

---

## 📞 NEXT STEPS

1. ✅ Install Live Server extension
2. ✅ Create folder structure
3. ✅ Create initial HTML files
4. ✅ Set up CSS files
5. ✅ Test Live Server with basic HTML
6. Start building header component

---

## 🤝 CLIENT COMMUNICATION

**Content Needed from Client:**
- [ ] High-resolution portrait photo
- [ ] Biography text
- [ ] Additional photos for biography section
- [ ] Donation project details (titles, dates, descriptions, photos)
- [ ] Contact information (phone, email)
- [ ] Social media links (if any)
- [ ] Preferred color scheme/branding

**Timeline Check-ins:**
- Week 2: Show initial design
- Week 3: Review responsive version
- Week 4: Content review
- Week 5: Pre-launch approval

---

**Good luck with the project! Start by installing Live Server and creating your initial HTML structure.**
