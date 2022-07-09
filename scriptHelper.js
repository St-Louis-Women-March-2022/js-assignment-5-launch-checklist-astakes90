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

   if (isNaN(testInput)) {
        answer = "Not a number";
   } else if (!isNaN(testInput)) {
        answer = "Is a number";
   } else if (testInput === "") {
        answer = "Empty";
   }; 

   return answer;
};

// console.log(validateInput(7));


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const form = document.querySelector("form");
    // const copilotInput = document.querySelector("input[name=copilotName]");
    // const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    // const cargoLevelInput = document.querySelector("input[name=cargoMass]");
    


    form.addEventListener("submit", function(event) {
        const pilotInput = document.querySelector("input[name=pilotName]");
        const validatedPilotInput = validateInput(pilotInput.value);
        if (validatedPilotInput === "Empty" || validatedPilotInput === "Is a number") {
            alert("Please enter a Pilot name.");
            event.preventDefault();
        };
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