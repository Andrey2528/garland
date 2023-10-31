<?php
$botToken = '6306369734:AAGYOxhNFWi1fcQRwkitB80j6j9sVgL6H_Y';
$chatId = '-1001899281714';
$message = 'Новое сообщение из формы обратной связи: ' . $_POST['message'];

$telegramApiUrl = 'https://api.telegram.org/bot' . $botToken . '/sendMessage';

$ch = curl_init($telegramApiUrl);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
    'chat_id' => $chatId,
    'text' => $message,
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

if ($response) {
    echo 'Сообщение успешно отправлено в Telegram!';
} else {
    echo 'Ошибка при отправке сообщения в Telegram.';
}
?>
