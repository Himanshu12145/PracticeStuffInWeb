const franc  = require('franc')
const colorIt  = require('colors')
const langs  = require('langs')
const enteredCode = process.argv[2]

const inputCode =  franc(enteredCode)
if (inputCode === 'und') {

 console.log('Sorry cannot find it out '.red)
 console.log('RE-Entering may fix this  '.underline.green)
 
 
}else{
const changedToLang = langs.where('3', inputCode)
console.log(`${changedToLang.name} is supposed to be the language here.... `.italic.bgRed.white)
}