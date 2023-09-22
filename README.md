# Movie Search App

![App Screenshot](![op](https://github.com/ankitaludbe/Movie-Searching-App-using-React/assets/86849431/812f5302-0ae8-4727-9e4e-ee15ccd05f6b)
)

## Description

The Movie Search App is a user-friendly web application built using React that allows users to search for information about movies. 



## Getting Started

1. Clone this repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Create a new react project using vite js
   ```npm create vite@latest```
4. Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files
   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
5. Add the paths to all of your template files in your tailwind.config.js file.
  ```
  export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 
```
6. Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
7.  Run your build process with npm run dev.
    ```npm run dev```

## Technologies Used

- React
- JavaScript
- CSS
- [Movie Database API](https://www.omdbapi.com/)

