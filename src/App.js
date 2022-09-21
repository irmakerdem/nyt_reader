import './App.scss';
import React, { useState, useEffect } from 'react';
import Nav from './Components/Nav/Nav';
import Article from './Components/Article/Article';
import Articles from './Components/Articles/Articles';
// import Dropdown from './Components/Dropdown/Dropdown';
import { getArticles } from './apiCalls';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getArticles('home')
    .then(data => {
      setStories(data.results)
    })
    .catch(err => console.log(err))
  }, [])

  const handleChange = event => {
    setStories([])
    getArticles(event.target.value)
    .then(data => {
      console.log(data)
      setStories(data.results)
      // console.log(stories)
    })
  }
  
  return (
    <main className='app'>
      <Nav />
      <form>
        <select onChange={(event) => handleChange(event)}>
					<option value='choose'>Choose a Topic:</option>
          <option value='arts'>Arts</option>
					<option value='automobiles'>Automobiles</option>
					<option value='books'>Books</option>
					<option value='business'>Business</option>
					<option value='fashion'>Fashion</option>
					<option value='food'>Food</option>
					<option value='health'>Health</option>
					<option value='home'>Home</option>
					<option value='insider'>Insider</option>
					<option value='magazine'>Magazine</option>
					<option value='movies'>Movies</option>
					<option value='nyregion'>NY Region</option>
					<option value='obituaries'>Obituaries</option>
					<option value='opinion'>Opinion</option>
					<option value='politics'>Politics</option>
					<option value='realestate'>Real Estate</option>
					<option value='science'>Science</option>
					<option value='sports'>Sports</option>
					<option value='sundayreview'>Sunday Review</option>
					<option value='technology'>Technology</option>
					<option value='theater'>Theater</option>
					<option value='t-magazine'>T-Magazine</option>
					<option value='travel'>Travel</option>
					<option value='upshot'>Upshot</option>
					<option value='us'>U.S.</option>
					<option value='world'>World</option>
				</select>
			</form> 
      <Switch>
        <Route exact path='/' render={() => stories.length ? (<Articles stories={stories} />) : (<h2>Loading...</h2>) } />
        <Route path='/Article/:title' render={({ match }) => {
				  const articleToRender = stories.find(story => {
            if (story.title === match.params.title) {
              return story
            }
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
