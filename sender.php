
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Подключение PHPMailer
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Проверка наличия и получение данных из формы
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $surname = isset($_POST['surname']) ? $_POST['surname'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $text = isset($_POST['text']) ? $_POST['text'] : '';

    // Проверка наличия обязательных данных
    if (empty($name) || empty($email) || empty($text)) {
        echo "Заполните все обязательные поля.";
    } else {
        try {
            // Создание объекта PHPMailer
            $mail = new PHPMailer(true);

            // Настройки SMTP сервера (замените на свои данные)
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'email'; // Замените на вашу почту
            $mail->Password = 'password from email'; // Замените на ваш пароль
            $mail->SMTPSecure = 'tls'; // или 'ssl' в зависимости от сервера
            $mail->Port = 587; // или другой порт, подходящий для вашего SMTP сервера
            $mail->CharSet = 'UTF-8';

            // Отправитель и получатель
            $mail->setFrom('email = Username', 'from site'); // Замените на свои данные
            $mail->addAddress('email = Username', 'Recipient Name'); // Замените на адрес получателя

            $mail->Subject = 'Заявка с сайта';
            $mail->isHTML(true); // Включаем HTML-форматирование

            // Тема и содержимое письма
            $mail->Subject = 'Заявка с сайта';
            $mail->Body = $mail->Body = "<h2 class='title'>Необходимо обработать заявку с сайта!</h2>"
            . "<p><strong>Имя:</strong> $name</p>"
            . "<p><strong>Фамилия:</strong> $surname</p>"
            . "<p><strong>Телефон:</strong> $phone</p>"
            . "<p><strong>Почта:</strong> $email</p>"
            . "<p><strong>Текст:</strong> $text</p>";
            $mail->AltBody = 'Заявка с сайта';

            // Отправка письма
            $mail->send();
            echo "Данные успешно отправлены.";
        } catch (Exception $e) {
            echo 'Произошла ошибка при отправке данных: ' . $e->getMessage();
        }
    }
} else {
    // Если запрос не является POST-запросом, вы можете обработать это здесь
    echo "Недопустимый метод запроса.";
}
?>

