import { OwnsJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { LocationTypeChoices } from "./UrbanDweller.js"


const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnsJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = SaveSubmission()

    container.innerHTML = `
        ${jeanOwnershipHTML}
        ${locationsHTML}
        ${buttonHTML}
    `
}

render()