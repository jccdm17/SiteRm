  // Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyA-ZLkjBLWR_USgz2K-pVaoCOiYt7t_zGs",
    authDomain: "fir-van.firebaseapp.com",
    databaseURL: "https://fir-van.firebaseio.com",
    projectId: "fir-van",
    storageBucket: "fir-van.appspot.com",
    messagingSenderId: "287269115186",
    appId: "1:287269115186:web:bc17814033c6b2cfab732b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Enable offline capabilities
firebase.firestore().enablePersistence()
    .then(function() {
        // Initialize Cloud Firestore through firebase
        db = firebase.firestore();
    })
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled in one tab at a a time.

        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

    function verificaUsuarioLogado(){
        var user = firebase.auth().currentUser;
    
        if (user != null) {
            user.providerData.forEach(function (profile) {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
                
                if((profile.displayName == null)&&(profile.email!=null)){
                    $("#MenuContaTop").html("Conta ("+profile.email+")")    
                    $("#MenuContaSide").html("Conta ("+profile.email+")")    
                }else if(profile.displayName!=null){
                    $("#MenuContaTop").html("Conta ("+profile.displayName+")")    
                    $("#MenuContaSide").html("Conta ("+profile.displayName+")")    
                }else{
                    $("#MenuContaTop").html("Conta")    
                    $("#MenuContaSide").html("Conta")  
                }
            });
    
        } else {
            $("#MenuContaTop").html("Login")
            $("#MenuContaTop").click(function(){window.location.replace("./login.html");})
    
            $("#MenuContaSide").html("Login")
            $("#MenuContaSide").click(function(){window.location.replace("./login.html");})
        }
    
    }
    
    $( window ).on( "load", function() {
        setTimeout(function(){
            verificaUsuarioLogado();
        },1000)
    });

    
function gravaUsuario(){
    var docRef = db.collection("user").add({
        email: "juliojcmedeiros@gmail.com",
        nome: "Julio César Corcini",
        senha: "Teste123",
        tel: "5511975161662",
    })

    .then(function () {
        console.log("Document successfully created!");
    });
}

function retornaUsuarios(){
    usuarios = [];
    db.collection("user").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            usuario = [doc.id,doc.data()];
            usuarios.push(usuario);
            console.log(usuarios);        
        });
    });
}

function criaUsuario(email,password){

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

}