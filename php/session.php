<?
	if(isset($_POST['userID']))
	{
		$userID = $_POST['userID'];

		if (($userID == '955612834478997') || ($userID == '1022447141117678')) {
			$Session['Type'] = 'Admin';
		}else{
			$Session['Type'] = 'User';
		}

		$userID = md5($userID);

		$Session['ID'] = $userID;

		if (file_exists('../files/JSON/' . $userID .'.json')) {
		    $Session['Registo'] = 'Sim';		    
		}else{
			$Session['Registo'] = 'Nao';
		}

	    echo json_encode($Session);

	}

?>