# Inventory Management System

## Full Stack Task Management and Inventory Collaboration System

This project is built using:

- Backend: Django + Django REST Framework
- Frontend: Next.js
- Database: MySQL
- Authentication: JWT + Google Login
- Email Service: SMTP
- Environment Variables: dotenv

---

## Features

- User Authentication
- Admin and User Roles
- Task Creation
- Team Collaboration
- Invitation System
- Email Notifications
- JWT Authentication
- Google Sign-In
- REST APIs
- Task Permission Control

---

## Backend Setup

Install dependencies:

```bash
pip install -r requirements.txt
```

Create `.env` file and add:

```env
SECRET_KEY=your_secret_key

DB_NAME=your_db
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_16_character_password
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Create superuser:

```bash
python manage.py createsuperuser
```

Run server:

```bash
python manage.py runserver
```

---

## API Endpoints

### Users
- `/api/users/`

### Tasks
- `/api/tasks/`

### Invitations
- `/api/invitations/`

---

## Authentication

- JWT Authentication
- Google OAuth Login
- Form Authentication

---

## Tech Stack

### Backend
- Django
- Django REST Framework
- JWT
- MySQL

### Frontend
- Next.js
- JavaScript

---

## Developed For

Academic Full Stack Development Project Submission.