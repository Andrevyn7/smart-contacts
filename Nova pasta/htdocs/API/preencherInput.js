//Função para preencher os inputs na página de edição de contato

async function preencherInput(){
//1. Pegar o ID do usuário a ser editado
    var url_string = window.location.href;
    var url = new URL(url_string)
    var id = url.searchParams.get("id")

//2. Buscar os registros relacionados a esse ID no BD (utilizar função assíncrona)
    let resp = await fetch(`http://smartcontacts.infinityfreeapp.com/BACK/preencher.php?id=${id}`);

    let data = await resp.json()

    console.log(data)

//3. Preencher os inputs com os registros retornados
    document.getElementById('inputname').value = data[0].nome
    document.getElementById('inputemail').value = data[0].email
    document.getElementById('inputtel').value = data[0].telefone
}
preencherInput()