
class EasyHTTP{
 //Making HTTP get request 
 async get(url){
  const response  =await fetch(url)
  // const resData = await response.json()
  return await (await fetch(url)).json();
  // return resData;

 }

 //making HTTPS posts request 
 async post(url,data){


    
   const response = await fetch(url,{
    method:'POST',
    headers:{
     'Content-type':'application/json'
    },
    body:JSON.stringify(data)
   })

   // .then(res => res.json())
   // .then(data => resolve(data))
   // .catch(err => reject(err));

   //instead of using the promises and the two times of then + catch we use async await to return 
   return await response.json()


 }

 //PUT Request 
 async put(url,data){
 
   const response = await fetch(url,{
    method:'PUT',
    headers:{
     'Content-type':'application/json'
    },
    body:JSON.stringify(data)
   })
   // .then(res => res.json())
   // .then(data => resolve(data))
   // .catch(err => reject(err));


   return await response.json()


 }

 //DELETE Request here 
  async delete(url){

   const response = await fetch(url,{
    method:'PUT',
    headers:{
     'Content-type':'application/json'
    }
   })
   // .then(res => res.json())
   // .then(() => resolve('Deleted....'))
   // .catch(err => reject(err));
  return await 'Resource deleted //.....';

 }

}