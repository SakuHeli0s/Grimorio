//CARGAR LOS ID DEL HTML

const inputForm = document.getElementById('input-form')
const formContainer = document.getElementById('form-container')
const itemType = document.getElementById('item-type')
const textDescription = document.getElementById('text-description')
const grimoireList = document.getElementById('grimoire-list')

const emojis = {
    pocion: "⚗️",
    planta: "🌿",
    hechizo: "✨",
    mineral: "💎"
}

const nombres = {
    pocion: "Poción Curativa",
    planta: "Planta Medicinal",
    hechizo: "Hechizo",
    mineral: "Mineral Raro"
}

//CODIGO FORMULARIO

function añadirObjeto (evento){
    evento.preventDefault()

    const nombreObjeto = inputForm.value
    const tipoObjeto = itemType.value
    const emojiObjeto = emojis[tipoObjeto]
    const designacionObjeto = nombres[tipoObjeto]
    const descripcionObjeto = textDescription.value

    grimoireList.innerHTML += `
        <li>
            <h2>${nombreObjeto}</h2>
            <span class="emoji">${emojiObjeto}</span>
            <span>${designacionObjeto}</span>
            <p>${descripcionObjeto}</p>

        <button class="btn-delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M16.95 7.05L12 12m0 0l-4.95 4.95M12 12l4.95 4.95M12 12L7.05 7.05"/></svg>
        </button>
        </li>
    `
}

formContainer.addEventListener('submit', añadirObjeto)