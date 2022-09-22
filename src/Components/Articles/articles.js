import React from 'react';
import './Articles.scss';
import { Link } from 'react-router-dom';

const Articles = ({stories}) => {
  const myArticles = stories.map(story => {
    return (
        <div key={story.title} className='all-articles'>
          <Link to={`/Article/${story.title}`}>
            <p className='title'>{story.title}</p>
          </Link>
          {!story.multimedia ? <>No image to display</> : <img className='main-image' src={story.multimedia[0].url} alt={story.multimedia[0].caption}></img>}
        </div>
    )
  })
  return (
    <div className='big-articles-container'>
      {myArticles}
    </div>
  )
}

export default Articles;