let currentID = localStorage.getItem("currID");
let currentName = localStorage.getItem("currName");

function init() {
    currentID = 0;
}
const getUsers = async () => {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => populateUsers(user))
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

        const displayName = document.createElement("a");
        displayName.textContent = user.name;
        displayName.href = "page.html";
        displayName.classList.add("displayname");

        const username = document.createElement("p");
        username.textContent = `@?{user.username}`;
        username.classList.add("info");

        const email = document.createElement("p");
        email.textContent = `Email : ${user.email}`;
        email.classList.add("info");

        const address = document.createElement("p");
        address.textContent = `Street: ${user.address.street} Suite: ${user.address.suite} City: ${user.address.city} Zipcode: ${user.address.zipcode} Geo: ${user.address.geo.lat} ${user.address.geo.lng}`;
        address.classList.add("info");

        const phone = document.createElement("p");
        phone.textContent = `Phone number: ${user.phone}`;
        phone.classList.add("info");

        const website = document.createElement("p");
        website.textContent = `Website: ${user.website}`;
        website.classList.add("info");

        const company = document.createElement("p");
        company.textContent = `Company: ${user.company.name} Catchphrase: ${user.company.catchPhrase} bs: ${user.company.bs}`;

        // nameContainer.appendChild(displayName);
        // nameContainer.appendChild(username);
        // nameContainer.appendChild(email);
        // nameContainer.appendChild(address);
        // nameContainer.appendChild(phone);
        // nameContainer.appendChild(website);
        // nameContainer.appendChild(company);
        // section.appendChild(nameContainer);

        section.appendChild(displayName);
        section.appendChild(username);
        section.appendChild(email);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(website);
        section.appendChild(company);
    }

    // const getPosts = () => {
    //     let posts = fetch(`https://jsonplaceholder.typicode.com/posts`)
    //     .then (response => response.json)
    //     .then(post => populatePosts(post))
    // }

    // const populatePosts = (obj) => {
    //     const section = document.getElementById('postSection');
    //     const posts = obj;
    //     posts.map()
    // }
}


