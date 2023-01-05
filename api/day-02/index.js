


console.clear();

/*
// get method.
axios
.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));
*/

/*
// post method.
axios
.post('https://jsonplaceholder.typicode.com/posts',{
  method: 'POST',
  body: JSON.stringify({
    
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
 
})
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));
*/

// update method.
/*
axios
.put('https://jsonplaceholder.typicode.com/posts/1',{
 
  body: JSON.stringify({
    id:1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
 
})
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));
*/

/*
// patch method.

axios
.patch('https://jsonplaceholder.typicode.com/posts/1',{
 
  body: JSON.stringify({
    
    body: 'baooiur',
   
  }),
 
})
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));
*/

/*
// delete method.

axios
.delete('https://jsonplaceholder.typicode.com/posts/1')
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));

*/

 //get method by function.

 const makeRequest = async (config) => {
  return await axios(config);
 };

 /*
 const getData = () =>{
  makeRequest('https://jsonplaceholder.typicode.com/posts')
  .then((res)=>console.log(res))
  .catch((err)=> console.log(err));
 };

 getData();
 */

 /*
 const createData = () =>{
  makeRequest({
    url:'https://jsonplaceholder.typicode.com/posts',
    method:'post',
    body: JSON.stringify({
     
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  })
  .then((res)=>console.log(res))
  .catch((err)=> console.log(err));
 };

 createData();
 */

 /*
 const updateData = () =>{
  makeRequest({
    url:'https://jsonplaceholder.typicode.com/posts/1',
    method:'put',
    body: JSON.stringify({
      id: 1,
      title: "dodksos",
      body: "bardoo",
      userId: 1,
    }),
  })
  .then((res)=>console.log(res.data))
  .catch((err)=> console.log(err));
 };

 updateData();
 */

 const deleteData = () =>{
  makeRequest({
    url:'https://jsonplaceholder.typicode.com/posts/1',
    method:'delete',
   
  })
  .then((res)=>console.log(res.data))
  .catch((err)=> console.log(err));
 };

 deleteData();