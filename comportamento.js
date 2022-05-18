function adicionarH1() {
    let divH1 = document.getElementById("area_h1"); // Resgatando a div a ser inserida os conteúdos
    let elemento = document.createElement("h1"); // Cria elemento 'h1'
    elemento.innerHTML = " Vitü"; // Conteúdo do elemento
    divH1.appendChild(elemento); // Adiciona um elemento filho à div
}

function limparH1() {
    let divH1 = document.getElementById("area_h1");
    divH1.innerHTML = " ";
}

function adicionarP() {
    let divP = document.getElementById("area_p");
    let elemento = document.createElement("p");
    elemento.innerHTML = " Vitü";
    divP.appendChild(elemento);
}

function limparP(){
    let divP = document.getElementById("area_p");
    divP.innerHTML = " ";
}

function adicionarInput(){
    let divInput = document.getElementById("area_input");
    let elemento = document.createElement("input"); 
    elemento.setAttribute("type", "range" ); // Setar atributos ao input -> type: "text"
    divInput.appendChild(elemento);
}

function limparInput() {
    let divInput = document.getElementById("area_input");
    divInput.innerHTML = " ";
}