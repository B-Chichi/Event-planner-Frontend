### Event Planner Frontend

A responsive React-based frontend for the Event Planner app where users can sign up, log in, browse events, create their own events, book tickets, and write or view event reviews. Built using React, React Router, TailwindCSS, and Zod for form validation.

---

## Features

Homepage displays all available events
# Authentication (Signup & Login)
Authenticated users can:
  -Create new events
  -View individual event details
  -Write reviews for any event
Book tickets
Form validation using Zod
Styled with a Shopify-inspired theme, with:
  -Custom header & footer
  -Social media icons
  -Dark-themed background

---

## Tech Stack
React (Vite)
React Router
Tailwind CSS
Zod (for form validation)
Fetch API (no axios)
Shadcn/UI for components

---

## Installation & Setup

# Clone the repo
git clone https://github.com/yourusername/event-planner-frontend.git
cd event-planner-frontend

# Install dependencies
npm install

# Start development server
npm run dev

---

# Routes

Path	Description

/	Homepage (lists events)
/login	Login page
/signup	Signup page
/events/:id	Event detail + reviews
/create	Add new event (auth only)

---

# Form Validation

Zod is used to validate:

  -Email format

  -Required fields for login/signup and event creation

Review content

---

# Backend Integration

Uses fetch() to interact with Flask backend API
Auth token storage handled in-browser
Events and reviews fetched from /events and /events/:id/reviews

---

# Ticket Booking 

Users can “book” tickets from the event page
A PDF of the booked event ticket can be downloaded

---

# Design & Styling

Inspired by Shopify theme

TailwindCSS for styling

Custom header, footer, and dark background

Responsive layout with shadcn UI components

---
[Watch video demo](https://drive.google.com/file/d/1vZgetG51WejjvCWi18dIElKR6GgxZw3G/view?usp=sharing)
# Contributors

Brian Bett 
Maureen Nkirote
Jeff Mbithi
Carol Kosgei
Bildad Ereggae

