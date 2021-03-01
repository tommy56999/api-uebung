let button = document.querySelector("#newDog");


button.addEventListener("click", getNewDog);

async function getNewDog(){
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);

    const post = await response.json();

    const element = document.createElement("div");
    element.classList = "dog";

    element.innerHTML = `<img src="${post.message}">`;

    document.querySelector(".container").appendChild(element);
}