const colorIt = require('colors')
const jokes = require('give-me-a-joke')
const cowsay = require('cowsay')
// console.dir(jokes)
jokes.getRandomCNJoke((joke) => console.log(joke.underline.green)
)
jokes.getRandomDadJoke((joke) => console.log(joke.underline.red))


