async function inputFulfill(){
    var url_string = window.location.href;
    var url = new URL(url_string)
    var id = url.searchParams.get("id")
    console.log(id)
    
    let inputname = document.getElementById('inputname').value
    let inputemail = document.getElementById('inputemail').value
    let inputtel = document.getElementById('inputtel').value

    if (formatarTelefone(inputtel) == 1 && formatarEmail(inputemail) == 1){
    
        let registros = {id, inputname, inputemail, inputtel}
    
        let resp = await fetch ("http://smartcontacts.infinityfreeapp.com/BACK/updatecontact.php", {
            method: "POST",
            headers: {},
            body: JSON.stringify(registros),
        })
        console.log(await resp.text())
        setTimeout(()=>{window.location.href = "../FRONT/tablecontact.html"}, 1000)
        window.alert("Informações salvas")
    }else{
        window.alert("Dados inseridos estão inválidos")
    }
}

function formatarTelefone (inputtel){
    var regex = /^\(?[1-9]{0,2}\)?\s?[1-9]?[0-9]{4}\-?[0-9]{4}$/g

    if (regex.test(inputtel)) {
        return 1
    }else{
        return 0
    }
}

function formatarEmail (inputemail){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (regex.test(inputemail)){
        return 1
    }else{
        return 0
    }
}