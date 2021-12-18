const text = document.querySelector('h1')
const btn = document.querySelector('button')
function randColorGen(){
 var g= Math.floor(Math.random() * 256)
 var b= Math.floor(Math.random() * 256)
 var r= Math.floor(Math.random() * 256)
 if(r<=100 && g<=100 && b<100)
 {
  text.style.color = 'white'
  // console.log('white')
 return `rgb(${r},${g},${b})`

 }
  text.style.color = 'black'
 
 return `rgb(${r},${g},${b})`
}
btn.addEventListener('click',() => {
 const color = randColorGen()
document.body.style.background = color  
 text.innerText = color

})