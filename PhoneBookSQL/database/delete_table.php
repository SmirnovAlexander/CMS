<?php 

include "connect.php";

$sql = "
    DROP TABLE Book;
";

if ($conn->query($sql) === TRUE) {
    echo "Table deleted successfully.";
} else {
    echo "Error deleting table: " . $conn->error;
}

$conn->close();

header("Location: http://localhost/~furiousteabag/PhoneBookSQL/");

?>
