const http = new easyHTTP;
//GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts){
//  if(err){
//   console.log(err);
//   return;
//  }
//  console.log(posts)

// })

//Creating data
const data = {
 title:'Custom Post',
 body : 'This is a custom post by me ',
 // id:'109'
};

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
//  if(err){
//   console.log(err)
//   return;
//  }
//  console.log(post)

// })

// Updating the post 
// http.put('https://jsonplaceholder.typicode.com/posts/5',data,function(err,post){
//  if(err){
//   console.log(err);
//   return;
//  }
//  console.log(post);
// })

//Deleting the stuff
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
 if(err){
  console.log(err);
  return;
 }
 console.log(response);
})