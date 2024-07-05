# React + Vite = Dockerized

This repository contains a React application built with Vite and containerized using Docker.

## Prerequisites

- Docker installed on your machine

## Installation and Running

Follow these steps to build and run the Docker container for your React application:

1. **Build the Docker image**:
    ```sh
    docker build -t react:portfolio .
    ```

2. **Run the Docker container**:
    ```sh
    docker run -p 5173:5173 react:portfolio
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
![image](https://github.com/amaan-igs/Docker/assets/172314900/f4430510-6a91-448c-b216-fcf75c8e70f7)

![image](https://github.com/amaan-igs/Docker/assets/172314900/2f9096fd-b296-4d5d-9f0c-24c65908c28e)

