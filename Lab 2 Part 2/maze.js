document.addEventListener("DOMContentLoaded", function () {
    const walls = document.querySelectorAll(".boundary");
    const winElement = document.getElementById("end");
    const beginElement = document.getElementById("start");
    const status = document.getElementById("status");
    const maze = document.getElementById("maze");
    const point = document.getElementById("point");
    var onPlay = false;
    var losestat = false;

    //exercise 1
    walls.forEach((wallOnly) => {
        wallOnly.addEventListener("mouseover", function () {
            wallOnly.style.backgroundColor = 'red';
            losestat = true;
        });
    });

    //exercise 2
    walls.forEach((wallAll) => {
        wallAll.addEventListener("mouseover", function () {
            walls.forEach((wall) => {
                wall.style.backgroundColor = 'red';
                losestat = true;
            })
        })
    })

    //exercise 3
    // winElement.addEventListener("mouseover", function() {
    //     window.alert('You Win!')
    // })

    //exercise 4
    beginElement.addEventListener("click", function () {
        walls.forEach((wall) => {
            wall.style.backgroundColor = '#eeeeee';
        })
        onPlay = true;
        losestat = false;
    })

    //exercise 6
    winElement.addEventListener("mouseover", function () {
        if (losestat) {
            status.innerHTML = "You already lost"
        } else {
            status.innerHTML = "You Win!"
        }
    })

    walls.forEach((wallAll) => {
        wallAll.addEventListener("mouseover", function () {
            walls.forEach((wall) => {
                wall.style.backgroundColor = 'red';
                status.innerHTML = "You Lose"
                losestat = true;
            })
        })
    })

    //exercise 7
    document.addEventListener("mouseover", function (event) {
        if (onPlay) {
            if (event.target == maze) {
            } else {
                walls.forEach((wall) => {
                    wall.style.backgroundColor = 'red';
                    status.innerHTML = "You Lose"
                    losestat = true;
                })
            }
        }
    })
})