const form = document.querySelector('form');
// const form = document.querySelector('form');
const btn = document.querySelector("button")
btn.addEventListener('click' , (e) =>{
 // console.log(e)
 
 const pro = document.querySelectorAll('input')[0].value;
 const qty = document.querySelectorAll('input')[1].value;
 const newPro = document.createElement('li')
//  const newSizePro = document.createElement('b')
//  newSizePro.append(pro)
 newPro.append(`${qty} `)
 newPro.append(pro)
 document.querySelector('#list').append(newPro)
 console.log(newPro)
 e.preventDefault()



} )
