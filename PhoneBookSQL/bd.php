<?php 

$phone_book_json = $_COOKIE['phone_book'];
echo $phone_book_json;

$phone_book = json_decode($phone_book_json, true);
echo $phone_book;

echo $phone_book['2']['number'];

/* foreach ($result['data'] as $event) { */
/*     echo '<div>'.$event['name'].'</div>'; */

/* header("Location: http://localhost/~furiousteabag/PhoneBookSQL/"); */
?>
