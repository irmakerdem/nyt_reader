export const getArticles = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=xUoI1JmR6Bufafw2f3ZRJOQZUbAcO5L9')
    .then(response => {
      if(!response.ok) {
        throw new Error('Oopsies! Something went wrong 🤡')
      } else {
        return response.json()
      }
    })
}