# NYT Reader
![home view](https://user-images.githubusercontent.com/90080658/191868217-1e557512-ffb1-4812-b65d-04bd8ac0ee62.png)

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Deployment](#deployment)
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

### Technologies
- JavaScript
- React
- React Router
- HTML
- SASS
- API fetch
- Figma
- GitHub Projects
- Vercel

### Deployment
View app [here](https://nyt-reader-nine.vercel.app)!

### Set Up
1. Clone this [repository](https://github.com/irmakerdem/nyt_reader).
2. `cd` into the directory.
3. Run `npm install`.
4. Start the server by running `npm start` and view at http://localhost:8080/.
5. Enter `control + c` to stop the server at any time.

### Features
- User sees a loading message during fetch call
![loading](https://user-images.githubusercontent.com/90080658/192016354-aed4ba2b-bb6b-4999-bfaa-968af50e6e5a.png)
- User can view top stories of the 'home' topic on page load
- User can use dropdown to choose topic of interest
![dropdown](https://user-images.githubusercontent.com/90080658/191868077-cecadf1e-770a-493e-b1e4-13df6ad70681.png)
- User can click article title to view a detailed page of the article including an external link to NYT
![article detail](https://user-images.githubusercontent.com/90080658/191868147-6670ec96-ac21-41ce-aedf-8fffa1b08704.png)

### Future Features
- URL changes based on selected topic
- Dropdown is hidden on detail view
- Page refresh functionality on detail view
- Sorting functionality to filter from most recent to oldest articles
- Enhanced styling for desktop users
- Add 'go home' button from wireframe
- Deployment

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
