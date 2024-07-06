# React + Vite = Dockerized

This repository contains a React application built with Vite and containerized using Docker.

## Prerequisites

- Docker installed on your machine

## Installation and Running

Follow these steps to build and run the Docker container for your React application:

1. **Build the Docker image**:
    ```sh
    docker build -t react:dock .
    ```

2. **Run the Docker container**:
    ```sh
    docker run -p 5173:5173 react:dock
    ```

## Project Structure

- `index.html` - Main HTML file
- `src/` - Source directory containing React components and other assets
- `public/` - Public directory for static assets
- `package.json` - Project metadata and dependencies

## Development

To develop and test the application locally without Docker, use the following commands:

1. **Install dependencies**:
    ```sh
    npm install
    ```

2. **Run the development server**:
    ```sh
    npm run dev
    ```
## Project Image
![image](https://github.com/amaan-igs/Docker/assets/172314900/b58ff1f3-3534-4674-9528-d39bc08c8721)
![image](https://github.com/amaan-igs/Docker/assets/172314900/c141f643-05f9-430b-861f-1be6fdf86cfb)


