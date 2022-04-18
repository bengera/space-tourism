//--Selectors--//
const btns = document.querySelectorAll(".buttons .num");
let title = document.querySelector(".tech-title");
let header = document.querySelector(".tech-header");
let description = document.querySelector(".tech-description");
let image = document.querySelector(".tech-image");
let allData = [];
let num = 0;
let img = "";


fetch("https://bengera.github.io/space-tourism/data.json")
    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i < data.technology.length; i++) {
            allData.push(data.technology[i]);
        }
    }).catch(function (error) {
        console.log('Something went wrong');
        console.error(error);
    });

    (function () {
        window.onresize = displayWindowSize;
        window.onload = displayWindowSize;
      
        function displayWindowSize() {
          let myWidth = window.innerWidth;
          console.log(myWidth);
          // your size calculation code here
          if (myWidth >= 1100) {
            img = "portrait";
          } else {
            img = "landscape";
          }
          image.src = allData[num].images[img];
        }
      })();


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btns.forEach((btn) => {
            btn.classList.remove("active");
        })
        btn.classList.add("active");
        num = btn.innerText -1; // using number to get to array point 0
        title.innerText = allData[num].name;
        description.innerText = allData[num].description;
        image.src = allData[num].images[img];

    });
    });