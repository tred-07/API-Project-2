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
    for(const it of data){
        console.log(it);
        
        const p=document.createElement('p')
        p.innerHTML=`<p style="border:5px solid purple;padding:10px;margin:10px;text-align:center">Name: ${it.name}, Phone: ${it.phone}, Email: ${it.email}</p>`
        document.getElementById("email").appendChild(p)   
        
    }
}