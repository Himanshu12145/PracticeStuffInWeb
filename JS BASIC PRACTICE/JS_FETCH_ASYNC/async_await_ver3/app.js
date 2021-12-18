



const http = new EasyHTTP

//Getting the users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// console.log(users)

//USER DATA FETCHING
const data = {
 name:'John Darwik',
 username:'johndarwik',
 email:'johndarwik@12167@gmail.com'
} 

//Creating the post 
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => console.log(err))


//Updating POST
// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data => console.log(data))
// .catch(err => console.log(err))


//DELETE USERS
http.delete('https://jsonplaceholder.typicode.com/users/4',data)
.then(data => console.log(data))
.catch(err => console.log(err))