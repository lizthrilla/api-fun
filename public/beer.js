const getRandomBeer = () => {
  fetch('https://api.punkapi.com/v2/beers/random')
    .then(beer => {
      return beer.json()
    })
    .then(beerJsonArray => {
      document.querySelector('h2.beer-name').textContent = beerJsonArray.map(beer => beer.name)
      document.querySelector('.tagline').textContent = beerJsonArray.map(beer => beer.tagline)
      document.querySelector('.description').textContent = beerJsonArray.map(beer => beer.description)
    })
}

const beer = () => {
  console.log('beer is loaded')
  getRandomBeer()
}

document.addEventListener('DOMContentLoaded', beer)
