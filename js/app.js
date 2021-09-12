//Botão Submit
let btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', () => {

    let resultado = document.getElementById('resultado');

    let titulo = document.getElementById('titulo');
    let descricao = document.getElementById('descricao');
    let url = document.getElementById('url');

    if (titulo.value == '' || descricao.value == '' || url.value == '') {

        alert('Campos em branco não são permitidos.');

    } else {
            resultado.insertAdjacentHTML('beforeend', `<div class="card">
            <img class="card-edit" src="./img/edit.png" onClick="editarCard(this)">
            <img class="card-delete" src="./img/delete.png" onClick="excluirCard(this)">
            <img class="card-img" src="${url.value}">
            <span>${titulo.value}</span>
            <p>${descricao.value}</p>
            </div>`); 

            titulo.value = '';
            descricao.value = '';
            url.value ='';
    }

});

//Botão Cancelar
let btnCancelar = document.getElementById('btnCancelar');

btnCancelar.addEventListener('click', () => {

    let titulo = document.getElementById('titulo');
    let descricao = document.getElementById('descricao');
    let url = document.getElementById('url');

    titulo.value = '';
    descricao.value = '';
    url.value ='';

    document.querySelector('.form-simulado').style.display = "none";

});

//Botão Editar
function editarCard (botaoEditar) {

    let card = botaoEditar.parentElement;
    let r = prompt("Editar URL da imagem:");

    if (r != null) {
        card.children[2].setAttribute("src", r);
    }   

}

//Botão Excluir
function excluirCard (botaoDeletar) {

    let cardContainer = document.getElementById('resultado');
    let card = botaoDeletar.parentElement;

    let r = confirm(`Você está prestes a excluir o card: ${card.children[3].textContent}`);
    if (r) {

        cardContainer.removeChild(card);
    }


}


//Menu
let menulist = document.getElementsByTagName('li');

menulist[0].addEventListener('click', () => {
    
    document.querySelector('.form-simulado').style.display = "block";

});

menulist[1].addEventListener('click', () => {

    document.querySelector('.contato').style.display = "block";

});

document.querySelector('.contato-sair').addEventListener('click', () => {

    document.querySelector('.contato').style.display = "none";

})