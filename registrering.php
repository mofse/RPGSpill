<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheet.css">
    <title>RPG Spill</title>
</head>
<body>
    <div class="inloggCont">
        <h1>RPG Spill</h1>
        <h4>Registrer en bruker</h4>
        <form action="">
            <input type="text" placeholder="Brukernavn" class="inloggingInput" name="brukernavn"><br>
            <input type="text" placeholder="Passord" class="inloggingInput" name="passord"><br>
            <input type="submit" class="inloggingInput" value="Registrer"><br>
        </form>
        <a href="index.html">Klikk her for å logge deg in.</a>


        <?php
			if(isset($_POST['submit'])){
				
				//Gjøre om POST-data til variabler
				$brukernavn = $_POST['brukernavn'];
				$passord = $_POST['passord'];

				
                //Koble til databasen 
                $dbc = mysqli_connect('localhost', 'root', '', 'rpgdb2')
                or die('error connecting to MySQL server');

				//Gjøre klar SQL-strengen
				$query = "INSERT INTO brukere VALUES ('$brukernavn','$passord')";


				//Utføre spørringen
				$result = mysqli_query($dbc, $query)
				or die('Error querying database.');

				
				//Koble fra databasen
				mysqli_close($dbc);
                
				//Sjekke om spørringen gir resultater
				if($result){
					//Gyldig login
					echo "Takk for at du lagde bruker!";

				}else{
					//Ugyldig login
					echo "Feil brukernavn eller passord";
				}
			}
		?>


    </div>
    <script src="script.js"></script>
</body>
</html>