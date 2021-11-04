<?php
    require 'conexion_bd.php';
    $valido = false;
    if(isset($_POST['aceptar'])){
        $usuario = $_POST['usuario'];
        $contrasena = $_POST['contrasena'];

        if(!valida_usuario_bd($usuario,$contrasena,$conexion)){
            $valido = false;
        }else{
            session_start();
            $valido = true;
            $_SESSION['usuario'] = $usuario;
            header('Location: index.php');
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Roux Academy - Login</title>
</head>
<body id="page_register">
    <div class="wrapper">

        <?php include 'includes/header.php'?>
    <!-- Rotator -->
    <section id="main">
        
    <article id="registrationform">
      <div class="div_login">
        <form method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
            <fieldset>
                <legend>Login</legend>
                <ol>
                    <li>
                    <input type="text" name="usuario" id="myname" autofocus placeholder="Usuario" required>
                    </li>
                    <li>
                    <input type="password" name="contrasena" id="companyname" placeholder="Contraseña">
                    </li>
                    
                <input type="submit" name="aceptar" value="Entrar">

                <?php
                    if(!$valido&&isset($_POST['aceptar'])){
                        echo '<p>Usuario y/o contraseña no válido</p>';
                    }
                ?>
            </fieldset>
        </form>
      </div>
    </article>

    </section>
    <!-- maincontent -->
    
    <?php include 'includes/footer.php' ?>
    </div>
</body>
</html>