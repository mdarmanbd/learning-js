

console.clear();
/*
// get method.
fetch('https://jsonplaceholder.typicode.com/posts/101')  
.then((res)=> {
    if(!res.ok){
        const message = `error : ${res.status}`;
        throw new Error (message);
    }
    return res.json();   // convrt the json.
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
*/

// creat method.

/*
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
   
})
.then((response) => response.json())
.then((json) => console.log(json));

*/


/*
// update done by a put method.

fetch('https://jsonplaceholder.typicode.com/posts/3', {
  method: 'PUT',
  body: JSON.stringify({
    id: 3,
    title: 'foogoo',
    body: 'bartifo',
    userId: 3,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
*/
/*
  // delete method

  fetch('https://jsonplaceholder.typicode.com/posts/3', {
    method: 'DELETE',

  })
    .then((response) => response.json())
    .then((json) => console.log(json));
*/

const makeRequest = async (url,config ) =>{
    const res = await fetch (url,config);  
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
};

/*
// get method.
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((res) => console.log(res))
    .catch((err)=>console.log(err));
};

getData();
*/
/*
// send method
const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    
    .then((res) => console.log(res))
    .catch((err)=>console.log(err));
};

sendData();
*/
/*
// update method
const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',
    {
        method: 'PUT',  
        body: JSON.stringify({
        title: 'fooGOO',
        body: 'barHOO',
        userId: 1,
    }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    
    .then((res) => console.log(res))
    .catch((err)=>console.log(err));
};

updateData();
*/

/*
// PATCH method
const patchData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',
    {
        method: 'PATCH',  
        body: JSON.stringify({
        title: 'fooJOO',
    }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    
    .then((res) => console.log(res))
    .catch((err)=>console.log(err));
};

patchData();
*/
// DELETE METHOD

const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',
    {method: 'DELETE'}) 
    .then((res) => console.log(res))
    .catch((err)=>console.log(err));
};

deleteData();
