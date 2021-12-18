
class EasyHTTP{
 //Making HTTP get request 
 get(url){
  return new Promise((resolve,reject) => {
   fetch(url)
   .then(res => res.json())
   .then(data => resolve(data))
   .catch(err => reject(err));
  })
 }

 //making HTTPS posts request 
 post(url,data){

  return new Promise((resolve,reject) => {
   fetch(url,{
    method:'POST',
    headers:{
     'Content-type':'application/json'
    },
    body:JSON.stringify(data)
   })
   .then(res => res.json())
   .then(data => resolve(data))
   .catch(err => reject(err));
  })

 }

 //PUT Request 
 put(url,data){
  return new Promise((resolve,reject) => {
   fetch(url,{
    method:'PUT',
    headers:{
     'Content-type':'application/json'
    },
    body:JSON.stringify(data)
   })
   .then(res => res.json())
   .then(data => resolve(data))
   .catch(err => reject(err));
  })

 }

 //DELETE Request here 
  delete(url){
  return new Promise((resolve,reject) => {
   fetch(url,{
    method:'PUT',
    headers:{
     'Content-type':'application/json'
    }
   })
   .then(res => res.json())
   .then(() => resolve('Deleted....'))
   .catch(err => reject(err));
  })

 }

}