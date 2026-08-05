# Baptism Celebration Website

A beautiful, elegant website for celebrating your daughter's Baptism with RSVP functionality, personalized invitation generation, and email notifications.

## Features

✨ **Beautiful Cotton Candy Pastel Design**
- Soft pink, blue, and lavender pastel gradient background
- Elegant Christian-themed design
- Responsive layout that works on all devices
- Beautiful typography with Google Fonts

📝 **RSVP System**
- Guest registration form
- Collects name, email, phone, number of attendees
- Optional message field for blessings
- Data stored in browser localStorage

🎫 **Personalized Invitation Generator**
- Auto-generates invitation with guest's name
- Beautiful invitation card with Jesus Christ image
- Includes Google Maps link for directions
- Download as PNG image
- Share-ready format

🗺️ **Google Maps Integration**
- Direct link to event location on Google Maps
- GPS navigation button on both main page and invitation
- Easy directions for guests

📧 **Email Notifications**
- Automatic email notifications to host (michaeljohnlano@gmail.com)
- Each RSVP triggers an email with:
  - Guest name
  - Email address
  - Phone number
  - Number of attendees
  - Special message
  - Total RSVP count

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - Complete styling with pastel colors
- `script.js` - Interactive functionality with email notifications

## How to Use

1. **Open the website**: Simply open `index.html` in any web browser
2. **View event details**: See baptism information on the landing page
3. **Register (RSVP)**: Fill out the form with your details
4. **Get your invitation**: After submitting, a personalized invitation is generated with:
   - Guest's name automatically added
   - Jesus Christ welcoming image
   - Google Maps directions link
5. **Download**: Click "Download Invitation" to save as PNG image

## Email Notification Setup

The website uses **FormSubmit.co** (free service) to send email notifications:

### First-Time Setup Required:
1. When you first test the form, FormSubmit will send a confirmation email to `michaeljohnlano@gmail.com`
2. Click the confirmation link in that email to activate notifications
3. All future RSVPs will automatically send emails to you

### To View RSVP Responses:
- Check your email inbox at `michaeljohnlano@gmail.com`
- Each submission sends you a detailed email
- You can also access a dashboard at [formsubmit.co](https://formsubmit.co) using your email

### Alternative: View Local RSVP Data
- Open browser console (F12)
- Type `console.log(rsvpData)` to see all registrations
- Data is also saved in localStorage

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

<!-- Google Maps Link (update with your actual location) -->
<a href="https://maps.app.goo.gl/Rq3t8muXaqBxycp67" target="_blank">
    🗺️ Get Directions
</a>

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
- FormSubmit.co for email notifications (free, no API key required)
- No backend required - runs entirely in the browser
- RSVP data stored locally and sent via email
- Mobile-friendly responsive design
- Cotton candy pastel color scheme (#ffd1dc, #ffb7c5, #b5deff, #d4f0f0, #e6e6fa)

## License

Free to use and modify for personal purposes.

---

Created with ❤️ for a special Baptism celebration
