<?
	if (isset($_POST['team'])) {

		$IA['ProjID'] = $_POST["ProjectID"];
		$IA['Category'] = $_POST["categorySelector"];
		$IA['Project'] = $_POST["team"];

		$i = 1;
		foreach ($_POST['name'] as $name ) {
			${'UserName' . $i} = $name;
			$i++; 
		}

		$NumPeople = $i - 1;

		$IA['NumPeople'] = $NumPeople;

		$i = 1;

		foreach( $_POST['email'] as $email ){
	  		${'UserEmail' . $i} = $email;
	  		$i++;
		}

		for ($i = 1; $i <= $NumPeople; $i++) {
			$User['Name'] = ${'UserName' . $i};
			$User['Email'] = ${'UserEmail'. $i};

			if ($i == 1) {
				$User['Phone'] = $_POST["cellphone1"];
			}else{
				$User['Phone'] = '';
			}

			$Users[] = $User;
		}

		$IA['Users'] = $Users;

		$IA['Description'] = $_POST["projectDescription"];

		$FileName = $_POST["ProjectID"];

		$Proj = $FileName . '.zip';

		$LinkProj = 'http://www.innovation.awards.pt/files/Proj/' . $Proj;

		$IA['ProjectDir'] = $LinkProj;

		if (!file_exists('../files/JSON/' . $FileName . '.json')) {
		    $type = 'Update';
		}else{
			$type = 'Submit';
		}

		file_put_contents('../files/JSON/' . $FileName . '.json', json_encode($IA, JSON_UNESCAPED_UNICODE));
		
		/*//Email Registado:
		if ($type == 'Submit') {
			$message = 'Caro(a) sr(a). ' . $UserName1 .' o seu projecto encontra-se inscrito no evento ';
			$Subject = 'Registo Innovation Awards';
			$headers = 'From: Innovation-awards <innovation@awards.pt>';
			mail($UserEmail1, $Subject, $message, $headers);
		}*/
		

		//Email Developer:
		if ($type == 'Submit') {
			$message = '[Nova Inscrição][' . $_POST["categorySelector"] . '][' . $_POST["team"] . ']';
			$Subject = '[Nova Inscrição][' . $_POST["categorySelector"] . ']';
		}else{
			$message = '[Update][' . $_POST["categorySelector"] . '][' . $_POST["team"] . ']';
			$Subject = '[Update][' . $_POST["categorySelector"] . ']';
		}

		//Email to IA people
		/*$headers = 'From: Innovation-awards <innovation@awards.pt>';
		$to = 'miguel.araujo@sinfo.org';
		mail($to, $Subject, $message, $headers);

		if($_POST["roleType"] != 'Admin'){
			//Email People for Innovation Awards:
			$to = 'innovation@awards.pt';
			if ($type == 'Submit') {
				$message = "
				<html>
				<head>
				  <title>Inscrição IA</title>
				</head>
				<body>
					<p>Novo registo na categoria " . $_POST["categorySelector"] . ", projecto: " . $_POST["team"] . ".</p>
					<p>ver registo no dashboard</p>
				</body>
				</html>
				";
			}else{
				$message = "
				<html>
				<head>
				  <title>Update IA</title>
				</head>
				<body>
					<p>Update na categoria " . $_POST["categorySelector"] . ", projecto: " . $_POST["team"] . ".</p>
					<p>ver registo no dashboard</p>
				</body>
				</html>
				";
			}
			// To send HTML mail, the Content-type header must be set
			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
			// Additional headers
			$headers .= 'From: Innovation-awards <miguel.f.araujo@tecnico.ulisboa.pt>' . "\r\n";
			//Send
			mail($to, $Subject, $message, $headers);
		}*/

	}

?>