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
        <form method="post">
            <input type="text" placeholder="Brukernavn" class="inloggingInput" name="brukernavn"><br>
            <input type="text" placeholder="Passord" class="inloggingInput" name="passord"><br>
            <input type="submit" class="inloggingInput" value="Registrer" name="submit"><br>
        </form>
        <a href="index.html">Klikk her for å logge deg in123.</a>


        <?php
			if(isset($_POST['submit'])){
				
				//Gjøre om POST-data til variabler
				$brukernavn = $_POST['brukernavn'];
				$passord = $_POST['passord'];

				
				//Opprette kobling
				$kobling = new mysqli('localhost', 'root', '', 'rpgdb2');
				
				//Sjekk om kobling virker
				if ($kobling->connect_error) {
					die("Noe gikk galt: " . $kobling->connect_error);
				}

				//Angi UTF-8 som tegnsett
				$kobling->set_charset("utf8");


				//Gjøre klar SQL-strengen
				$sql = "INSERT INTO brukere VALUES ('$brukernavn','$passord')";
              
				if ($kobling->query($sql)) {
					echo "bruker lagt til"; // Oppdaterer siden så de nye resultatene blir vist
				} else {
					echo "Noe gikk galt med spørringen $sql ($kobling->error).";
				}

				$kobling -> close();
			}
		?>


    </div>
    <script src="script.js"></script>
</body>
</html>
