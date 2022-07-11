// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

   const missionTarget = document.getElementById("missionTarget");
   const planetDestination = myFetch();

   missionTarget.innerHTML = 
`                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${planetDestination.name}</li>
                    <li>Diameter: ${planetDestination.diameter}</li>
                    <li>Star: ${planetDestination.star}</li>
                    <li>Distance from Earth: ${planetDestination.distance}</li>
                    <li>Number of Moons: ${planetDestination.moons}</li>
                </ol>
                <img src="${planetDestination.imageUrl}">`
   
}

function validateInput(testInput) {
    let answer;

   if (testInput === "") {
        answer = "Empty";
   } else if (isNaN(testInput)) {
        answer = "Not a number";
   } else {
        answer = "Is a number";
   }; 

   return answer;
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const form = document.querySelector("form");
    const faultyItems = document.getElementById("faultyItems")

    form.addEventListener("submit", function(event) {
        event.preventDefault()

        const pilotInput = document.querySelector("input[name=pilotName]");
        const validatedPilotInput = validateInput(pilotInput.value);
        const pilotStatus = document.getElementById("pilotStatus");

        const copilotInput = document.querySelector("input[name=copilotName]");
        const validatedCopilotInput = validateInput(copilotInput.value);
        const copilotStatus = document.getElementById("copilotStatus");

        const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        const validatedFuelLevelInput = validateInput(fuelLevelInput.value);
        const fuelStatus = document.getElementById("fuelStatus");

        const cargoLevelInput = document.querySelector("input[name=cargoMass]");
        const validatedCargoLevelInput = validateInput(cargoLevelInput.value);
        const cargoStatus = document.getElementById("cargoStatus");

        const launchStatus = document.getElementById("launchStatus")

        if (validatedPilotInput === "Empty" || validatedPilotInput === "Is a number") {
            alert("Please enter a valid Pilot name.");

        } else if (validatedPilotInput === "Not a number") {
        
            pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready.`;
        }

        if (validatedCopilotInput === "Empty" || validatedCopilotInput === "Is a number") {
            alert("Please enter a valid Copilot name.");
        } else if (validatedCopilotInput === "Not a number") {

            copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready.`;
        }

        if (validatedFuelLevelInput === "Empty" || validatedFuelLevelInput === "Not a number") {
            alert("Please enter a valid fuel level.");
        } else if (validatedFuelLevelInput === "Is a number" && Number(fuelLevelInput.value) < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `Not enough fuel for the journey.`;
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            launchStatus.style.color = "red";
        } else if (validatedFuelLevelInput === "Is a number" && Number(fuelLevelInput.value) >= 10000 && Number(cargoLevelInput.value) < 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle ready for launch.`;
            launchStatus.style.color = "green";
        }

        if (validatedCargoLevelInput === "Empty" || validatedCargoLevelInput === "Not a number") {
            alert("Please enter a valid cargo level.");
        } else if (validatedCargoLevelInput === "Is a number" && Number(cargoLevelInput.value) > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `Too much mass for the shuttle to take off.`;
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            launchStatus.style.color = "red";
        } else if (validatedCargoLevelInput === "Is a number" && Number(cargoLevelInput.value) < 10000 && Number(fuelLevelInput.value) >= 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle ready for launch.`;
            launchStatus.style.color = "green";
        }
    });
}

async function myFetch() {
    const planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    planetsReturned.then( function(response) {
        const jsonPromise = response.json();
        jsonPromise.then( function(json) {
           console.log(json);
        });
    }); return planetsReturned;
}

function pickPlanet(planets) {
    const fetch = myFetch();
    let randNum = 0;
    for (i=0; i<6; i++){
        randNum += Math.random().floor;
        console.log(randNum);
     } return randNum;

    fetch.json().then(function (json) {
        
    })
}

module.exports = {
    addDestinationInfo: addDestinationInfo,
    validateInput: validateInput,
    formSubmission: formSubmission,
    pickPlanet: pickPlanet,
    myFetch: myFetch,
}