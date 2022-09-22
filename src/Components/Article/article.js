import React from 'react';
import './Article.scss';

const Article = ({news}) => {
  return (
    <section className='article-section'>
      <h2>{news.title}</h2>
      {!news.multimedia ? <>No image to display</> : <img className='detail-image' src={news.multimedia[0].url} alt={news.multimedia[0].caption}></img>}
      <br></br>
      <em>Copyright: {news.multimedia[0].copyright}</em>
      <p>{news.abstract}</p>
      <a href={news.url} className='click'>Click here for article</a>
      <p>{news.byline}</p>
    </section>
  )
}

export default Article;