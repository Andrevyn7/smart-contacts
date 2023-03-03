<?php

$username = "epiz_33460894";
$password = "cuumVcScCX8";
$servername = "sql204.epizy.com";
$dbname = "epiz_33460894_contacts";

try {
    // Cria a conexão com o banco de dados
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}