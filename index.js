console.log("index.js");
const loadUsers2 = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers2(data));
};


const displayUsers2=(data)=>{
    console.log(data)
}