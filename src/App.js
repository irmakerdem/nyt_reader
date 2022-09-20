import './App.scss';
import React, { useState, useEffect } from 'react';
import Nav from './Components/Nav/Nav';
import Article from './Components/Article/Article';
import Articles from './Components/Articles/Articles';
import Dropdown from './Components/Dropdown/Dropdown';
import { getArticles } from './apiCalls';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getArticles()
    // console.log("18", data.results[0].title)
    .then(data => {
      // console.log("20", data.results)
      setStories(data.results)
    })
    .catch(err => console.log(err))
  }, [])

  // arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, and world

  // const getDetails = () => {
  //   let article = stories.find(story => {
  //     return story.created_date === match.params.id
  //   })

  //   return article
  // }

  return (
    <main className='app'>
      <Nav />
      <Switch>
        <Route exact path='/' render={() => stories.length ? (<Articles stories={stories} />) : (<h2>Loading...</h2>)} />
        
        <Route path="/:title" render={({ match }) => {
				  const articleToRender = stories.find(story => {
            return story.title === match.params.title
          })
					return (
            <Article news={articleToRender}/>
					)
				}}
			  />
        
        {/* <Route path='/details/:id' render={() => stories.length ? (<Article stories={stories} />) : (<h2>Loading...</h2>)} /> */}
        <Route path='*' render={() => <h2>Something went wrong 🤡</h2>} />
      </Switch>
    </main>
  );
}

export default App;
