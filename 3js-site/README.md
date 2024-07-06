# 3D Three.js Website - Dockerized

This project is a Dockerized React application that uses Three.js for 3D graphics, along with other libraries such as React Three Fiber, React Three Drei, Email JS, Vite, and Tailwind CSS.

## ⚙️ Tech Stack

- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Email JS
- Vite
- Tailwind CSS

## Shell Commands to Execute Container

### Build the Docker Image

```sh
docker build -t react:threejs .
```
### Run the Docker Container

```sh
docker run -p 5173:5173 react:threejs
```

## Local Installation Without Docker

### Install Dependencies

Install the project dependencies using npm:

```sh
npm install
```
### Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

```sh
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```
Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the EmailJS website.

## Running the Project

```sh
npm run dev
```

## Project Overview
![image](https://github.com/amaan-igs/Docker/assets/172314900/74e19e31-ab5e-455b-a3ff-1859a2946dba)
![image](https://github.com/amaan-igs/Docker/assets/172314900/66da5113-d2d9-47fd-992d-195eee191478)
![image](https://github.com/amaan-igs/Docker/assets/172314900/227582b7-801d-437e-afa1-9d54e37eed2e)

