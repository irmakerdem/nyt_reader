# NYT Reader

## Table of Contents
- [Introduction](#introduction)
- [Deployment](#deployment)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Features](#features)
- [Future Features](#future-features)
- [Reflection](#reflection)
- [Organizational Resources](#organizational-resources)
- [Contributors](#contributors)
- [Project Specifications](#project-specifications)

### Introduction
NYT Reader is a news reader app of the top stories from the New York Times (NYT) 📰. It updates daily based on how frequently the API is updated so you can get REAL top stories! 🎩

This app fetches data from [The NYT Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview).

### Deployment
Project can be viewed [here]().

### Technologies
- JavaScript
- React
- React Router
- HTML
- SASS
- API fetch
- Figma
- GitHub Projects

### Set Up
1. Clone this [repository](https://github.com/irmakerdem/nyt_reader).
2. `cd` into the directory.
3. Run `npm install`.
4. Start the server by running `npm start` and view at http://localhost:8080/.
5. Enter `control + c` to stop the server at any time.

### Features
![Breaking Bad gif](https://media.giphy.com/media/tFRq2uoB0glJ4XpTPd/giphy-downsized-large.gif)

- User can view top stories of the 'home' topic on page load
- User can use dropdown to choose topic of interest
- User can click article title to view a detailed page of the article including an external link to NYT

### Future Features
- URL changes based on selected topic
- Dropdown is hidden on detail view
- Page refresh functionality on detail view
- Sorting functionality to filter from most recent to oldest articles
- Enhanced styling for desktop users

### Reflection
- The filtering functionality using either the `title` property or `created_date` were considered.
- Running Lighthouse accessibility regardless of ARIA-tags proved to be at 100%.
- If I had more time on this project, I would implement the following:
  - End-to-end testing for the DOM
  - An env file for extra security for API key
  - Dynamically render dropdown topics via array instead of hard-coded options
  - Enhance modularity of app with a HomeView, DetailView, Dropdown components

### Organizational Resources
- [Figma](https://www.figma.com/file/uGW24Re7pa9mSMlTnkpDGR/Breaking-Bad?node-id=0%3A1) for wireframe
- [GitHub Projects](https://github.com/users/irmakerdem/projects/3/views/1?layout=board) for Kanban board

### Contributors
- [Irmak Erdem](https://www.linkedin.com/in/irmakerdem/)

### Project Specifications
- Project specs can be found [here](https://mod4.turing.edu/projects/take_home/take_home_fe)
