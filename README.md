🎉 Guest Check-In Dashboard App
This project is a simple guest check-in and attendance dashboard, built to simulate a real-world event management tool.
It was designed as my first backend project, to gain hands-on experience with Express.js, API design, and connecting the backend with a dynamic frontend.

While learning backend development for the first time, I built out not just basic routes, but also created a usable full-stack system that manages event guest lists and visualizes live attendance data.

🚀 How to Run Locally
1. Install dependencies
bash
Copy
Edit
npm install express
2. Start the server
bash
Copy
Edit
node server.js
By default, the app will be running at:

arduino
Copy
Edit
http://localhost:8383
🌐 Website Pages

URL	Purpose
/	Home Page: Add and view guest check-ins
/dashboard.html	Dashboard: Visualize guest attendance via dynamic charts
/dashboard	(Optional route alias to dashboard)
🧩 Main Features

Page	Features
Home Page (/)	- Add new guest names when they check in
- View live guest list
- Remove the last guest if added incorrectly
- Responsive, mobile-friendly design for easy event usage
Dashboard Page (/dashboard.html)	- Visualizes guest attendance with a dynamic Chart.js graph
- Toggle between Bar Chart 📊 and Pie Chart 🥧 views
- Displays the number of check-ins per guest
- Smooth animations and colorful styling for clean visualization
🛠 API Endpoints

Method	Endpoint	Purpose
GET	/api/guests	Fetch all checked-in guests
POST	/api/guests	Add a new guest (payload: { "name": "Alice" })
DELETE	/api/guests	Remove the most recent guest
📂 Project Structure
bash
Copy
Edit
/ (root)
├── server.js              # Express server
├── package.json           # Project metadata
├── /public                # Static frontend files
│   ├── /css
│   │   └── styles.css     # Global styles
│   ├── /js
│   │   ├── app.js         # Home page JS logic
│   │   └── dashboard.js   # Dashboard chart logic
│   ├── index.html         # Home page
│   └── dashboard.html     # Dashboard page
└── README.md              # (this file)
📈 Tech Stack
Backend: Express.js (Node.js)

Frontend: Vanilla HTML, CSS, and JavaScript

Visualization: Chart.js (loaded via CDN)

Architecture: RESTful API + dynamic client rendering

📸 Screenshots
Home Page (Guest Check-In):

Simple guest form

Live updating guest list

Responsive layout

Dashboard Page (Attendance Visualization):

Bar Chart showing guest counts

Toggleable Pie Chart for alternative view

Animated, colorful charts powered by Chart.js

🎯 Purpose of the Project
This app was my first full backend project, created to learn and practice:

Setting up an Express server

Designing simple REST APIs

Serving static frontend assets

Consuming APIs dynamically from a frontend

Connecting a backend with live visualization libraries (Chart.js)

I intentionally made the project feel "real" by tying it to a practical event guest management use case rather than building an abstract demo.

🚀 Future Improvement Ideas
Add timestamps to each guest check-in

Categorize guests (e.g., VIP, Speaker, General Attendee)

Add search functionality to quickly find guests

Deploy online for real-time usage at events

Add a "Clear All Guests" admin control

✨ Thank you for checking out the Guest Check-In Dashboard App!
