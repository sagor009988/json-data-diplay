function getUsersData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>display(data))
}

function display(data){

    for(let user of data){
        console.log(user.address.street);
        const ul=document.getElementById('ul-list');
        const li=document.createElement('li')
        li.innerText=user.address.street;
        ul.appendChild(li)
    }

  
}