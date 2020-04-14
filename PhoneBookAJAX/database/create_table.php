<?php 

include "connect.php";

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

$conn->close();

?>
