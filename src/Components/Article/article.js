import React from 'react';
import './Article.scss';

const Article = ({news}) => {
  return (
    <>
      <h2>{news.title}</h2>
      <img className='detail-image' src={news.multimedia[0].url} alt={news.multimedia[0].caption}></img>
      <p>Copyright: {news.multimedia[0].copyright}</p>
      <p>{news.abstract}</p>
      <p>Article: {news.url}</p>
      <p>{news.byline}</p>
    </>
  )
}

export default Article;