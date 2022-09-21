import React from 'react';
import './Article.scss';

const Article = ({news}) => {
  // console.log(news)
  return (
    <>
      <h2>{news.title}</h2>
      <img className='detail-image' src={news.multimedia[0].url} alt={news.multimedia[0].caption}></img>
      <p>Copyright: {news.multimedia[0].copyright}</p>
      <p>{news.abstract}</p>
      <a href={news.url}>Click here for article</a>
      <p>{news.byline}</p>
    </>
  )
}

export default Article;