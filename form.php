<?
	$C = $_POST["categorySelector"];
	$GN = $_POST["team"];
	$EP1 = $_POST["cellphone1"];

	$num = 0;
	$i = 0;
	foreach( $_POST['name'] as $field ){
  		$EN[$i] = $field;
  		$num++;
  		$i++;
	}

	$i = 0;
	foreach( $_POST['email'] as $field ){
  		$EE[$i] = $field;
  		$i++;
	}

	$PD = $_POST["projectDescription"];

	$GNU = strtoupper($GN);
	$GNU = str_replace(' ','_',$GNU);
	$CU = strtoupper($C);

	$JSON = $CU . '_' . $GNU;

	$Proj = $JSON . '.zip';

	$LinkProj = 'http://www.innovation.awards.pt/files/Proj/' . $Proj;

	if (!file_exists('files/JSON/')) {
	    mkdir('files/JSON/', 0777, true);
	}

	$content = '';
	for ($i=0; $i < $num; $i++) { 
		$content .= '{"Nome":"' . $EN[$i] . '","Email":"' . $EE[$i] . '"';
		if ($i == 0) {
			$content .= ',"Telemovel":"' . $EP1 . '"';
		}
		if ($i == $num - 1) {
			$content .= '}';
		}else{
			$content .= '},';	
		}
	}

	$ProjFile = '{"Projecto":"' . $GN . '","Categoria":"' . $C . '","Elementos":[' . $content . '],"Descricao":"' . $PD . '"}';

	file_put_contents('files/JSON/' . $JSON . '.json', json_encode($ProjFile));


	$ExtraLine = '';

	for ($i=1; $i < $num; $i++) { 
		$ExtraLine .='<br><li>Elemento' . $i .': ' . $EN[$i] .'; </li><li>Email: ' . $EE[$i] .'; </li>';
	}
	
	//Email Cliente:
	$message = 'Caro(a) sr(a). ' . $EN[0] .' o seu projecto encontra-se inscrito no evento ';
	$Subject = 'Registo Innovation Awards';
	$headers = 'From: Innovation-awards <innovation@awards.pt>';
	mail($EE[0], $Subject, $message, $headers);
	//Email Cliente:
	$message = '[Nova Inscrição][' . $C . '][' . $GN . ']';
	$Subject = '[Nova Inscrição][' . $C . ']';
	$headers = 'From: Innovation-awards <innovation@awards.pt>';
	$to = 'miguel.araujo93@gmail.com'
	mail($to, $Subject, $message, $headers);
	//Email IA:
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
		<p>Numero de elementos: " . $num . "; </p>
		<p>Dados: </p>
		<ul>
			<li>Elemento responsavel: " . $EN[0] ."; </li>
			<li>Email: " . $EE[0] ."; </li>
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
	$headers .= 'From: Innovation-awards <miguel.f.araujo@tecnico.ulisboa.pt>' . "\r\n";
	//Send
	mail($to, $Subject, $message, $headers);

?>