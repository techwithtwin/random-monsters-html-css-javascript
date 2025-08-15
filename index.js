const button = document.querySelector("button");
const loader = document.querySelector(".loader");
const container = document.querySelector(".container");

button.addEventListener("click", fetchRandomMonsters);

async function fetchRandomMonsters() {
  button.style.display = "none";

  loader.style.display = "block";

  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  let cardHtml = "";

  data.forEach((user) => {
    cardHtml += `
     <div class="card">
        <img
          src="https://robohash.org/${user.id}?set=set2&size=180x180"
          alt="Monsters"
        />
        <h2>${user.name}</h2>
        <p>${user.email}</p>
      </div>
    `;
  });

  loader.style.display = "none";

  container.innerHTML = cardHtml;
}
/*
[
  {
    id:1,
    name: "TechWithTwin",
    email: "info@techwithtwin.com"
  }
]

*/
