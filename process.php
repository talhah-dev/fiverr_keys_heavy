<?php

function redirect_with_status($status)
{
  header("Location: contact.html?status=" . urlencode($status));
  exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  redirect_with_status("error");
}

// Simple honeypot trap. Filled value indicates likely bot traffic.
if (!empty($_POST["company"]) || !empty($_POST["website"])) {
  redirect_with_status("blocked");
}

$first_name = trim($_POST["first_name"] ?? "");
$last_name  = trim($_POST["last_name"] ?? "");
$email_raw  = trim($_POST["email"] ?? "");
$topic      = trim($_POST["topic"] ?? "");
$message    = trim($_POST["message"] ?? "");

$email = filter_var($email_raw, FILTER_SANITIZE_EMAIL);

if ($topic === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  redirect_with_status("invalid");
}

if (strlen($message) > 5000) {
  redirect_with_status("invalid");
}

$name = trim($first_name . " " . $last_name);
if ($name === "") {
  $name = "Website Visitor";
}

$consent_contact = (($_POST["consent_contact"] ?? "") === "yes") ? "Yes" : "No";
$consent_store   = (($_POST["consent_store"] ?? "") === "yes") ? "Yes" : "No";

$to = getenv("CONTACT_FORM_TO") ?: getenv("CONTACT_TO_EMAIL") ?: "";
$to = filter_var(trim($to), FILTER_SANITIZE_EMAIL);

$to_lower = strtolower($to);
$example_suffix = "@example.com";
$has_example_suffix = substr($to_lower, -strlen($example_suffix)) === $example_suffix;

if (!filter_var($to, FILTER_VALIDATE_EMAIL) || $has_example_suffix) {
  redirect_with_status("config");
}

$safe_topic = htmlspecialchars($topic, ENT_QUOTES, "UTF-8");
$safe_name = htmlspecialchars($name, ENT_QUOTES, "UTF-8");
$safe_message = htmlspecialchars($message, ENT_QUOTES, "UTF-8");

$subject = "New Contact Form Submission: " . $safe_topic;

$body  = "You have received a new message from your website:\n\n";
$body .= "Name: " . $safe_name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Topic: " . $safe_topic . "\n\n";
$body .= "Message:\n" . $safe_message . "\n\n";
$body .= "Consent to contact: " . $consent_contact . "\n";
$body .= "Consent to store/process: " . $consent_store . "\n";
$body .= "IP Address: " . ($_SERVER["REMOTE_ADDR"] ?? "unknown") . "\n";

$host = strtolower($_SERVER["HTTP_HOST"] ?? "localhost");
$host = preg_replace("/:\d+$/", "", $host);
if (!preg_match("/^[a-z0-9.-]+$/i", $host)) {
  $host = "localhost";
}
$from_email = "no-reply@" . $host;

$headers  = "From: Keys Heavy Towing Website <" . $from_email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($to, $subject, $body, $headers);

if ($sent) {
  redirect_with_status("success");
}

redirect_with_status("error");
