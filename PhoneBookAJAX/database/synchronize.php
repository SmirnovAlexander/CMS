<?php 

include "connect.php";

$sql = "DELETE FROM Book;";
$conn->query($sql);

$phone_book_json = $_COOKIE['phone_book'];
$phone_book = json_decode($phone_book_json, true);


for ($i = 1; $i <= count($phone_book); $i++) {

    $id         = $i;
    $first_name = $phone_book[$id]['first_name']; 
    $last_name  = $phone_book[$id]['last_name']; 
    $number     = $phone_book[$id]['number']; 

    $sql = "INSERT INTO Book VALUES ({$id}, '{$first_name}', '{$last_name}', '{$number}');";
    $conn->query($sql);
}

$conn->close();

header("Location: http://localhost/~furiousteabag/PhoneBookAJAX/");

?>
