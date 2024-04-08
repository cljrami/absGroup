<?php

// Validar campos
if (empty($_POST['nombre']) || empty($_POST['email']) || empty($_POST['mensaje'])) {
    echo "Todos los campos son obligatorios.";
    exit;
}

// Sanitizar datos
$nombre = filter_var($_POST['nombre'],);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$mensaje = filter_var($_POST['message'],);

// Configurar correo electrónico
$destinatario = "tucorreo@dominio.com";
$asunto = "Formulario de contacto";
$cuerpo = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";

// Enviar correo electrónico
mail($destinatario, $asunto, $cuerpo);

// Redireccionar a otra página según el tipo de mensaje
if ($_POST['tipo-mensaje'] === "contacto") {
    header("Location: pagina-de-exito-contacto.html");
} else {
    header("Location: https://www.emol.com");
}
