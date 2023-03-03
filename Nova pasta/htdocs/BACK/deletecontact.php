<?php
require './conn.php'; //Require chama um arquivo php externo e roda como se o código estivesse aqui


$recebeId = $_GET["id"];

//PRIMEIRO DEVEMOS CRIAR A QUERY PARA APAGAR O REGISTRO DA SEGUNDA TABELA (contatos)
try {
    $stmt = $pdo->prepare("DELETE FROM contatos WHERE id_pessoa = :id");
    $stmt->bindParam(':id', $recebeId);
    $stmt->execute();

} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}

//EM SEGUNDO LUGAR DEVEMOS APAGAR OS DADOS DA TABELA PRINCIPAL(pessoas)
try {
    $stmt = $pdo->prepare("DELETE FROM pessoas WHERE id = :id");
    $stmt->bindParam(':id', $recebeId);
    $stmt->execute();

} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}