let image = document.querySelector(".destination__photo");
let paragraph = document.querySelector(".description");
let name = document.querySelector(".name"); //h2
let description = document.querySelector(".distance");
let time = document.querySelector(".est-time");
let numberTravel = document.querySelector(".number-travel");
let elements = [];


fetch("../data.json")

.then((res) => res.json)
.then((data) => {
    for (let i = 0; i < data.destinations.length; i++) {
        elements.push(data.destinations);
        
    }
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
