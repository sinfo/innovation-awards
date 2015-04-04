<?

	if(isset($_POST['userID']))	{

		//Check for admin
		$userID = $_POST['userID'];

		if (($userID == '955612834478997') || ($userID == '1022447141117678')) {

			$dir = "../files/JSON";
			$dh  = opendir($dir);

			$i = 1;
			while (false !== ($filename = readdir($dh))) {
				 if (($filename != '.' )&&($filename != '..')&&($filename != 'BUSINESS_GESTO.json')&&($filename != 'LIFESTYLE_SOCORRISMO.json')) {
				 	$Project['File'] = $filename;
				 	$i++;
				 	$Projects[] = $Project;
				 }				 
			}

			$files['Projects'] = $Projects;

			$files['NumOfFiles'] = count($Projects);

			echo json_encode($files);
		}
	}
?>