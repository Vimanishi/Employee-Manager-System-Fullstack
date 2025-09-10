# Employee Management System (EMS) Fullstack

A fullstack Employee Management System built with React (frontend) and Spring Boot (backend).

## Features
- List, add, update, and delete employees
- RESTful API backend
- Responsive UI

## Technologies Used
- **Frontend:** React, Vite, CSS
- **Backend:** Spring Boot, Java, Maven
- **Database:** MySQL
- **Other:** ESLint, Maven Wrapper

## Project Structure

```
ems-fullstack/
├── ems-frontend/      # React frontend
│   ├── src/
│   └── public/
├── ems-backend/       # Spring Boot backend
│   ├── src/
│   └── pom.xml
├── screenshots/       # UI screenshots
```

## Setup Instructions

### Frontend
```bash
cd ems-frontend
npm install
npm run dev
```

### Backend
1. Go to `ems-backend/src/main/resources/application.properties`.
2. Configure your database connection:
    ```
    spring.datasource.url=jdbc:mysql://localhost:3306/ems
    spring.datasource.username=your_db_user
    spring.datasource.password=your_db_password
    ```
3. Start the backend:
    ```bash
    cd ems-backend
    ./mvnw spring-boot:run
    ```

## Contact

[Victor Imanishi](vkmimanishi@gmail.com)