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
