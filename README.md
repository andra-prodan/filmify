# Filmify

## Overview

Filmify is a sleek React application designed to showcase top movies based on IMDb ratings, allowing users to explore, favorite, and visualize movie data effortlessly.

## Features

- **Top 20 Tab**
  - Explore a curated list of the top 20 movies ranked by IMDb rating.
  - Each movie card includes:
    - Movie poster
    - Year of release
    - List of directors
    - Duration of the movie
    - Favorite button to save movies you love.

- **Pie Chart Tab**
  - Visualize the distribution of top movies by release year with an interactive pie chart.
  - Hover over segments to see the number of movies released in each year.

- **Favorites Tab**
  - Manage your favorite movies in one place.
  - Easily remove movies from your favorites list with a click.
  - Requires login to access, ensuring privacy and personalized experience.

- **Additional Features**
  - **User Authentication:** Secure login/logout functionality.
  - **Loading Indicator:** Animated spinner for seamless data loading.
  - **Responsive Design:** Optimized for various screen sizes for a smooth user experience.
  - **Local Storage:** Persists favorite movies locally, ensuring preferences are saved.

## Technologies Used

- React
- TypeScript
- Redux (state management)
- React Router (navigation)
- Tailwind CSS (styling)
- Yup and Formik (form validation)
- ESLint and Prettier (code quality)

## How to Start

### Clone the repository:

```bash
git clone <repository-url>
cd filmify
```

### Install dependencies:

```bash
npm install
```

### Run the application:

```bash
npm run start
```

Open http://localhost:3000 to view Filmify in your browser.

## MyAPIFilms API Integration

To integrate the token from [MyAPIFilms](https://www.myapifilms.com/token.do) into your application, follow these steps:

### Obtain the API Token

Visit [MyAPIFilms](https://www.myapifilms.com/token.do) to generate your API token.

### Add the Token to `.env.local`

1. In the root directory of your project, create a file named `.env.local` if it doesn't already exist.
2. Open the `.env.local` file and add the following line, replacing `YOUR_API_TOKEN` with the token you obtained in the previous step:

    ```plaintext
    REACT_APP_FILMS_API_TOKEN=YOUR_API_TOKEN
    ```

#### Example

Here is an example of what the `.env.local` file should look like:

```plaintext
REACT_APP_FILMS_API_TOKEN=abcdef123456
```

## Test Login Credentials

For testing purposes, you can use the following credentials to log in:

- **Username:** user
- **Password:** password

Please note that the login functionality is implemented using a dummy API for testing purposes.

### Notes

- Dummy data is provided to simulate movie listings when API requests are limited.

