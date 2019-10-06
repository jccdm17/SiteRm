


$(".sistemaBtn").click(function(){ location.href="./sistemainterno.html";})    
$(".sairContaBtn").click(function(){ firebase.auth().signOut();location.reload();})           




function teste(nome,data){

    var testeee = {
        nome:nome,
        idade:data
    }

    firebasedata = firebase.database().ref().child("usuarios").push(testeee);
}

