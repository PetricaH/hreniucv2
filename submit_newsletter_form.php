<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email'];
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Thank you for subscribing! Your email is: ", $email;
        } else {
            echo "Invalid email adress.";
        }
    } else {
        header("Location: index.html");
        exit;
    }
?>