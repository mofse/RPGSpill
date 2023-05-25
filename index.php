<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheet.css">
    <title>Login</title>
</head>
<body>
    <div class="inloggCont">
        <h1>RPG Spill</h1>
        <h4>Logg deg in her</h4>
        <form method="post" action="index.php">
            <input type="text" placeholder="Brukernavn" class="inloggingInput" name="brukernavn"><br>
            <input type="password" placeholder="Passord" class="inloggingInput" name="passord"><br>
            <input type="submit" class="inloggingInput" value="Login" name="submit"><br>
        </form>
        <a href="registrering.php">Klikk her for å registrere en bruker.</a>
        <p>Laget av Håkon Hydle</p>
    </div>
    <?php
    include_once 'config.php';
        if(isset($_POST['submit'])){

            //Sjekk om kobling virker
            if ($kobling->connect_error) {
                die("Noe gikk galt: " . $kobling->connect_error);
            }
            
            $brukernavn = $_POST['brukernavn'];
            $passord = $_POST['passord'];
            
            $query = "SELECT brukernavn, passord from brukere where brukernavn='$brukernavn' and passord='$passord'";

            echo "query string: " . $query;
            $result = mysqli_query($kobling, $query)
            or die('Error querying database.');

            
            $kobling->set_charset("utf8");
            
            //Koble fra databasen
            mysqli_close($kobling);

            //Sjekke om spørringen gir resultater
            if($result->num_rows > 0){
                if($result->num_rows > 0){
                    //Gyldig login
                    echo "riktig probably";
                    session_start();
                    $_SESSION['brukernavn'] = $brukernavn;
                    $_SESSION['passord'] = $passord;
                    header('location: rpg.php');
                }else{
                    //Ugyldig login
                    echo "Feil brukernavn eller passord";
                }
            }
        }
    ?>
    <script src="script.js"></script>
</body>
</html>