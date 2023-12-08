let currentID = localStorage.getItem("currID");
let currentName = localStorage.getItem("currName");

function init() {
    currentID = 0;
}
const getUsers = async () => {
    let posts = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json)
    .then(user => populateUsers(posts))
}

let populateUsers = (obj) => {
    console.log(obj);
    const section = document.querySelector("section");
    const users = obj;

    for (const user of users)
    {
        const nameContainer = document.createElement("div");
        nameContainer.classList.add("displaycard");

        const handle = document.createElement("div");
        handle.classList.add("handle");

        const displayname = document.createElement("a");
        displayname.textContent = user.name;
        displayname.href = "page.html"

    }
}