






function teste(nome,data){

    var testeee = {
        nome:nome,
        idade:data
    }

    firebasedata = firebase.database().ref().child("usuarios").push(testeee);
}

