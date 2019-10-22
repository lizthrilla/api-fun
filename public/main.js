const punchlineButton = document.querySelector('button#get-joke')
const newJokeButton = document.querySelector('button#new-joke')

let punchline = ''

const setPunchline = (p) => {
  // console.log(p)
  punchline = p
}

const getJoke = () => {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      return response.json()
    })
    .then(json => {
      // console.log(json)
      document.querySelector('h1#setup').textContent = json.setup
      setPunchline(json.punchline)
    })
}

const revealPunchline = () => {
  document.querySelector('p#punchline').textContent = punchline
}

const getNewJoke = () => {
  document.querySelector('p#punchline').textContent = ''
  getJoke()
}

const main = () => {
  getJoke()

  punchlineButton.addEventListener('click', revealPunchline)
  newJokeButton.addEventListener('click', getNewJoke)
}

document.addEventListener('DOMContentLoaded', main)
