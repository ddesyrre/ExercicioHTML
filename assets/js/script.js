const name = window.document.getElementById('name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const map = document.querySelector('#map')

let nameOk = false;
let emailOk = false;
let subjectOk = false;


function nameValidation() {
    let txtName = document.querySelector("#txtName")
    if (name.value.length < 3) {
    txtName.innerHTML = 'Nome inválido'
    txtName.style.color = 'red'
    nameOk = false
    } else {
    txtName.innerHTML = 'Name ok'
    txtName.style.color = 'green'
    nameOk = true
    }
}

function emailValidation() {
    let txtEmail = document.querySelector('#txtEmail')
    
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
    emailOk = false
    
} else {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
    }
}

function emailValidationSymbol() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.match(regex)) {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
    } else {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
    emailOk = false
    }
}

function subjectValidation() {
    let txtSubject = document.querySelector('#txtSubject')

    if(subject.value.length >= 100) {
        txtSubject.innerHTML = 'Digite no máximo 100 caracteres.'
        txtSubject.style.color = '#d90429'
        txtSubject.style.display = 'block'
    } else {
        txtSubject.style.display = 'none'
        subjectOk = true
    }
}

function submitForm(){
    if (nameOk == true && emailOk == true && subjectOk == true) {
        alert('mensagem enviada com sucesso!')
    } else {
        alert('Por favor, preencha todos os campos corretamente')
    }
}

function mapZoom() {
    map.style.aspectRatio = '16/11'
}

function mapNormal() {
    map.style.aspectRatio = '16/9'
}