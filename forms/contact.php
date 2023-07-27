<?php
// Set the recipient email address
$to = "rahul.p@3rddigital.com";

// Set the subject of the email
$subject = "Test Email";

// Set the email message
$message = "This is a test email sent using PHP with a custom SMTP server.";

// SMTP server settings
$smtpServer = 'smtp-relay.brevo.com';
$smtpPort = 587; // Change this to the appropriate port for your SMTP server
$smtpUsername = 'parmarrahul536@gmail.com';
$smtpPassword = 'xsmtpsib-bd052964d2a9ada143f1c85d78ced7627b501171a25dbc35ec39d3627867bedb-GTYACkNyWJqzOSIn';

// Create the SMTP connection
$smtpConn = fsockopen($smtpServer, $smtpPort, $errno, $errstr, 30);

if (!$smtpConn) {
  echo "SMTP Connection failed: $errstr ($errno)";
  exit;
}

// Wait for the SMTP server's welcome message
fread($smtpConn, 4096);

// Send the EHLO/HELO command
fwrite($smtpConn, "EHLO example.com\r\n");
fread($smtpConn, 4096);

// If your SMTP server requires TLS encryption, uncomment the following lines:
// fwrite($smtpConn, "STARTTLS\r\n");
// fread($smtpConn, 4096);

// If your SMTP server requires authentication, uncomment the following lines:
// fwrite($smtpConn, "AUTH LOGIN\r\n");
// fread($smtpConn, 4096);
// fwrite($smtpConn, base64_encode($smtpUsername) . "\r\n");
// fread($smtpConn, 4096);
// fwrite($smtpConn, base64_encode($smtpPassword) . "\r\n");
// fread($smtpConn, 4096);

// Send the MAIL FROM command
fwrite($smtpConn, "MAIL FROM: <sender@example.com>\r\n");
fread($smtpConn, 4096);

// Send the RCPT TO command
fwrite($smtpConn, "RCPT TO: <$to>\r\n");
fread($smtpConn, 4096);

// Send the DATA command
fwrite($smtpConn, "DATA\r\n");
fread($smtpConn, 4096);

// Send the email headers and body
fwrite($smtpConn, "From: parmarrahul536@gmail.com\r\n");
fwrite($smtpConn, "To: $to\r\n");
fwrite($smtpConn, "Subject: $subject\r\n");
fwrite($smtpConn, "MIME-Version: 1.0\r\n");
fwrite($smtpConn, "Content-type: text/plain; charset=utf-8\r\n");
fwrite($smtpConn, "\r\n");
fwrite($smtpConn, $message . "\r\n");

// Send the termination sequence
fwrite($smtpConn, ".\r\n");
fread($smtpConn, 4096);

// Send the QUIT command
fwrite($smtpConn, "QUIT\r\n");
fread($smtpConn, 4096);

// Close the SMTP connection
fclose($smtpConn);

echo "Email sent successfully!";
?>
