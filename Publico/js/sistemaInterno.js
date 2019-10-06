
$(".opcoes").css("cursor","pointer");


$(".opcoes").click(function(){
    var divClicada=this.attributes["id"].nodeValue;
    if(divClicada == "divCadastro"){
        location.href="./cadastro.html"
    }else if(divClicada == "divCadastro"){
        location.href="./cadastro.html"
    }else if(divClicada == "divPagamento"){
        location.href="./cadastro.html"
    }else if(divClicada == "divEnquete"){
        location.href="./cadastro.html"               
    }else if(divClicada == "divLocalizacao"){
        location.href="./cadastro.html"
    }else if(divClicada == "divAvisos"){
        location.href="./cadastro.html"
    }else if(divClicada == "divMensagem"){
        location.href="./cadastro.html"
    }
    divPagamento
})