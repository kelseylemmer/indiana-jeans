import { OwnsJeansChoices } from "./OwnsJeans.js"

const container = document.querySelector("#container")

const render = () => {
    const jeanOwnershipHTML = OwnsJeansChoices()

    container.innerHTML = jeanOwnershipHTML
}

render()