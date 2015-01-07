<?php
	$fileName = $_FILES["fileToUploadDoc"]["name"]; // The file name
	$fileTmpLoc = $_FILES["fileToUploadDoc"]["tmp_name"]; // File in the PHP tmp folder
	$fileType = $_FILES["fileToUploadDoc"]["type"]; // The type of file it is
	$fileSize = $_FILES["fileToUploadDoc"]["size"]; // File size in bytes
	$fileErrorMsg = $_FILES["fileToUploadDoc"]["error"]; // 0 for false... and 1 for true
	if (!$fileTmpLoc) { // if file not chosen
	    echo "ERROR: Please browse for a file before clicking the upload button.";
	    exit();
	}

	if (!file_exists('files/Docs/')) {
	    mkdir('files/Docs/', 0777, true);
	}

	if(copy($fileTmpLoc,"files/Docs/$fileName")){
	    echo $fileName . ' ' . $fileType . ' ' . $fileSize;

	    //"$fileName upload is complete";
	} else {
	    echo "move_uploaded_file function failed";
	}
?>