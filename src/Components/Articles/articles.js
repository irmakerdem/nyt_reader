import React from 'react';
import './Articles.scss';
import { Link } from 'react-router-dom';

const Articles = ({stories}) => {
  console.log(stories)
  const myArticles = stories.map(story => {
    return (
      <section key={story.created_date}>
        {/* <Link to={`/Article/${story.title}`}> */}
        <Link to={story.created_date}>
          <h2>{story.title}</h2>
        </Link>
        {!story.multimedia ? <></>: <img className='main-image' src={story.multimedia[0].url} alt={story.multimedia[0].caption}></img>}
      </section>
    )
  })
  return (
    <>
      {!myArticles ? <h2>There are no top stories for this topic.</h2> : <h2>{myArticles}</h2>}
    </>
  )
}

export default Articles;