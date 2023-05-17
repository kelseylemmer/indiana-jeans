import { setSocioLocationId } from "./TransientState.js"



/*
Since the value of the radio buttons are a srting containing intigers, you must convert the
string to an actual intiger with parseInt() 
*/
const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInteger)
    }
}

export const LocationTypeChoices = async () => {

    document.addEventListener("change", handleLocationChange)

    const response = await fetch('http://localhost:8088/socioLocations')
    const locations = await response.json()

    let choicesHTML = "<h2>Which type of area do you live in?</h2>"
    for (const location of locations) {
        choicesHTML += `<input type='radio' name='location' value='${location.id}' /> ${location.label}`
    }
    return choicesHTML
}