let image = document.querySelector(".destination__photo");
let title = document.querySelector(".name"); //h2
const links = document.querySelectorAll(".destination__item");
let description = document.querySelector(".destination__description");
let distance = document.querySelector(".destination__number");
let travel = document.querySelector(".destination__number-travel");
let elements = [];




fetch("https://bengera.github.io/space-tourism/data.json")
// fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i < data.destinations.length; i++) {
            elements.push(data.destinations[i]);
        }
    }).catch(function (error) {
        console.log('Something went wrong');
        console.error(error);
    });

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        console.log('link-clicked')
        e.preventDefault();
        links.forEach((link) => {
            link.classList.remove("active-page");
        });
        link.classList.add("active-page");
        console.log(e.target.innerText);
        switch (e.target.innerText) {
            case "MOON":
                image.src = elements[0].images.webp;
                title.innerText = elements[0].name;
                description.innerText = elements[0].description;
                distance.innerText = elements[0].distance;
                travel.innerText = elements[0].travel;

                break;
            case "MARS":
                image.src = elements[1].images.webp;
                title.innerText = elements[1].name;
                description.innerText = elements[1].description;
                distance.innerText = elements[1].distance;
                travel.innerText = elements[1].travel;

                break;
            case "EUROPA":
                image.src = elements[2].images.webp;
                title.innerText = elements[2].name;
                description.innerText = elements[2].description;
                distance.innerText = elements[2].distance;
                travel.innerText = elements[2].travel;
                break;
            case "TITAN":
                image.src = elements[3].images.webp;
                title.innerText = elements[3].name;
                description.innerText = elements[3].description;
                distance.innerText = elements[3].distance;
                travel.innerText = elements[3].travel;
                break;

        }
    })

})




// fetch("../data.json")

// .then(function (response) {
//     return response.json();

// }).then(function (data) {
//     console.log(data);
//     for (let i = 0; i < data.destinations.length; i++) {
//         destinationData.push(data.destinations[i]);
//         console.log(destinationData);
//         para.innerText = destinationData[0].description;
//     }


// }).catch(function (error) {
//     console.log('Something went wrong');
//     console.error(error);
// })