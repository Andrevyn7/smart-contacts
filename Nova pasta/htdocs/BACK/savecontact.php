<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);

require "./conn.php";

$dados = file_get_contents('php://input');

$user_register = json_decode($dados, true);
$nome = $user_register["nome"];
$email = $user_register["email"];
$tel = $user_register["telefone"];

try{
$stmt = $pdo->prepare("INSERT INTO pessoas (nome) VALUES (:nome)");
$stmt->bindParam(':nome', $nome);
$stmt->execute();
$idlast = $pdo->lastInsertId();
} catch (\Throwable $th) {
echo "Error";
};

try {
$stmt = $pdo->prepare("INSERT INTO contatos (email, telefone, id_pessoa) VALUES (:email, :tel, :idLast)");
$stmt->bindParam(':email', $email);
$stmt->bindParam(':tel', $tel);
$stmt->bindParam(':idLast', $idlast);
$stmt->execute();

echo "Dados salvos com sucesso";

} catch (\Throwable $th) {
echo "Erro em adicionar na tabela (contato)";
}