async function deleteContact(id){
    if(confirm("Deseja realmente deletar?")){
        let resp = await fetch(`http://smartcontacts.infinityfreeapp.com/BACK/deletecontact.php?id=${id}`)

        console.log(await resp.text())

        window.location = "http://smartcontacts.infinityfreeapp.com/FRONT/tablecontact.html"
    }
}