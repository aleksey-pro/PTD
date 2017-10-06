<?php
// Файлы phpmailer
require 'lib/class.phpmailer.php';
require 'lib/class.smtp.php';

// Настройки
$mail = new PHPMailer;

$mail->isSMTP();
$mail->CharSet = 'UTF-8';
$mail->Host = 'mail.nic.ru';//smtp.yandex.ru
// $mail->SMTPAuth = true;
$mail->Username = '582767/NIC-D'; // anxieter Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'YpAt8NcBgE'; // 7a068ae29 Ваш пароль
// $mail->SMTPSecure = 'ssl';
$mail->Port = 25; //465
$mail->setFrom('postmaster@ptd.spb.ru'); //anxieter@yandex.ru  Ваш Email
$mail->addAddress('ptd@fgr.ru'); // Email получателя


$Mailer->SMTPDebug = 3;
$Mailer->SMTPDebug = 4;

// $mail->addAddress('aleksey.flce@gmail.com'); // Еще один email, если нужно.

// Прикрепление файлов если потребуется
 //  for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
	// 	$uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
	// 	$filename = $_FILES['userfile']['name'][$ct];
	// 	if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
	// 		$mail->addAttachment($uploadfile, $filename);
	// 	} else {
	// 		$msg .= 'Failed to move file to ' . $uploadfile;
	// 	}
	// }

// Письмо
$mail->isHTML(true);
$mail->Subject = "Заказ с сайта"; // Заголовок письма
//$mail->Body    = "Имя $name . Текст $text . Почта $email";  Текст письма

// Обход массива в случае select

// foreach($_POST['type'] as $k => $v) {
// 	if($v) {
// 		$type = $v;
// 	}
// }

// foreach($_POST['verstka'] as $k => $v) {
// 	if($v) {
// 		$verstka = $v;
// 	}
// }

// foreach($_POST['adaptive'] as $k => $v) {
// 	if($v) {
// 		$adaptive = $v;
// 	}
// }



$mail->Body = "Имя: {$_POST['name']}<br> Email: {$_POST['email']}<br> Телефон: {$_POST['phone']}<br> Сообщение: " . nl2br($_POST['mess']);

// Результат
if(!$mail->send()) {
	echo 'Message could not be sent.';
	echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
	echo 'ok';
}
?>
