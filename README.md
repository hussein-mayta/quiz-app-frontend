# QUIZZORA - Quiz Web App

## Overview

QUIZZORA is a simple and interactive quiz web application built using only **vanilla HTML, CSS, and JavaScript**. It supports user registration and login, displays a selection of quizzes, tracks user scores, and includes an admin-only dashboard for managing user performance.

## Features

### Authentication Page
- Two tabs/forms: **Login** and **Register**
- Stores user credentials in **localStorage**
- Validates login against stored credentials
- Admin access:  
  - Email: `hussein@admin.com`  
  - Password: `admin123`  
  - Admin is redirected to the Dashboard page upon login

### Home Page
- Displays a **welcome message**
- Shows a list of available quizzes retrieved from `localStorage`
- Clicking a quiz name opens the **Quiz Page**

### Quiz Page
- Displays **5 multiple-choice questions** per quiz
- Questions are dynamically loaded from `localStorage`
- Each question has:
  - 3  options
  - One correct answer
- Users select their answers and submit the quiz
- After submission:
  - The **score is displayed**
  - The score is saved in `localStorage` under the specific user

### Admin Dashboard (Admin Only)
- Accessible only to the admin user
- Displays a table of all registered users and their scores
- Data is pulled directly from `localStorage`

---

## How to Run

1. **Clone or download** the repository
2. Open `index.html` in your browser
3. Start by registering a new user or login as the admin

---

## File Structure

/quiz-web-app
│
├── index.html          # Main entry point
│
├── /pages              # Folder for HTML pages
│   ├── login.html      # Login page
│   ├── register.html   # Register page
│   ├── home.html       # Home page
│   ├── quiz.html       # Quiz page
│   └── dashboard.html  # Admin dashboard page
│
├── /styles             # Folder for styles
│   ├── style.css       # Global styles
│   ├── auth.css        # Authentication styles
│   ├── home.css        # Home styles
│   ├── quiz.css        # Quiz styles
│   └── dashboard.css   # Dashboard styles
│
├── /js                 # Folder for JavaScript
│   ├── auth.js         # Authentication functions
|   ├── reg.js          # Some Registration functions
|   ├── home.js         # 
│   ├── quiz.js         # Quiz logic
│   ├── quizdata.js    # Admin dashboard logic
│   └── dashboard.js
│
├── /assets             # Folder for images, icons, etc.
│   └── /images
│
└── /readme             # Folder for documentation (e.g., ReadMe.md)
    └── ReadMe.md       # Project documentation



---

## Technologies Used

- HTML
- CSS
- JavaScript 
- `localStorage` API

---

## Notes

- All data is stored **locally** in the browser using `localStorage`
- This project does **not** use any external libraries or frameworks
- Admin functionality is **hardcoded** for simplicity

---



