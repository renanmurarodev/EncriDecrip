var botaoEncrip = document.querySelector(".cripto");
var botaoDesencrip = document.querySelector(".descripto");
var figura = document.querySelector(".personagem");
var conteiner = document.querySelector(".dois-paragrafo");
var resultado = document.querySelector(".text-resultado");

botaoEncrip.onclick = encrip;
botaoDesencrip.onclick = desencrip;

function encrip(){
    ocultarMsg();
    var areaescrita = recuperarTexto()
    resultado.textContent = encrTexto(areaescrita);
}

function desencrip(){
    ocultarMsg();
    var areaescrita = recuperarTexto()
    resultado.textContent = desencTexto(areaescrita);
}

function recuperarTexto(){
    var areaescrita = document.querySelector(".areaescrita")
    return areaescrita.value
}

function ocultarMsg(){
    figura.classList.add("invisivel");
    conteiner.classList.add("invisivel");
}

function encrTexto(msg){
    var text = msg;
    var textEnd = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            textEnd = textEnd + "ai"
        }
        else if(text[i] == "e"){
            textEnd = textEnd + "enter"
        }
        else if(text[i] == "i"){
            textEnd = textEnd + "imes"
        }
        else if(text[i] == "o"){
            textEnd = textEnd + "ober"
        }
        else if(text[i] == "u"){
            textEnd = textEnd + "ufat"
        }
        else{
            textEnd = textEnd + text[i]
        }
    }
    return textEnd;

}

function desencTexto(msg){
    var text = msg;
    var textEnd = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            textEnd = textEnd + "a"
            i = i+1;
        }
        else if(text[i] == "e"){
            textEnd = textEnd + "e"
            i = i+4;
        }
        else if(text[i] == "i"){
            textEnd = textEnd + "i"
            i = i+3;
        }
        else if(text[i] == "o"){
            textEnd = textEnd + "o"
            i = i+3;
        }
        
        else if(text[i] == "u"){
            textEnd = textEnd + "u"
            i = i+3;
        }
        else{
            textEnd = textEnd + text[i];
        }
        
    }

    return textEnd;

}

const botaoCopiar = document.querySelector(".copy-button"); 
    botaoCopiar.addEventListener("click", copiar = () => {
    var conteiner = document.querySelector(".text-resultado").textContent;
    navigator.clipboard.writeText(conteiner);
    console.log("hola"); 
});