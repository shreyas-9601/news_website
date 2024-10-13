import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        setNews(response.data);
      } catch (err) {
        setError("Failed to fetch news. Please try again later.");
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Welcome to the News Portal</h1>
      </header>

      <main>
        <section className="news-section">
          <h2>Latest News Headlines</h2>
          {error && <p className="error">{error}</p>}
          <div className="news-grid">
            {news.length > 0 ? (
              news.map((article, index) => (
                <div key={index} className="news-card">
                  <h3>{article.title}</h3>
                  <p className="news-source">{article.source.name}</p>
                  <p className="news-date">{new Date(article.publishedAt).toLocaleDateString()}</p>
                  <a className="read-more" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
              ))
            ) : (
              <p>No news articles available at the moment.</p>
            )}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 News Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
