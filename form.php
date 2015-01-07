<?

		$C = $GN = $NE = $EN1 = $EN2 = $EN3 = $EN4 = $EE1 = $EE2 = $EE3 = $EE4 = $EP1 = $PD = "";

		$C = $_POST["categorySelector"];
		$GN = $_POST["team"];
		$NE = $_POST["elementsSelector"];
		$EN1 = $_POST["name1"];
		$EE1 = $_POST["email1"];
		$EP1 = $_POST["cellphone1"];
		$EN2 = $_POST["name2"];
		$EE2 = $_POST["email2"];
		$EN3 = $_POST["name3"];
		$EE3 = $_POST["email3"];
		$EN4 = $_POST["name4"];
		$EE4 = $_POST["email4"];
		$PD = $_POST["projectDescription"];


		$GNU = strtoupper($GN);
		$GNU = str_replace(' ','_',$GNU);
		$CU = strtoupper($C);

		$Proj = $CU . '_' . $GNU . '.zip';
		$Dec = 	$CU . '_' . $GNU . '.pdf';	

		$LinkProj = 'http://www.innovation.awards.pt/files/Proj/' . $Proj;

		$LinkDec = 'http://www.innovation.awards.pt/files/Docs/' . $Dec;

		function verification($data) {
		  	$data = trim($data);
		 	$data = stripslashes($data);
		 	$data = htmlspecialchars($data);
		 	return $data;
		}

		if ($NE >= 2) {
			$ExtraLine = '<br><li>Elemento 2: ' . $EN2 .'; </li><li>Email: ' . $EE2 .'; </li>';

			if ($NE >= 3) {
				$ExtraLine .='<br><li>Elemento 3: ' . $EN3 .'; </li><li>Email: ' . $EE3 .'; </li>';
				
				if ($NE == 4) {
					$ExtraLine .='<br><li>Elemento 4 ' . $EN4 .'; </li><li>Email: ' . $EE4 .'; </li>';
				}else {
					$ExtraLine .= '';
				}
			}else {
				$ExtraLine .= '';
			}
		}else {
			$ExtraLine = '';
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
				<li>Elemento responsavel: " . $EN1 ."; </li>
				<li>Email: " . $EE1 ."; </li>
				<li>Telemovel: " . $EP1 . ";</li>"
				. $ExtraLine .
			"</ul>
			<p>Descrição do projecto: </p>"
			. $PD .
			"<br>
			<p>Link Projecto: </p>
			<p><a href='http://www.innovation.awards.pt/files/Proj/" . $Proj . "'>" . $LinkProj . "</a></p>
			<p>Documento assinado: </p>
			<p><a href='http://www.innovation.awards.pt/files/Docs/" . $Dec . "'>" . $LinkDec . "</a></p>
		</body>
		</html>
		";
		// To send HTML mail, the Content-type header must be set
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		// Additional headers
		$headers .= 'From: Miguel <miguel.f.araujo@tecnico.ulisboa.pt>' . "\r\n";
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