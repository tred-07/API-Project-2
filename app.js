const loadData2 = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const loadUsers=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => displayUsers(json));
}

const displayUsers=(data)=>{
    console(data)
}