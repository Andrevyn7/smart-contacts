<?php

require './conn.php'; //Require chama um arquivo php externo e roda como se o código estivesse aqui

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);

try {
    $stmt = $pdo->prepare("SELECT p.id, p.nome, c.email, c.telefone, c.id FROM pessoas p JOIN contatos c ON c.id_pessoa = p.id");
    
    $stmt->execute();
    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    $resultado = json_encode($result);
    
    header("content-type: application/json");
    
    echo $resultado;
    
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}