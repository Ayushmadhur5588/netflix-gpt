# Netflix-GPT

## Overview

Welcome to Netflix-GPT, your personalized movie experience powered by GPT technology. This React app seamlessly integrates the best of Netflix with the intelligence of GPT to enhance your movie search and discovery process.

## Technologies Used

- **Create React App**: Kickstarted with the power of React for a smooth and responsive user interface.
- **TailwindCSS**: Stylishly designed with TailwindCSS, ensuring a visually appealing and modern look.

## Development Steps

### 1. Project Setup

- Created the app using Create React App.
- Configured TailwindCSS for modern styling.

### 2. Core Functionality

- Developed app header for navigation.
- Implemented routing for smooth transitions.
- Created login and signup forms with form validation.
- Used useRef hook for efficient form handling.
- Set up Firebase for user authentication.
- Deployed the app to production.

### 3. User Authentication

- Established a secure signup process.
- Implemented API for user signin.
- Integrated Redux for centralized state management.
- Enabled user signout functionality.
- Updated user profiles securely.

### 4. TMDB API Integration

- Registered the app with TMDB and obtained an access token.
- Fetched now playing movies data from TMDB API.
- Created a custom hook for managing now playing movies.
- Developed a movie slice in the Redux store for movie-related data.

### 5. Trailer Video Integration

- Fetched trailer video data to enhance the movie details page.
- Embedded YouTube videos with autoplay and mute functionality.

### 6. Styling with Tailwind CSS

- Applied Tailwind CSS classes to style the main container for an aesthetically pleasing appearance.

### 7. Secondary Container in Browse Component
- Created a secondary container within the Browse component to display categorized movie lists.

### 8. Tailwind Styling
- Utilized Tailwind CSS to enhance the visual appeal of the movie lists, ensuring an aesthetically pleasing design.

### 9. TMDB API Integration
- Implemented custom hooks to fetch movie data from The Movie Database (TMDB) API for various categories (e.g., top-rated, popular, upcoming, now playing).

### 10. Redux Store Update
- Extended the Redux store by adding new reducers (e.g., `addNowPlayingMovies`, `addPopularMovies`,`addUpcomingMovies`,`addTopRatedMovies`, etc) to handle different movie categories.

### 11. Browse Page Implementation
- Integrated the secondary container, styling, API calls, and Redux store updates to create a functional Browse page.

## Features

### Authentication
- Secure Login and Signup Forms
- Redirect to Browse Page after Authentication

### Browse Page
- Dynamic Header with Main Movie Showcase
- Background Trailer with Title and Description
- Categorized Movie Suggestions
- Curated Movie Lists

### Netflix-GPT Integration
- Smart Search Bar with GPT Technology
- Intelligent Movie Suggestions


## Project Setup

Before starting the project please add .env file and add TMDB and OPENAI KEY into it.
