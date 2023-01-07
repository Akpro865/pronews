/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.jsx",
    "./src/components/Header.jsx",
    "./src/components/Top.jsx",
    "./src/components/CategoryCard.jsx",
    "./src/components/CategoryNews.jsx",
    "./src/components/TopBar.jsx",
    "./src/components/SearchBar.jsx",
    "./src/components/CategoryTop.jsx",
    "./src/components/CategoryIcon.jsx",
    "./src/screen/TopNews.jsx",    
    "./src/screen/ForYou.jsx",
    "./src/screen/Categories.jsx",
    "./src/screen/Home.jsx",
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "var(--text-secondary)",
        "background-color-behind": "var(--background-color-behind)",
        "background-color-card": "var(--background-color-card)",
        "box-shadow": "var(--box-shadow)",
        "background-color-input": "var(--background-color-input)",
        "background-border": "var(--background-border)",
      },
    },
  },
  plugins: [],
}
