import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import placeholderImage from '../img/image-placeholder.jpg';

export default function NewsCompo() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  useEffect(() => {
    // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9cb45c816ff64e5993f4498a1564e2c1`;
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    console.log("API Key:", apiKey);

    // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    //   fetch(url)
    //   .then((response) => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       setArticles(data.articles);
    //       setLoading(false);
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //       setError(error);
    //       setLoading(false);
    //     });
    // }, []);

    // Fetch data when the component loads
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9cb45c816ff64e5993f4498a1564e2c1');
        const data = await response.json();
        setArticles(data.articles); // Assuming the API returns articles in a key called 'articles'
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching news: {error.message}</p>;
  }

  return (
    <>
      <h2>Today's Hatake News</h2>
      <div className="row g-4">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <NewsItem
                imgUrl={article.urlToImage ? article.urlToImage : placeholderImage}
                title={article.title.slice(0, 40)}
                description={typeof article.description === 'string' ? (article.description.length > 40 ? article.description.slice(0, 88) + '...' : article.description) : ''}
                newsUrl={article.url}
              />
            </div>
          ))
        ) : (
          <p>No news articles available</p>
        )}
      </div>
    </>
  );
}
