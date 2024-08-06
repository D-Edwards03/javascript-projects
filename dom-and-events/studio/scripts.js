// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "260px";
    let status = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    let height = document.getElementById("spaceShuttleHeight");

    const takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", event => {
        if (status.innerHTML !== "Shuttle in flight.") {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            status.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
            height.innerHTML = "10000";
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        }
        }
    });

    const land = document.getElementById("landing");
    landing.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerhtml = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        height.innerHTML = "0px"
        rocket.style.bottom = "0px";
    });

    const abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function() {
        let toAbort = window.confirm("Confirm that you want to abort this mission.");
        if (toAbort) {
            status.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "red";
            height.innerHTML = "0px";
            rocket.style.bottom = "0px";
            rocket.style.left = "260px";
        }
    });

    const up = document.getElementById("up");
    up.addEventListener("click", function() {
        if (status.innerHTML === "Shuttle in flight." && parseInt(height.innerHTML) < 250000) {
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        height.innerHTML = parseInt(height.innerHTML) + 10000;
        }
    });

    const down = document.getElementById("down");
    down.addEventListener("click", function() {
        if (status.innerHTML === "Shuttle in flight." && parseInt(height.innerHTML) !== 0 ) {
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        height.innerHTML = parseInt(height.innerHTML) - 10000;
        }
    });

    const right = document.getElementById("right");
    right.addEventListener("click", function() {
        if (status.innerHTML === "Shuttle in flight.") {
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
        }
    });

    const left = document.getElementById("left");
    left.addEventListener("click", function() {
        if (status.innerHTML === "Shuttle in flight.") {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
        }
    });

});