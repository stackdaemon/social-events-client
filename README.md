# 🌱 Social Development Events Platform

## 🎯 Project Purpose
**Social Development Events Platform** is a community-driven web application where users can **create, join, and track social service events** in their local area.  
Example: "Road Cleaning in Mirpur 10, Dhaka" or "Tree Plantation - Hossainpur, Kishoreganj".  
It allows users to browse upcoming events, view details, join events, and manage their created events.

---

## 🌐 Live URL
🔗 [Live Site](https://social-events-a10.netlify.app/)

---

## 🗝️ Key Features
✅ **User Authentication**  
- Email/password login and Google OAuth login  
- Password validation (uppercase, lowercase, min 6 characters)  
- Toast notifications on login, register, and errors  

✅ **Create Event (Private Page)**  
- Only logged-in users can create events  
- Event fields: Title, Description, Type (Cleanup, Plantation, Donation, etc.), Location, Thumbnail URL, Event Date  
- Date validation to allow **future dates only**  
- Success toast on event creation  

✅ **Upcoming Events (Public Page)**  
- Grid layout of all upcoming events  
- Each event card shows thumbnail, title, location, type, date, and “View Event” button  
- Users can join events after logging in  

✅ **Event Details Page (Public)**  
- Shows full event details  
- “Join Event” button requires login  
- Displays who created the event  

✅ **Joined Events Page (Private Page)**  
- Displays all events joined by the logged-in user  
- Events sorted by date  

✅ **Manage Events Page (Private Page)**  
- View all events created by the logged-in user  
- Update event information  
- Optional: Delete events  

✅ **Search & Filter Events**  
- Search events by name  
- Filter events by type using backend API and MongoDB  

✅ **Theme Toggle**  
- Light/Dark mode toggle for the full application  

✅ **Interactive UI & Animations**  
- Framer Motion animations for page transitions  
- Unique design with consistent headings, buttons, and card layouts  
- Responsive design for mobile, tablet, and desktop  

---

## 📦 NPM Packages Used
| Package | Purpose |
|---------|---------|
| **react** | Core React library |
| **react-dom** | DOM rendering |
| **react-router-dom** | Routing & Protected Routes |
| **firebase** | Authentication & config |
| **tailwindcss** | Styling |
| **daisyui** | Prebuilt Tailwind components |
| **react-datepicker** | Event date selection |
| **react-hot-toast** | Toast notifications |
| **framer-motion** | Animations |
| **react-icons / lucide-react** | UI icons |

---

## 🧩 Tools & Technologies
- React + Vite  
- TailwindCSS + DaisyUI  
- Firebase Authentication  
- MongoDB + Express.js backend  
- Responsive Web Design (RWD)  
- React Context for authentication and state management  

---

## ⚙️ Run Locally
```bash
# Clone the client repository
git clone https://github.com/your-username/social-events-client.git

# Clone the server repository
git clone https://github.com/your-username/social-events-server.git

# Navigate to client folder
cd social-events-client

# Install client dependencies
npm install

# Run client development server
npm run dev

# Navigate to server folder
cd ../social-events-server

# Install server dependencies
npm install

# Run server
npm run start
