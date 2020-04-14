<?php 

include "connect.php";

if ($_POST['action'] == 'create') {

    $sql = "
        CREATE TABLE Book (
            Id int,
            FirstName varchar(255),
            LastName varchar(255),
            Number varchar(255)
        );
    ";

    if ($conn->query($sql) === TRUE) {
        echo "Table created successfully.";
    } else {
        echo "Error creating table: " . $conn->error;
    }
}

elseif ($_POST['action'] == 'delete') {

    $sql = "
        DROP TABLE Book;
    ";

    if ($conn->query($sql) === TRUE) {
        echo "Table deleted successfully.";
    } else {
        echo "Error deleting table: " . $conn->error;
    }

}


elseif ($_POST['action'] == 'sychronize') {

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
}


$conn->close();

?>
