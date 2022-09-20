// export const getArticles = (section) => {
//   let url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=xUoI1JmR6Bufafw2f3ZRJOQZUbAcO5L9`
export const getArticles = () => {
  let url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=xUoI1JmR6Bufafw2f3ZRJOQZUbAcO5L9'
  return fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error('Oopsies! Something went wrong 🤡')
      } else {
        return response.json()
      }
    })
}