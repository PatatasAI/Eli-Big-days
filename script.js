// RSVP Form Handling and Invitation Generation
document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvp-form');
    const landingPage = document.getElementById('landing-page');
    const invitationPage = document.getElementById('invitation-page');
    const guestNameDisplay = document.getElementById('guest-name-display');
    const downloadBtn = document.getElementById('download-btn');
    const backBtn = document.getElementById('back-btn');
    const invitationCard = document.getElementById('invitation-card');

    // Store RSVP data (in a real app, this would be sent to a server)
    let rsvpData = [];

    // Handle form submission
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const guestName = document.getElementById('guest-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const attendees = document.getElementById('attendees').value;
        const message = document.getElementById('message').value.trim();

        // Validate required fields
        if (!guestName || !email || !attendees) {
            alert('Please fill in all required fields.');
            return;
        }

        // Store RSVP data
        const newRSVP = {
            id: Date.now(),
            guestName: guestName,
            email: email,
            phone: phone,
            attendees: attendees,
            message: message,
            timestamp: new Date().toISOString()
        };

        rsvpData.push(newRSVP);
        console.log('RSVP Data:', rsvpData);

        // Save to localStorage (for demonstration purposes)
        saveToLocalStorage(rsvpData);

        // Generate personalized invitation
        generateInvitation(guestName);

        // Show success message
        showSuccessMessage();
    });

    // Generate personalized invitation
    function generateInvitation(guestName) {
        // Update the guest name on the invitation
        guestNameDisplay.textContent = guestName;

        // Switch to invitation page
        landingPage.classList.add('hidden');
        invitationPage.classList.remove('hidden');

        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Show success message
    function showSuccessMessage() {
        // Create success notification
        const notification = document.createElement('div');
        notification.className = 'success-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="checkmark">✓</span>
                <p>RSVP Successful! Your personalized invitation is ready.</p>
            </div>
        `;

        // Add styles for notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #d4af37 0%, #f4e5b0 100%);
            color: white;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.5s ease;
        `;

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    // Download invitation as image
    downloadBtn.addEventListener('click', function() {
        // Use html2canvas to capture the invitation card
        html2canvas(invitationCard, {
            scale: 2,
            backgroundColor: '#fff9e6',
            useCORS: true,
            logging: false
        }).then(canvas => {
            // Convert canvas to blob
            canvas.toBlob(function(blob) {
                // Create download link
                const guestName = guestNameDisplay.textContent.replace(/\s+/g, '_');
                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = `Baptism_Invitation_${guestName}.png`;
                
                // Trigger download
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);

                // Show download success message
                showDownloadSuccess();
            }, 'image/png');
        }).catch(err => {
            console.error('Error generating image:', err);
            alert('Sorry, there was an error generating your invitation. Please try again.');
        });
    });

    // Show download success message
    function showDownloadSuccess() {
        const notification = document.createElement('div');
        notification.className = 'download-success';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="checkmark">✓</span>
                <p>Invitation downloaded successfully!</p>
            </div>
        `;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
            color: white;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.5s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    // Back button functionality
    backBtn.addEventListener('click', function() {
        invitationPage.classList.add('hidden');
        landingPage.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

    // Save to localStorage
    function saveToLocalStorage(data) {
        try {
            localStorage.setItem('baptismRSVP', JSON.stringify(data));
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
    }

    // Load from localStorage
    function loadFromLocalStorage() {
        try {
            const stored = localStorage.getItem('baptismRSVP');
            if (stored) {
                rsvpData = JSON.parse(stored);
                console.log('Loaded existing RSVP data:', rsvpData.length, 'entries');
            }
        } catch (e) {
            console.warn('Error loading from LocalStorage:', e);
        }
    }

    // Load existing data on page load
    loadFromLocalStorage();

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }

        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .checkmark {
            font-size: 24px;
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);

    // Console welcome message
    console.log('%c🎉 Baptism Celebration Website Loaded!', 'font-size: 20px; color: #d4af37; font-weight: bold;');
    console.log('%cReady to collect RSVPs and generate personalized invitations!', 'font-size: 14px; color: #2c3e50;');
});
