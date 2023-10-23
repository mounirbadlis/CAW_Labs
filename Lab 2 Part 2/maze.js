document.addEventListener("DOMContentLoaded", function() {
const walls = document.querySelectorAll(".boundary");
const winElement = document.getElementById("end");
const beginElement = document.getElementById("start");
//exercise 1
walls.forEach((wallOnly) =>  {
    wallOnly.addEventListener("mouseover", function() {
        wallOnly.style.backgroundColor = 'red';
    });
});

//exercise 2
walls.forEach((wallAll) => {
    wallAll.addEventListener("mouseover", function() {
        walls.forEach((wall) => {
            wall.style.backgroundColor = 'red';
        })
    })
})

//exercise 3
winElement.addEventListener("mouseover", function() {
    window.alert('You Win!')
})

//exercise 4
beginElement.addEventListener("click", function() {
    walls.forEach((wall) => {
        wall.style.backgroundColor = '#eeeeee';
    })
})
})