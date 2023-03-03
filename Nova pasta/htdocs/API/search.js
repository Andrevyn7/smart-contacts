async function search() {

    let searchValue = document.getElementById('search').value

    let resp = await fetch(`http://smartcontacts.infinityfreeapp.com/BACK/search.php?searchValue=${searchValue}`); //Aqui a função trará todos os dados que foram pegos no banco de dados no arquivo search.php

    let data = await resp.json() //--> Aqui, utilizando a função nativa json(), todos os registros pegos no BD no php são convertidos em json e salvos na variável data em formato de array

    var table = `<table border = "1">`

    table += "<tr>"
    table += "<th>ID</th>"
    table += "<th>NOME</th>"
    table += "<th>E-MAIL</th>"
    table += "<th>TELEFONE</th>"
    table += "<th>AÇÕES</th>"
    table += "</tr>"

    for (let i = 0; data.length > i; i++) {
        table += `<tr>`
        table += `<th>${data[i].id}</th>`
        table += `<th>${data[i].nome}</th>`
        table += `<th>${data[i].email}</th>`
        table += `<th>${data[i].telefone}</th>`
        table += `<th>`
        table += `<a href="../FRONT/editarContato.html?id=${data[i].id}"><i class="fa-solid fa-pen-to-square"></i></a>`
        table += `<i class="fa-solid fa-person-circle-minus" onclick = "deleteContact(${data[i].id})"></i>`
        table += `</th>`
        table += "</tr>"
    }

    table += `</table>`

   document.getElementById("table").innerHTML = table;
}