<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: contact.html?status=error");
  exit;
}

if (!empty($_POST["company"])) {
  header("Location: contact.html?status=success");
  exit;
}

$first_name = htmlspecialchars(trim($_POST["first_name"] ?? ""));
$last_name  = htmlspecialchars(trim($_POST["last_name"] ?? ""));
$email_raw  = trim($_POST["email"] ?? "");
$topic      = htmlspecialchars(trim($_POST["topic"] ?? ""));
$message    = htmlspecialchars(trim($_POST["message"] ?? ""));

$email = filter_var($email_raw, FILTER_SANITIZE_EMAIL);

if ($topic === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  header("Location: contact.html?status=error");
  exit;
}

$name = trim($first_name . " " . $last_name);
if ($name === "") $name = "Website Visitor";

$consent_contact = (($_POST["consent_contact"] ?? "") === "yes") ? "Yes" : "No";
$consent_store   = (($_POST["consent_store"] ?? "") === "yes") ? "Yes" : "No";

$to = "youremail@example.com";
$subject = "New Contact Form Submission: " . $topic;

$body  = "You have received a new message from your website:\n\n";
$body .= "Name: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Topic: " . $topic . "\n\n";
$body .= "Message:\n" . $message . "\n\n";
$body .= "Consent to contact: " . $consent_contact . "\n";
$body .= "Consent to store/process: " . $consent_store . "\n";

$headers  = "From: " . $name . " <" . $email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
  header("Location: contact.html?status=success");
  exit;
}

header("Location: contact.html?status=error");
exit;