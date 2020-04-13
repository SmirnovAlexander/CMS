<?php 

/* Loading credentials. */
$credentials_json = file_get_contents("credentials.json");
$credentials = json_decode($credentials_json, true);

$servername = $credentials['servername'];
$db_name =    $credentials['db_name'];
$table_name = $credentials['table_name'];
$username =   $credentials['username'];
$password =   $credentials['password'];

// Create connection.
$conn = new mysqli($servername, $username, $password, $db_name) or die("Connect failed: %s\n". $conn -> error);

?>
