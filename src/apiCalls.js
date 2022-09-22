export const getArticles = (topic) => {
  let url = `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=xUoI1JmR6Bufafw2f3ZRJOQZUbAcO5L9`
  return fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error('Oopsies! Something went wrong 🤡')
      } else {
        return response.json()
      }
    })
}