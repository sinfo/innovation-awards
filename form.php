<?

		$C = $GN = $NE = $EP1 = $PD = "";
		$EN = [];
		$EE = [];

		$C = $_POST["categorySelector"];
		$GN = $_POST["team"];
		$NE = $_POST["elementsSelector"];
		$EN[1] = $_POST["name1"];
		$EE[1] = $_POST["email1"];
		$EP1 = $_POST["cellphone1"];
		$EN[2] = $_POST["name2"];
		$EE[2] = $_POST["email2"];
		$EN[3] = $_POST["name3"];
		$EE[3] = $_POST["email3"];
		$EN[4] = $_POST["name4"];
		$EE[4] = $_POST["email4"];
		$EN[5] = $_POST["name5"];
		$EE[5] = $_POST["email5"];
		$EN[6] = $_POST["name6"];
		$EE[6] = $_POST["email6"];
		$EN[7] = $_POST["name7"];
		$EE[7] = $_POST["email7"];
		$EN[8] = $_POST["name8"];
		$EE[8] = $_POST["email8"];
		$EN[9] = $_POST["name9"];
		$EE[9] = $_POST["email9"];
		$PD = $_POST["projectDescription"];


		$GNU = strtoupper($GN);
		$GNU = str_replace(' ','_',$GNU);
		$CU = strtoupper($C);

		$Proj = $CU . '_' . $GNU . '.zip';

		$LinkProj = 'http://www.innovation.awards.pt/files/Proj/' . $Proj;

		function verification($data) {
		  	$data = trim($data);
		 	$data = stripslashes($data);
		 	$data = htmlspecialchars($data);
		 	return $data;
		}

		$ExtraLine = '';

		for ($i=2; $i <= $NE ; $i++) { 
			$ExtraLine .='<br><li>Elemento' . $i .': ' . $EN[$i] .'; </li><li>Email: ' . $EE[$i] .'; </li>';
		}

		//Email Rita:
		$message = 'Caro(a) sr(a). ' . $EN1 .' o seu projecto encontra-se inscrito no evento ';
		$Subject = 'Registo Innovation Awards';
		$headers = 'From: Innovation-awards <innovation@awards.pt>';
		mail($EE1, $Subject, $message, $headers);
		//Email Cliente:
		$to = 'innovation@awards.pt';
	    $Subject = '[Nova Inscrição][' . $C . ']';
		$message = "
		<html>
		<head>
		  <title>Inscrição IA</title>
		</head>
		<body>
			<p>Novo registo na categoria " . $C . ", efectuou registo no evento IA </p>
			<br>
			<p><b>Dados dos registados:</b></p>
			<p>Nome do projecto:  " . $GN . "; </p>
			<p>Categoria: " . $C . "; </p>
			<p>Numero de elementos: " . $NE . "; </p>
			<p>Dados: </p>
			<ul>
				<li>Elemento responsavel: " . $EN[1] ."; </li>
				<li>Email: " . $EE[1] ."; </li>
				<li>Telemovel: " . $EP1 . ";</li>"
				. $ExtraLine .
			"</ul>
			<p>Descrição do projecto: </p>"
			. $PD .
			"<br>
			<p>Link Projecto: </p>
			<p><a href='http://www.innovation.awards.pt/files/Proj/" . $Proj . "'>" . $LinkProj . "</a></p>
		</body>
		</html>
		";
		// To send HTML mail, the Content-type header must be set
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		// Additional headers
		$headers .= 'From: Innovation-awards <innovation@awards.pt>' . "\r\n";
		//Send
		mail($to, $Subject, $message, $headers);


		/*if (!$fileTmpLoc) { // if file not chosen
		    echo "ERROR: Please browse for a file before clicking the upload button.";
		    exit();
		}
		if(move_uploaded_file($fileTmpLoc, "files/$fileName")){
		    echo "$fileName upload is complete";
		} else {
		    echo "move_uploaded_file function failed";
		}*/
?>