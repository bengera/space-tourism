const dots = document.querySelectorAll(".dots .dot");
let photo = document.querySelector(".crew__photo");
let crewName = document.querySelector(".crew__name");
let role = document.querySelector(".crew__role");
let bio = document.querySelector(".crew__bio");
let elements = [];

fetch("https://bengera.github.io/space-tourism/data.json")

    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i < data.crew.length; i++) {
            elements.push(data.crew[i]);
        }
    }).catch(function (error) {
        console.log('Something went wrong');
        console.error(error);
    });




dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
        dots.forEach((dot) => {
            dot.classList.remove("active");
        });
        dot.classList.add("active");
        role.innerText = elements[dot.dataset.num -1].role;
        crewName.innerText = elements[dot.dataset.num - 1].name;
        bio.innerText = elements[dot.dataset.num - 1].bio;
        photo.src = elements[dot.dataset.num - 1].images.webp;
        
        
    });
    
});