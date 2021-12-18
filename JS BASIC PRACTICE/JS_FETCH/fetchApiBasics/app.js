 
//TEXT  
 document.querySelector('#button1').addEventListener('click',()=>{

  fetch('test.txt')
  .then((res) =>{ return res.text();})
  .then((data) =>{ 
   // console.log(data);
   document.getElementById('output').innerHTML = data;
  })
  .catch((err) =>{ console.log(err) })
 })


 //JSON
 document.querySelector('#button2').addEventListener('click',() =>{
  
  fetch('posts.json')
  .then((res) =>{ return res.json();})
  .then((data) =>{ 
   console.log(data);
   let output=''
   data.forEach((post) => {
   output += `<li>${post.title}</li>` 
   });
   document.getElementById('output').innerHTML = output ;
  })
  .catch((err) =>{ console.log(err) })
  
 })
 
 //EXT API FETCH
 document.getElementById('button3').addEventListener('click',() =>{
  fetch('https://api.github.com/users')
  .then((res) =>  res.json())
  .then((data) =>{ 
   console.log(data);
   let output=''
   data.forEach((user) => {
   output += `<li>${user.login}</li> 
              <li>${user.node_id}</li>` 
   });
   document.getElementById('output').innerHTML = output ;
  })
  .catch(err => console.log(err) )
  
 })