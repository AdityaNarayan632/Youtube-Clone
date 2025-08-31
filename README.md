# YouTube Clone

A modern YouTube clone built with React, Redux Toolkit, and Vite. This project demonstrates fetching, displaying, and interacting with YouTube video data using the YouTube Data API v3.

## Features

- Home page with infinite scroll and video cards
- Search functionality for videos
- Watch page with embedded YouTube player
- Sidebar navigation
- Video details and recommended videos
- Responsive design
- Loading spinners and error handling

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd youtubeclone
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up your YouTube Data API key:**
   - Create a `.env` file in the root directory.
   - Add your API key:
     ```env
     VITE_REACT_API_KEY=your_youtube_api_key_here
     ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```
5. **Build for production:**
   ```sh
   npm run build
   ```

## Usage

- Browse videos on the home page.
- Use the search bar to find videos.
- Click a video thumbnail to watch and see details/recommendations.
- Use the sidebar for navigation.

## Customization

- Update styles in `src/App.css` and `src/index.css`.
- Add new features or pages in `src/pages/` and `src/features/youtube/`.
- Extend Redux logic in `src/store/`.

## Contact

For questions, feedback, or collaboration:

- **Email:** adityahu1103@gmail.com
- **GitHub:**: https://github.com/AdityaNarayan632
- **LinkedIn:**: www.linkedin.com/in/aditya-narayan-a68236326

---

Feel free to fork, contribute, or reach out for support!
