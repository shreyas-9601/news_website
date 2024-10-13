const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import the cors package

const app = express();
const PORT = 5000;

// Use CORS middleware
app.use(cors());

// Your News API key
const API_KEY = "c648e26c7bc74d3ab104464e56272a98";
let cachedData = null;
let cacheTime = null;

// Helper function to fetch news from News API
const fetchNews = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

// Endpoint to fetch news headlines
app.get("/api/news", async (req, res) => {
  const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes
  const now = new Date();

  if (cachedData && cacheTime && now - cacheTime < CACHE_DURATION) {
    console.log("Serving from cache...");
    return res.json(cachedData);
  }

  try {
    const news = await fetchNews();
    cachedData = news;
    cacheTime = new Date();
    console.log("Serving fresh data...");
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch news." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
