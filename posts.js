const posts=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>showPosts(data))
}

const showPosts=(data)=>{
    for(const it of data){
        console.log(it)
        let div=document.createElement("div")
        div.innerHTML=`<div style="display:flex;border:2px solid purple;margin:10px;padding:10px;">
        <p style="font-size:2rem">User id: ${it.userId},<br> id: ${it.id}, title: ${it.title}, <br> Description: ${it.body}</p></div>
        `
        document.getElementById("posts").appendChild(div)
    }
}