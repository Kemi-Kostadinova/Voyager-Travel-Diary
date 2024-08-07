My first React project, serving as the final assignment for the course at SoftUni.

# Voyager

Voyager is a Single Page Application (SPA) designed as the final project for my course at SoftUni. Built with React for the frontend, it provides a seamless and interactive user experience for managing travel entries. The application features user authentication, travel entry management, commenting, and liking functionalities.

## ✏️ Application Overview

This application is a web-based platform designed for managing and interacting with travel entries.

Voyager is a comprehensive platform that allows users to:

- **Authenticate**: Securely log in, sign up, and log out.
- **Manage Travel Entries**: Create, view, edit, and delete personal travel entries.
- **Engage with Content**: Add comments and like entries to interact with other users' content.
- **Responsive Design**: Enjoy a user-friendly interface optimized for various devices.

This project aims to demonstrate the core capabilities of React, showcasing its features and functionalities through an engaging platform for users to document and share their travel experiences.

### App Permissions

| **Permissions** | Guest  | Logged in User | Entry Author |
| --------------- | -----  | -------------- | ------------ |
| Login / Register | ✔️      | ❌             |              |
| Home page       | ✔️      | ✔️              |              |
| About us       | ✔️      | ✔️              |              |
| Details         | ✔️      | ✔️              |              |
| Comments         | ✔️      | ✔️              |              |
| Edit / Delete      | ❌      | ❌              | ✔️             |
| Like      | ❌      | ✔️              |  ✔️           |
| Write Comment      | ❌      | ✔️              | ✔️             |
| Profile         | ❌     | ✔️              |               |
| My Entries       | ❌     | ✔️              |              |
| Create Entry  | ❌     | ✔️             |              |

### Authentication

For testing purposes, there are two pre-configured users available, so you can start using the application immediately without the need for registration:
- **Username:** peter@abv.bg  
  **Password:** 123456

- **Username:** jane@abv.bg  
  **Password:** 123456


## 💻 Built with

### Front-end
- React
- React Router
- JavaScript
- HTML & CSS
- Tailwind CSS
- Toastify
### Back-end
- Softuni practice server ([GitHub Repository](https://github.com/softuni-practice-server/softuni-practice-server))


## 🚀 Installation

Clone respository:

```bash
   git clone 'https://github.com/Kemi-Kostadinova/Voyager-Travel-Diary.git'

```

Run application:

```bash
  cd client
  npm install
  npm run dev

```

* Access the application by opening the following URL in a web browser: http://localhost:5173/

Run server:

```bash
  cd server 
  node server.js
```
* Once the server is started, it will listen for requests on: http://localhost:3000
## Screenshots

### Home
![App Screenshot](/client/public/home.png)

### About
![App Screenshot](/client/public/about.png)

### Login
![App Screenshot](/client/public/login.png)

### Register
![App Screenshot](/client/public/register.png)

### Catalog
![App Screenshot](/client/public/catalog.png)

### Add travel entry
![App Screenshot](/client/public/create.png)

### Details
![App Screenshot](/client/public/deatils.png)

### Profile
![App Screenshot](/client/public/profile.png)