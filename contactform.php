<?php

    // if submit button was pressed...
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];
    }

    $mailTo = "kelvin.tiongson@greenhousena.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have a received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);

    // function that takes us back to the front page when loaded and done
    header("Location: index.html?mailsend");
?>