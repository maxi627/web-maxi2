<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Cargar la biblioteca PHPMailer
require "./PHPMailer-master/PHPMailer-master/src/Exception.php";
require "./PHPMailer-master/PHPMailer-master/src/PHPMailer.php";
require "./PHPMailer-master/PHPMailer-master/src/SMTP.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["email"];
    $consulta = $_POST["consulta"];

    // Nombre del archivo y ubicación temporal
    $archivo_nombre = isset($_FILES['archivo']) ? $_FILES['archivo']['name'] : '';
    $archivo_temporal = isset($_FILES['archivo']) ? $_FILES['archivo']['tmp_name'] : '';

    // Configurar la instancia de PHPMailer
    $mail = new PHPMailer(true); // Lanza excepciones en errores

    try {
        // Configurar el servidor SMTP de Hostinger
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'business@lamoro.services'; // Coloca aquí tu dirección de correo
        $mail->Password = 'Cano1234-'; // Coloca aquí tu contraseña
        $mail->SMTPSecure = 'tls'; // SSL Encryption
        $mail->Port = 587; // TSL Port

        // Configurar el remitente y el destinatario
        $mail->setFrom('business@lamoro.services', 'LaMoro Servicios y Montajes'); // Cambia esto si lo deseas
        $mail->addAddress('lamoroservicios@gmail.com', 'Destinatario'); // Coloca aquí la dirección del destinatario

        // Configurar el asunto y el contenido del correo electrónico
        $mail->Subject = "Consulta de $nombre $apellido";
        $mail->Body = "Nombre: $nombre\nApellido: $apellido\nCorreo electrónico: $email\nConsulta:\n$consulta";

        // Adjuntar el archivo si existe
        if (!empty($archivo_temporal)) {
            $mail->addAttachment($archivo_temporal, $archivo_nombre);
        }

        // Enviar el correo electrónico
        $mail->send();

        // Enviar mensaje de agradecimiento al correo ingresado en el formulario
        $nombre_remitente = "LaMoro Servicios y Montajes"; // Nombre que quieres que aparezca como remitente
        $direccion_remitente = "lamoroservicios@gmail.com"; // Dirección de correo electrónico del remitente
        $mensaje_agradecimiento = "Gracias por comunicarse con LaMoro Servicios y Montajes, a la brevedad será atendido por uno de nuestros expertos.";
        $header = "From: $nombre_remitente <$direccion_remitente>";
        mail($email, "Gracias por tu consulta", $mensaje_agradecimiento, $header);

        // Imprimir un mensaje de confirmación en la misma página
        echo "<p>¡El formulario se ha enviado correctamente!</p>";
        echo "<script>
                setTimeout(function() {
                    window.location.href = '/index.html';
                }, 5000); // Redirigir al inicio después de 5 segundos
              </script>";
    } catch (Exception $e) {
        // Registrar el error en el archivo de registro del servidor
        error_log("Error al enviar el correo electrónico: " . $mail->ErrorInfo);
        echo "El correo electrónico no pudo ser enviado. Error: {$mail->ErrorInfo}";
    }
}
?>
