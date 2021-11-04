
<html>
   <head>
      <meta charset="utf-8">
     
      <title>IMC con PHP</title>
       
   </head>
   <body>
   <form action="index.php" method="post">
  <p>Peso en kg: <input type="text" name='peso' id="peso" placeholder="Ingresa tu peso en kg" /></p>
  <p>Estatura en metros: <input type="text" name='estatura' id="peso" placeholder="Ingresa tu estatura en metros" /></p>
  <p><input type="submit" name="submit" value="Calcular IMC" /></p>
</form>
<?php 
    $resultado = 0;
    $peso = isset($_POST["peso"]) ? $_POST["peso"]:null;
    $estatura = isset($_POST["estatura"]) ? $_POST["estatura"]:null;
    if($estatura != 0){
        $resultado = $peso / pow($estatura, 2);
        
        if($resultado < 18.50){
            echo "Peso: $peso <br>";
            echo "Estatura: $estatura <br>";
            echo "IMC: $resultado <br>";
            echo "Tiene bajo peso <br>";
        }
        if($resultado < 24.99){
            echo "Peso: $peso <br>";
            echo "Estatura: $estatura <br>";
            echo "IMC: $resultado <br>";
            echo "Tiene peso normal <br>";
        
        }
        if($resultado > 24.99){
            echo "Peso: $peso <br>";
            echo "Estatura: $estatura <br>";
            echo "IMC: $resultado <br>";
            echo "Usted tiene sobrepeso <br>";
        }
        if($resultado > 30){
            echo "Peso: $peso <br>";
            echo "Estatura: $estatura <br>";
            echo "IMC: $resultado <br>";
            echo "Usted entra en la categoria de obeso <br>";
        }
    }

    

    
?>
   </body>
</html>