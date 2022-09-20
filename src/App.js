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
    .then(data => {
      setStories(data.results)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <main className='app'>
      <Nav />
      <Switch>
        <Route exact path='/' render={() => stories.length ? (<Articles stories={stories} /> && <Dropdown />) : (<h2>Loading...</h2>)} />
        <Route path='/:title' render={({ match }) => {
				  const articleToRender = stories.find(story => {
            return story.title === match.params.title
          })
					return (
            <Article news={articleToRender}/>
					)
				}}
			  />
        <Route path='*' render={() => <h2>Something went wrong 🤡</h2>} />
      </Switch>
    </main>
  );
}

export default App;
