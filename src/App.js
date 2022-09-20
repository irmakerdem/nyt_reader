import './App.scss';
import React, { useState, useEffect } from 'react';
import Nav from './Components/Nav/nav';
import Article from './Components/Article/article';
import Articles from './Components/Articles/articles';
import Dropdown from './Components/Dropdown/dropdown';
import { getArticles } from './apiCalls';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getArticles()
    // console.log("18", data.results[0].title)
    .then(data => {
      console.log("20", data.results)
      setStories(data.results)
    })
    .catch(err => console.log(err))
  }, [])

  // arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, and world

  return (
    <main className='app'>
      <Nav />
      <Switch>
        <Route exact path='/' render={() => stories.length ? (<Articles stories={stories} />) : (<h2>Loading...</h2>)} />
        <Route path='/details/:id' render={() => stories.length ? (<Article stories={stories} />) : (<h2>Loading...</h2>)} />
        <Route path='*' render={() => <h2>Something went wrong 🤡</h2>} />
      </Switch>
    </main>
  );
}

export default App;
