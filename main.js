//CARGAR LOS ID DEL HTML

const inputForm = document.getElementById('input-form')
const formContainer = document.getElementById('form-container')
const itemType = document.getElementById('item-type')
const textDescription = document.getElementById('text-description')
const grimoireList = document.getElementById('grimoire-list')
const btnAdd = document.getElementById('btn-add')

//CODIGO FORMULARIO

function añadirObjeto (evento){
    evento.preventDefault()

    const nombreObjeto = inputForm.value
    const tipoObjeto = itemType.value
    const descripcionObjeto = textDescription.value

}

formContainer.addEventListener('submit', añadirObjeto)