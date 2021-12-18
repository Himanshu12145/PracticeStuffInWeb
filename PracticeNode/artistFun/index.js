const figlet = require('figlet')
const colorIt = require('colors')

figlet('Himanshu Here',(err, data) => {
 if (err) {
  console.log('Something went wrong...')
  console.dir(err)
  return ;
 }
 console.log(data.green)
}) 