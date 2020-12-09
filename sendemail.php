<?php

if (isset($_POST['submit'])){
$name = $_POST['name'];
$subject = $_POST['subject'];
$mailFrom = $_POST['mail'];
$message = $_POST['message'];

$mailTo = "greggyga@hotmail.it";
$headers = "From: ".$mailFrom;
$txt ="You Have received an e-mail from ".$name".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);
header("Location: index.php?mailsend");
}
?>