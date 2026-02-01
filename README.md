# Jason James Medicine Portfolio

A professional, heartfelt website portfolio created for Dr. Jason James, my father-in-law. This project showcases his dedication to medicine, his work as an internal medicine hospitalist, and his incredible charitable impact across multiple countries.

This was a fun and meaningful project to work on - combining my technical skills with the opportunity to honor someone who truly makes a difference in people's lives.

## About Dr. Jason James

Dr. Jason James is an **internal medicine hospitalist** who graduated from the **Debusk College of Osteopathic Medicine at Lincoln Memorial University in 2016**. He serves in several medical organizations in the **Nebraska Panhandle area** and is deeply committed to charitable work, regularly organizing medical supply donations to countries like **Mexico, Dominican Republic, and Samoa**.

---

## Tech Stack

- **HTML5** - Semantic markup for accessibility and SEO
- **CSS3** - Custom properties (CSS variables), Flexbox, Grid
- **Vanilla JavaScript** - No frameworks, lightweight and fast
- **Responsive Design** - Mobile-first approach with media queries
- **No Build Tools** - Simple, clean, and easy to maintain

---

## Project Structure

```
jason-james-medicine-portfolio/
├── index.html              # Home page with bio and contact
├── impact.html             # Impact/donations showcase page
├── css/
│   ├── reset.css          # CSS normalization
│   ├── style.css          # Main styles with CSS variables
│   └── responsive.css     # Media queries for all screen sizes
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── mobile-menu.js     # Mobile navigation handler
├── images/
│   ├── portrait/          # Dr. James's portrait (250x300px)
│   ├── biography/         # Biography section images
│   └── donations/         # Impact project images
├── assets/
│   └── icons/             # SVG icons, favicon
└── README.md
```

---

## Website Architecture

### Page Structure

#### Home Page (`index.html`)
1. **Header/Navigation**
   - Logo: "Jason James Medicine"
   - Navigation links: Home | Impact
   - Responsive hamburger menu for mobile

2. **Hero Section**
   - Professional portrait (250px × 300px, contained within white background frame)
   - Name and subtitle
   - Clean gradient background

3. **Biography Section**
   - Comprehensive story of Dr. James's career and values
   - Interspersed professional images
   - Details about education (LMU 2016), specialty, and service areas
   - Personal interests: serving others, outdoors, fixing cars

#### 🌍 Impact Page (`impact.html`)
- **Showcase of charitable work** across multiple countries
- **Grid layout** of impact cards
- Each card includes:
  - Project image
  - Title and date
  - Description of the donation/initiative
  - Measured impact on communities

**Featured Projects:**
- Tupua Tamasese Meaole (TTM) Hospital - Samoa
- Hospital Militar Docente Dr. Ramón de Lara - Dominican Republic
- And more...

---

## Design Philosophy

### Color Scheme
```css
--primary-color: #2c5f8d;      /* Deep Medical Blue */
--secondary-color: #45a29e;    /* Teal Accent */
--accent-color: #00b4d8;       /* Bright Blue */
--text-dark: #1a1a1a;          /* Almost Black */
--text-light: #4a5568;         /* Gray */
--background: #ffffff;         /* White */
--background-alt: #f7fafc;     /* Light Gray */
```

### Typography
- **Headings:** Georgia serif - classic, professional
- **Body:** System font stack - fast loading, native appearance
- **Line height:** 1.8 for optimal readability

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## Key Features & Refinements

### Portrait Image Optimization
- **Square format** with contained sizing to prevent cropping
- **Dimensions:** 250px width × 300px height (vertical rectangle)
- **White background frame** with subtle shadow for depth
- Responsive on all devices

### Navigation
- Sticky header that follows scroll
- Smooth transitions and hover states
- Mobile-friendly hamburger menu

### Accessibility
- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Keyboard-navigable links
- ARIA labels on interactive elements

### Performance
- No external dependencies or CDNs
- Minimal CSS and JavaScript
- Optimized images with fallback placeholders
- Fast page load times

---

## Development Process

This project was built with care, combining technical precision with personal meaning. Working with **GitHub Copilot** (powered by Claude Sonnet 4.5), we iteratively refined:

1. ✅ **Portrait adjustments** - From circular to square format, then fine-tuned dimensions
2. ✅ **Content updates** - Added accurate medical credentials and personal details
3. ✅ **Bio refinements** - Replaced placeholder text with real information about Dr. James
4. ✅ **Impact page** - Updated with specific hospital names and locations
5. ✅ **Contact details** - Added real phone and email information

Special thanks to **GitHub Copilot** for helping bring this vision to life efficiently and thoughtfully!

---

## Future Enhancements

- [ ] Add more impact project photos as they become available
- [ ] Include testimonials from patients or partnered organizations

---

## Contact & Credits

**Website Created For:**  
Dr. Jason James  

**Developed By:**  
Victor Santana  
📧 victorrafaelsantana@hotmail.es

**With Assistance From:**  
GitHub Copilot (Claude Sonnet 4.5)  

---

## License

This is a personal portfolio website. All content and images © 2026 Dr. Jason James. All rights reserved.

---