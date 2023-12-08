# ReactJS-Project-Defense

* Introduction
**The E-Learning System is designed to provide an interactive and efficient platform for online courses. The primary goal is to enhance the learning experience by offering a user-friendly interface and communication between students and course materials.**

* Project Scope

**This project focuses on the development of the front-end component of an E-Learning system. The system leverages React.JS as the front-end framework and utilizes the Softuni practice server for backend functionalities.**


## Installation tutorial

Clone the project

```bash
  git clone https://github.com/dayofpay/ReactJS-Project-Defense
```

Navigate to the server directory

```bash
  cd server

    * npm install - to install all dependencies
    * node server.js - command to start the backend server;

```

Now navigate to the client directory

```bash
  npm install
  npm run dev
```

Now you can visit the website with this url

```bash
  http://localhost:5173/
```


## Deployment



This project is deployed using Firebase, and the live application is accessible at https://react-defense-coursesystem.web.app.

## Code Structure

![Code Structure](https://i.gyazo.com/f50b0c01ce00eafa0ebc20b16f780c62.png)
![Code Structure2](https://i.gyazo.com/6aad26e6854908a3ae659dbb1b29c5a7.png)
# Project Structure Overview

## 1. src
   - The root directory of your React project.

## 2. assets
   - Contains static assets such as images, fonts, or other media files used in the project.

## 3. components
   - Contains React components that are organized into different categories.
     - **global:** Components that are reused across different parts of your application.
     - **private:**
       - **Auth:** Components related to authentication.
       - **Panel:** Components specific to the administrative panel.
         - **Statistics:** Components related to statistical data presentation.
     - **site:** Components related to the public-facing part of your website.
       - **About, Courses, Features, Footer, Header, Navigations, Team, Testimonials, Topbar:** Components corresponding to various sections of your site.

## 4. contexts
   - Contains React context providers, used for managing global state in your application.

## 5. HOC (Higher Order Components)
   - Contains reusable higher-order components.

## 6. hooks
   - Custom React hooks that encapsulate logic for reuse.

## 7. keys
   - Store forms keys

## 8. lib
   - General-purpose utility functions or libraries.

## 9. Pages
   - Contains top-level pages or views for both the administrative panel and the public-facing site.
     - **Panel:** Pages related to the administrative panel.
     - **Site:** Pages for the public-facing site.

## 10. services
   - Handles communication with external services or APIs.

## 11. utils
   - Additional utility functions or helper modules.



## Acknowledgements
Now i will show you every page of the website and explain the purpose of it

* Home Page

**This is the home page of the project, it contains information about the website, brief overview of the statistics and the latest added courses**
![Home Page](https://i.gyazo.com/7729306888c0e64d96f5faeb958c795e.png)
-
![Home Page 2](https://i.gyazo.com/ab9ce1d250deeefc2dc8c7a6a7ba22b5.png)
-
![Home Page 3](https://i.gyazo.com/0183e11ae84bf055e65d10939734bdd3.png)
-
![Home Page 4](https://i.gyazo.com/6db53be2b4298aad72a669ba50388b77.png)
-
![Home Page 5](https://i.gyazo.com/e97ebd774575dc185073a42242da050e.png)

* About page
**This is fully static page, there is no dynamic content ( If we dont count the Navigation )**

![About Page](https://i.gyazo.com/1398b50d7ee3d7b8d9c4e839c5925f9d.png)

# Courses Page

**This page contains the last added courses**

![Courses](https://i.gyazo.com/7ba73d4c11db0aa20a24c3183d049d49.png)


# Course Details Page

This page contains the details about a courses

Roles And Permissions

* Guest - Guest can only view the details about the project and view comments but can NOT Enroll in courses or write comments unless the user registers into the website ( And has enough balance )

* Logged in user - A user that is logged in into the system is able to write and view comments, also to view course files and other data about the course. (But only if the user has access to that course)

* User that has access to the course - A user that has access to the course have rights to view the Course Files.
![Course Details](https://i.gyazo.com/b01e7c07f24e7e3ae9b598195eee011f.png)
![Comments](https://i.gyazo.com/e8f09653701f30e837567a0d185d8f17.png)

# Auth Pages
Login ![Login](https://i.gyazo.com/290cafff42658728a13638f9683efdb7.png)
Register ![Register](https://i.gyazo.com/e214714369dd88de9d1441867f1781e6.png)

# Dashboard System ( Home )
----
* Dashboard as administrator



**NOTE: Only members with Admin permissions has access to the special sidebar tab [STAFF]**

* Every user has access to three statistics
`My Courses` - Number of the courses that you have access to
----
`Balance` - Your total account balance
----
`Registered Users` - Total Registered users to the website
----
![AsAdmin](https://i.gyazo.com/c898e67ca113fc718d8b80bfe54018b5.png)

# Course Management

## Overview

The Course Management section provides a suite of powerful tools for efficiently overseeing and maintaining courses within the system. Here, you'll find four key options designed to streamline your course administration tasks.

### 1. **View Course**
- Access a detailed overview of each course, gaining insights into crucial information such as enrollment details, course content, and statistics.

### 2. **Delete Course**
- Remove courses from the system.

### 3. **Edit Course**
- Dive deep into course details and effortlessly manage course information, student data, and other critical elements. This interactive page empowers administrators with the ability to make real-time updates to course content and user-related data.

### 4. **Course Files**
- Seamlessly manage all files associated with a specific course. This feature-rich page provides a centralized hub for uploading, organizing, and maintaining course-related files. Whether it's lecture notes, assignments, or multimedia content, Course Files offers a user-friendly interface for efficient file management.

![CourseManage](https://i.gyazo.com/ecd437813d3502b1e2ccfbbd1ef96c0c.png)

![Edit Course](https://i.gyazo.com/bec1ef4ee384269ef3ab6c038d0cdaed.png)
![Edit Students](https://i.gyazo.com/d2d7354aa93d7cfcc3a132ffe62633cd.png)
![Course Files](https://i.gyazo.com/fd5fa222b5155aa873ede39be87d21cb.png)

# Manage Users
## Overview

The Manage Users page displays a summary of all users within the system, showcasing essential details such as E-Mail, Name, Balance, Is Staff status, and ID.

![Manage Users](https://i.gyazo.com/98a416192f7bb9311dd2bad77c94a7ac.png)

# Edit User
![Edit User](https://i.gyazo.com/91312daede90912853365a34247ad00f.png)
## Overview
User Image: Gravatar image associated with the user's email.

Is Staff Status: Indicates whether the user has staff privileges.

Balance: Displays the current balance of the user.

The Edit User page allows administrators to make necessary changes to individual user profiles. It provides a holistic view, including user image, staff status, and balance, ensuring accurate and up-to-date user information.

# Create Course
![Create Course](https://i.gyazo.com/b381ad830194145c153e158fbde4c9aa.png)

## Overview

This page contains all fields required to create a course

# My profiles

![My Profila](https://i.gyazo.com/09dae266526bd6a222a628cc92fc1d6b.png)

## Overview

My profile contains all information about the currently logged user
## Tech Stack

**Client:** React, Bootstrap, TailWind

**Server:** SoftUni Practice Server

**Templates**

- Admin / Customer Dashboard - AdminOne

- Educational Pages - Edukate

## External API's used

 - Gravatar - Used for generating user profile images

## Initial Data Values

# Courses DataTable Initial Data

| _ID                                   | _OwnerID                              | Course Name    | Students             | Price | Difficulty | Lecturers              | Category    | Created On           |
|---------------------------------------|---------------------------------------|-----------------|----------------------|-------|------------|------------------------|-------------|----------------------|
| 3564027f-adcd-4425-b2c0-1253d2386c0c | 60f0cf0b-34b0-4abd-9769-8c42f830dffc  | Web Developer   | admin@abv.bg         | $235  | Medium     | Vladislav Ivanov       | Programming | 1702051901113        |

# User Details DataTable Initial Data

| _ID | _OwnerID                              | Email           | Balance | Is Staff | Created On           |
|-----|---------------------------------------|-----------------|---------|----------|----------------------|
| 0   | 86bf67e3-4e54-41d7-a711-3286af00d145  | test@abv.bg     | 0       | true     | 1701577641645        |
| 1   | 35c62d76-8152-4626-8712-eeb96381bea8  | peter@abv.bg    | 0       | false    | 1701577641645        |
| 2   | 847ec027-f659-4086-8032-5173e2f9c93a  | george@abv.bg   | 0       | false    | 1701577641645        |
| 3   | 60f0cf0b-34b0-4abd-9769-8c42f830dffc  | admin@abv.bg    | 0       | true     | 1701577641645        |


# Course Files DataTable Initial Data

| _ID | _OwnerID                              | Email           | Course ID | Course File URL           | Course File Name | Attached By | Created On           |
|-----|---------------------------------------|-----------------|-----------|---------------------------|------------------|-------------|----------------------|
| 0   | 86bf67e3-4e54-41d7-a711-3286af00d145  | test@abv.bg     | 9S8F8SJS  | [https://google.bg/test](https://google.bg/test) | Test attachment  | Test        | 1701577641645        |


# Course Comments DataTable Initial Data

| _ID | _OwnerID                              | Course ID                           | Comment                                      | Author      | Author Email       | Created On           |
|-----|---------------------------------------|-------------------------------------|----------------------------------------------|-------------|--------------------|----------------------|
| 0   | 60f0cf0b-34b0-4abd-9769-8c42f830dffc  | 3564027f-adcd-4425-b2c0-1253d2386c0c  | This is the best course I have ever participated! | Vladislav   | admin@abv.bg       | 1701577641645        |


