import { arr } from './json.js';
const render = (arr) => {
    const box = document.querySelector(".box");
    box.innerHTML = arr.map(item => `
<div class="users_block">
<h1>${item.name}<h1>
<p>Email: ${item.email}</p>
        <p>Username: ${item.username}</p>
        <p>Phone: ${item.phone}</p>
        <p>Website: <a href='http://${item.website}'>${item.website}</a></p>
        <p>Company: ${item.company.name}</p>
        <p>CatchPhrase: ${item.company.catchPhrase}</p>
        <p>BS: ${item.company.bs}</p>
        <p>Address:</p>
        <ul>
            <li>Street: ${item.address.street}</li>
            <li>Suite: ${item.address.suite}</li>
            <li>City: ${item.address.city}</li>
            <li>Zipcode: ${item.address.zipcode}</li>
            <li>Geo: Lat ${item.address.geo.lat}, Lng ${item.address.geo.lng}</li>
        </ul>
        <strong>ID: ${item.id}</strong>
</div>
    `).join('');
}
render(arr);