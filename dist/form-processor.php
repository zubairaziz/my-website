<?php
    $to = 'zubairabaziz@gmail.com';
    $subject = 'email from website contact form';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = 'From: zubairabaziz@gmail.com' . "\r\n" .
    'Reply-To: zubairabaziz@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    $body = "From: $name\n E-Mail: $email\n Message: $message";

    mail($to, $subject, $message, $headers);
    
    header("Location: contact-thanks.html");
?>