<?php
	$fileName = $_FILES["fileToUpload"]["name"]; // The file name
	$fileTmpLoc = $_FILES["fileToUpload"]["tmp_name"]; // File in the PHP tmp folder
	$fileType = $_FILES["fileToUpload"]["type"]; // The type of file it is
	$fileSize = $_FILES["fileToUpload"]["size"]; // File size in bytes
	$fileErrorMsg = $_FILES["fileToUpload"]["error"]; // 0 for false... and 1 for true
	if (!$fileTmpLoc) { // if file not chosen
	    echo "ERROR: Please browse for a file before clicking the upload button.";
	    exit();
	}

	$NewFileName = md5($_POST['id']);

	copy($fileTmpLoc,"../files/Proj/$fileName");

	rename("../files/Proj/$fileName","../files/Proj/$NewFileName.zip");
?>