import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import placeholderImage from '../img/image-placeholder.jpg';
export default function NewsCompo() {


  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9cb45c816ff64e5993f4498a1564e2c1';

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error:', error));
  }, []);


  return (
    <>
      <h2>Today's Hatake News</h2>
      <div className="row g-4">
        { articles.length > 0 ? (
        articles.map((article, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
            <NewsItem imgUrl={ article.urlToImage ? article.urlToImage : placeholderImage } title={article.title.slice(0,40)} description={typeof article.description === 'string' ? (article.description.length > 40 ? article.description.slice(0, 88) + '...' : article.description) : ''} newsUrl={article.id} />
          </div>

        ))
      ) : (
        <p>Loading...</p>
      )
      }
      </div>
    </>
  )
}
