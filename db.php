<?php
// Connect to database
$host = "localhost";
$user = "root";
$password = "";
$dbname = "contact";

$conn = mysqli_connect($host, $user, $password, $dbname);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];

	$sql = "INSERT INTO contact (name, email, message) 
    VALUES ('$name', '$email', '$message')";

	if (mysqli_query($conn, $sql)) {
		echo "Thank you for contacting me!";
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	mysqli_close($conn);
}
?>
