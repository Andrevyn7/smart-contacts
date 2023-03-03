//Este arquivo savecontact.js serve para salvar os registros inseridos no index.html para o banco de dados

async function pegar() {

    let nome = document.getElementById("inputname").value;
    let email = document.getElementById("inputemail").value;
    let telefone = document.getElementById("inputtel").value;

    if (formatarEmail(email) == 1 && formatarTelefone(telefone) == 1){
        let dados = {nome, email, telefone}
        console.log(dados)
        let resp = await fetch("http://smartcontacts.infinityfreeapp.com/BACK/savecontact.php", {
            method: "POST",
            headers: {},
            body: JSON.stringify(dados),
        });
        console.log(await resp.text());
        window.alert("Dados salvos")
        window.location = "http://smartcontacts.infinityfreeapp.com/index.html"
    }else{
        window.alert("dados inválidos")
    }
    
}
function formatarTelefone(telefone){
    var regex = /^\(?[1-9]{0,2}\)?\s?[1-9]?[0-9]{4}\-?[0-9]{4}$/g

    if (regex.test(telefone)){
        return 1
    }else{
        window.alert(telefone + " não é um telefone valido")
        return 0
    }
}

function formatarEmail(email){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (regex.test(email)) {
        return 1
    } else {
        window.alert(email + " não é um e-mail valido")
        return 0
    }
}