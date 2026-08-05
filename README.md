# Baptism Celebration Website

A beautiful, elegant website for celebrating your daughter's Baptism with RSVP functionality and personalized invitation generation.

## Features

✨ **Beautiful Design**
- Elegant Christian-themed design with gold accents
- Responsive layout that works on all devices
- Beautiful typography with Google Fonts

📝 **RSVP System**
- Guest registration form
- Collects name, email, phone, number of attendees
- Optional message field for blessings
- Data stored in browser localStorage

🎫 **Personalized Invitation Generator**
- Auto-generates invitation with guest's name
- Beautiful invitation card design
- Download as PNG image
- Share-ready format

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - Complete styling
- `script.js` - Interactive functionality

## How to Use

1. **Open the website**: Simply open `index.html` in any web browser
2. **View event details**: See baptism information on the landing page
3. **Register (RSVP)**: Fill out the form with your details
4. **Get your invitation**: After submitting, a personalized invitation is generated
5. **Download**: Click "Download Invitation" to save as PNG image

## Customization

To customize for your event, edit these sections in `index.html`:

```html
<!-- Child's Name -->
<p class="child-name">Emma Grace Johnson</p>

<!-- Event Date & Time -->
<p>Sunday, March 15th, 2025</p>
<p>2:00 PM</p>

<!-- Church Location -->
<p>St. Mary's Church</p>
<p>123 Faith Avenue, Heaven City</p>

<!-- Family Name -->
<p class="family-name">The Johnson Family</p>
```

Also update contact information in the footer section.

## Hosting Options

### Option 1: GitHub Pages (Free)
1. Push this repository to GitHub
2. Go to Settings > Pages
3. Enable GitHub Pages
4. Your site will be live at `yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Get instant deployment

### Option 3: Vercel (Free)
1. Import repository to [Vercel](https://vercel.com)
2. Automatic deployment

### Option 4: Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then visit `http://localhost:8000`

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Technical Notes

- Uses html2canvas library for invitation image generation
- No backend required - runs entirely in the browser
- RSVP data stored locally (for production, integrate with a backend service)
- Mobile-friendly responsive design

## License

Free to use and modify for personal purposes.

---

Created with ❤️ for a special Baptism celebration
