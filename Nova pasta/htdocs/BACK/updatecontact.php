<?php

require './conn.php'; //Require chama um arquivo php externo e roda como se o código estivesse aqui

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);

try {
    $data = file_get_contents('php://input');
    
    $data_list = json_decode($data, true);
    
    $id = $data_list['id'];
    $name = $data_list['inputname'];
    $email = $data_list['inputemail'];
    $tel = $data_list['inputtel'];

    //SERÁ SALVO O NOME NA TABELA PRINCIPAL pessoas
    $stmt = $pdo->prepare("UPDATE pessoas SET nome = :nome WHERE id = :id");
    $stmt->bindParam(':nome', $name);
    $stmt->bindParam('id', $id);
    $stmt->execute();

    //UPDATE SERÁ DO TELEFONE E EMAIL na tabela contatos
    $stmt = $pdo->prepare("UPDATE contatos SET telefone = :tel, email = :email WHERE id_pessoa = :id");
    $stmt->bindParam(':tel', $tel);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':id', $id);
    $stmt->execute();


    echo "Alterado com sucesso";

} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}