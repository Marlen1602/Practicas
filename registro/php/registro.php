<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
</head>
<body>
    <?php
    $nombre=$_POST['Nombre'];
    $usuario=$_POST['usuario'];
    $correo=$_POST['correo'];
    $telefono=$_POST['Telefono'];
    $genero=$_POST['Genero'];
    $fechanac=$_POST['Fecha'];
    ?>
    <h1>Datos registrados</h1>
    <h3>Nombre: <?php echo($nombre) ?> </h3>
    <h3>Nombre del usuario: <?php echo($usuario) ?> </h3>
    <h3>Correo electronico: <?php echo($correo) ?> </h3>
    <h3>Telefono:<?php echo($telefono) ?> </h3>
    <h3>Genero: <?php echo($genero) ?> </h3>
    <h3>Fecha de nacimiento: <?php echo($fechanac) ?> </h3>
    
</body>
</html>