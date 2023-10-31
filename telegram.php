<?php

/* https://api.telegram.org/6306369734:AAGYOxhNFWi1fcQRwkitB80j6j9sVgL6H_Y/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "6306369734:AAGYOxhNFWi1fcQRwkitB80j6j9sVgL6H_Y";
$chat_id = "-1001899281714";
$txt = '';
$arr = array(
	'Замовлення "Гірлянда"',
  	'Имя пользователя: ' => $name,
  	'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

  if ($sendToTelegram) {
    header('Location: thank-you.html');
  } else {
    $lastError = error_get_last();
    $errorMessage = isset($lastError['message']) ? $lastError['message'] : 'Невідома помилка';
    echo "Помилка: " . $errorMessage;
  }
?>