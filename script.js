var cards = document.querySelectorAll(".card");

cards.forEach(function(card){

var extra = card.querySelector(".extra");

card.addEventListener("mouseenter", function(){

card.style.transform = "scale(1.05)";
card.style.backgroundColor = "#ffd6e8";
extra.style.display = "block";

});

card.addEventListener("mouseleave", function(){

card.style.transform = "scale(1)";
card.style.backgroundColor = "white";
extra.style.display = "none";

});

card.addEventListener("dblclick", function(){

document.getElementById("servico").value =
card.querySelector("h3").innerText;

});

});

var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var servico = document.getElementById("servico").value;
    var quantidade = document.getElementById("quantidade").value;
    var data = document.getElementById("data").value;
    var obs = document.getElementById("obs").value;
    var check = document.getElementById("check").checked;

    if (check == false) {

        document.getElementById("resultado").innerHTML =
        "<h3>Marque a confirmação antes de enviar.</h3>";

    } else {

        document.getElementById("resultado").innerHTML = `
        <h2>Solicitação enviada!</h2>

        <p><b>Nome:</b> ${nome}</p>

        <p><b>E-mail:</b> ${email}</p>

        <p><b>Telefone:</b> ${telefone}</p>

        <p><b>Serviço:</b> ${servico}</p>

        <p><b>Quantidade:</b> ${quantidade}</p>

        <p><b>Data:</b> ${data}</p>

        <p><b>Observações:</b> ${obs}</p>
        `;
    }

});

var botao = document.getElementById("confirmar");

botao.addEventListener("mousedown", function () {

    botao.innerHTML = "Confirmando...";
    botao.style.backgroundColor = "green";

});

botao.addEventListener("mouseup", function () {

    botao.innerHTML = "Solicitação confirmada!";
    botao.style.backgroundColor = "hotpink";

});

var logo = document.getElementById("logo");
var menu = document.getElementById("menu");

logo.addEventListener("contextmenu", function (evento) {

    evento.preventDefault();

    menu.style.display = "block";
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";

});

document.addEventListener("click", function () {


    menu.style.display = "none";

});

card1.addEventListener("dragstart", function (evento) {
    evento.dataTransfer.setData("texto", "Corte Feminino");
});

card2.addEventListener("dragstart", function (evento) {
    evento.dataTransfer.setData("texto", "Manicure");
});

card3.addEventListener("dragstart", function (evento) {
    evento.dataTransfer.setData("texto", "Escova");
});

var favoritos = document.getElementById("favoritos");

favoritos.addEventListener("dragover", function (evento) {

    evento.preventDefault();

});

favoritos.addEventListener("drop", function (evento) {

    evento.preventDefault();

    var texto = e.dataTransfer.getData("texto");

    favoritos.innerHTML += `<p> ${texto}</p>`;

});
