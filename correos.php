<?php
    $destinatario = 'nbermudez125@gmail.com';
    // esto es al correo al que se enviara el mensaje
    $nombre = $_POST['nombre'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    $email = $_POST['email']

    $header = "Enviado desde la pàgina de Artesana's";
    $mensajeCompleto = $mensaje . "\nAtentamente:" . $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='contatos.html'\",1000)</script>";

?>