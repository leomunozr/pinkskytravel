# Pink Sky Travel

This is a Next.js 14+ project for Pink Sky Travel agency. It uses Sanity.io as a Headless CMS and Tailwind CSS for styling.

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Environment Variables:**
    Create a `.env.local` file in the root directory and add your Sanity credentials:
    ```bash
    SANITY_PROJECT_ID="tu_project_id"
    SANITY_DATASET="production"
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```

4.  **Open Sanity Studio:**
    Visit `http://localhost:3000/studio` to manage content.

## Deployment on Netlify

This project is configured for easy deployment on Netlify.

1.  **Connect to Git:**
    Push this repository to GitHub/GitLab/Bitbucket and connect it in the Netlify dashboard.

2.  **Build Settings:**
    Netlify should automatically detect the settings from `netlify.toml`:
    *   **Build Command:** `npm run build`
    *   **Publish Directory:** `.next`

3.  **Environment Variables (Critical):**
    In the Netlify Dashboard, go to **Site configuration > Environment variables** and add the following:

    *   `SANITY_PROJECT_ID`: Your Sanity Project ID.
    *   `SANITY_DATASET`: Your Dataset name (usually `production`).

    *Without these variables, the site will not be able to fetch content from the CMS.*

## Project Structure

*   `src/app`: App Router pages.
*   `src/components`: UI components (Hero, Navbar, BespokeForm, etc).
*   `src/sanity`: Sanity configuration, client, and schemas.
*   `sanity.config.ts`: Sanity Studio configuration.
