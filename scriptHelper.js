// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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

console.log(validateInput(7));


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

        console.log(fuelLevelInput.value);
        console.log(cargoLevelInput.value);

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
        } else if (fuelLevelInput.value < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `Not enough fuel for the journey.`;
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            launchStatus.style.color = "red";
        }

        if (validatedCargoLevelInput === "Empty" || validatedCargoLevelInput === "Not a number") {
            alert("Please enter a valid cargo level.");
        } else if (cargoLevelInput.value > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `Too much mass for the shuttle to take off.`;
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            launchStatus.style.color = "red";
        }
        
    });
}

async function myFetch() {
    const planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json) {
            console.log(json)
;        });
    return planetsReturned;
    });
}

function pickPlanet(planets) {
    
}

module.exports = {
    addDestinationInfo: addDestinationInfo,
    validateInput: validateInput,
    formSubmission: formSubmission,
    pickPlanet: pickPlanet,
    myFetch: myFetch,
}