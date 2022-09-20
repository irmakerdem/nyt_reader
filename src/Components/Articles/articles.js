import React from 'react';
import './Articles.scss';
import { Link } from 'react-router-dom';

const Articles = ({stories}) => {
  const myArticles = stories.map(story => {
    return (
      <section key={story.created_date}>
        <Link to={story.title}>
          <h2>{story.title}</h2>
        </Link>
        <img className='main-image' src={story.multimedia[0].url} alt={story.multimedia[0].caption}></img>
      </section>
    )
  })
  return (
    <>
      <h2>{myArticles}</h2>
    </>
  )
}

export default Articles;