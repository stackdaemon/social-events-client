# Social Development Events Platform

A community-driven event management platform where users can **create, join, and track social service events** in their local area.

Live Site: [[Your Live Site URL Here](https://social-events-a10.netlify.app/)](https://your-site-url.com](https://social-events-a10.netlify.app/))]

---

## Features

- **User Authentication:** Email/password login and Google OAuth login for secure access.  
- **Create Events:** Logged-in users can create social events with title, description, location, event type, date, and thumbnail image.  
- **Upcoming Events:** Browse all upcoming events with event cards showing details like title, location, type, date, and a view button.  
- **Join Events:** Users can join events after logging in, and their participation is stored in the database.  
- **Manage Events:** Users can view and update events they created. Optional: Delete events.  
- **Responsive Design:** Fully responsive for mobile, tablet, and desktop devices with a clean, unique UI.  
- **Theme Toggle:** Switch between Light and Dark modes seamlessly.  
- **Search & Filter:** Search events by name and filter events by type.  
- **Animated UI:** Smooth animations using Framer Motion for a better user experience.  
- **Newsletter Section:** Users can subscribe to newsletters (UI only).  

---

## Pages

- **Home Page (Public):** Banner, Features, Gallery, and Newsletter sections.  
- **Login / Register Pages:** Email/password authentication with validation and toast notifications.  
- **Create Event Page (Private):** Form to create a new event with date validation.  
- **Upcoming Events Page (Public):** Grid layout of upcoming events with “View Event” and “Join Event” buttons.  
- **Event Details Page (Public):** Shows full event details; joining requires login.  
- **Joined Events Page (Private):** Displays events the logged-in user has joined.  
- **Manage Events Page (Private):** Displays events created by the user with update (and optional delete) functionality.  

---

## Technologies Used

- **Frontend:** React, React Router, TailwindCSS, React Datepicker, Framer Motion  
- **Backend:** Node.js, Express.js, MongoDB, JWT/Firebase Authentication  
- **Hosting:** Netlify / Firebase for client-side, Vercel for server-side  
- **Notifications:** React Hot Toast / SweetAlert  

---

## Validation Rules

- Password must include:
  - At least one uppercase letter  
  - At least one lowercase letter  
  - Minimum 6 characters  
- Event date must be **future date only**  
- Custom toast/sweet alerts are used for success/error messages  

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/client.git
   git clone https://github.com/yourusername/server.git

