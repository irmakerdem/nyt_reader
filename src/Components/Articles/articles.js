import React from 'react';
import './articles.scss';

const Articles = ({stories}) => {
  const myArticles = stories.map(story => {
    return (
      <section key={story.created_date}>
        <h2>{story.title}</h2>
      </section>
    )
  })
  return (
    <>
      <h1>{myArticles}</h1>
    </>
  )
}

export default Articles;