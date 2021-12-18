document.getElementById('button').addEventListener('click',() =>{
 

 //XHR Object created
 const xhr = new XMLHttpRequest();
 // console.log('Ready state : ',xhr.readyState)

 //open
 xhr.open('GET','data.txt',true);
 
//optional-- loders or spinners the loading icon while loading readyState 3 that is progress
xhr.onprogress = function(){
 console.log('Ready state : ',xhr.readyState)
 
}


//Onerror handling for something goes on wrong onloading or at request 
xhr.onerror = function(){
 console.log('Error Occured here what to do now....')

}



//Newer than onreaduy State stuff 
 xhr.onload = function() {
 console.log('Ready state : ',xhr.readyState)

  if(this.status === 200) 
  {
   // console.log('Working hree')
   // console.log(this.responseText);

   document.querySelector('#output').innerHTML = 
   `<h1>${this.responseText}</h1>`
  }
 }

 // console.log('Ready state : ',xhr.readyState)
 // xhr.onreadystatechange = function(){
 // console.log('Ready state : ',xhr.readyState)

 //   if(this.status === 200 && xhr.readyState===4) 
 //  {
 // console.log('Ready state : ',xhr.readyState)

 //   console.log(this.responseText);
 //  }
 // }

 xhr.send();








})