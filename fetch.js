const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');



const getData = () => {

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( (response) => {
        return response.json()
    })
    .then( (data) => {
        console.log(data)
    })

};

const sendData = () => {};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
