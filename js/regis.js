var hasError = true;

$(".formInsc").hide();
$(".InsMade").hide();
$("#Inscrever").click(function() {
	$(".InsButton").hide();
	$(".formInsc").show();});
$("#categorySelector").change();
$("#categorySelector").change(function(){
	$("#ErrorCategorySel").text("");});
$("#team").blur(function(){
	if(this.value == ""){ $("#ErrorProjectname").text("Este campo é obrigatorio");}
	else{ 
		$("#ErrorProjectname").text("");}
		var Category = document.getElementById('categorySelector').value;
		var GroupName = this.value;

		if (Category == "Escolhe a categoria") {
			$("#ErrorCategorySel").text("Este campo é obrigatorio"); return;
		}else{

			$("#ErrorCategorySel").text("");

	    var RightFileName = Category.toUpperCase();
	    GroupName = $.trim(GroupName);
	    GroupName = GroupName.replace(/ /gi, '_');
	    RightFileName = RightFileName + "_" + GroupName.toUpperCase();

	    $("#RightFileName").text(RightFileName + ".zip ");
}});

//Add new members:
var NumElementos = 1

$("#AddMember").click(function() {
	NumElementos++;
	$('#elements').append(' <div id="element' + NumElementos + '" class="row half">	<h2>' + NumElementos + 'º Elemento</h2><div class="row"><div class="6u"><input type="text" class="text" id="name' + NumElementos + '" name="name[]" placeholder="Nome" /><span id="Errorname' + NumElementos + '"></span></div><div class="6u"><input type="text" class="text" id="email' + NumElementos + '" name="email[]" placeholder="Email" /><span id="Erroremail' + NumElementos + '"></span></div></div></div>');
});

//Check if "Elementos" is filled correctly:
var emailForm = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phoneForm = /^[+-]?([0-9]{1,5})?\s?([0-9]{9,12})+$/;

$('#elements').on('blur','.text',function(){
	var id = $(this).attr('id');
	if($.trim(this.value) == ""){ 
		$("#Error" + id).text("Este campo é obrigatorio");
	}else if(id.search("email") >= 0){
		if(!emailForm.test($.trim(this.value))){$("#Error" + id).text("Email tem o formato errado");}
		else{$("#Error" + id).text("");}
	}else if(id.search("cellphone") >= 0){
		if(!phoneForm.test($.trim(this.value))){$("#Error" + id).text("Numero de telemovel tem o formato errado");}
		else{$("#Error" + id).text("");}
	}else{ $("#Error" + id).text("");}
});

//Check if "Detalhe do projecto" is filled:
$("#projectDescription").blur(function(){
	if(this.value == ""){ $("#ErrorProjectDescription").text("Este campo é obrigatorio");}
	else{ $("#ErrorProjectDescription").text("");}});


//Check Upload doc
function fileSelected() {
  var file = document.getElementById('fileToUpload').files[0];

  if (file) {

  	 //Cheack File extention:
		 	var FileName = file.name;
		 	var FileExt = FileName.split('.')[FileName.split('.').length - 1].toLowerCase();

		 	document.getElementById('ProjfileType').innerHTML = 'Type: ' + FileExt;
		 	
		 	if( FileExt != 'zip'){
		 			$("#ErrorUploadProjecto").text("O ficheiro tem a extenção errada");
		 			return;
		 	}else{
		 		 $("#ErrorUploadProjecto").text("");
		 	}

 			//Check File name:
				var Category = document.getElementById('categorySelector').value;
				var GroupName = document.getElementById('team').value;

				if((Category == "") || (GroupName == "")){
						$("#ErrorUploadProjecto").text("Por favor preencha os campos acima primeiro");
						return;
				}else{

				  $("#ErrorUploadProjecto").text("");

			    var RightFileName = Category.toUpperCase();
			    GroupName = $.trim(GroupName);
			    GroupName = GroupName.replace(/ /gi, '_');
			    RightFileName = RightFileName + "_" + GroupName.toUpperCase();

			    var FileNameSize = FileName.length;
			    var EndCut = FileNameSize - 4;
			    var FileName = FileName.substring(0,EndCut);
			    var ExpectedFileWithExt = file.name;

			    document.getElementById('ProjfileName').innerHTML = 'Name: ' + FileName;

		 			if(FileName != RightFileName){
				 			$("#ErrorUploadProjecto").text("O ficheiro tem o nome errado");
				 			return;
				 	}else{
				 		 $("#ErrorUploadProjecto").text("");
				 	}
				}

  		//Check File size:
    var fileSize = 0;
    if (file.size > 1024 * 1024){
	    	fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString();
	  				
	  		document.getElementById('ProjfileSize').innerHTML = 'Size: ' + fileSize;

  				if (fileSize > 100) {
  						$("#ErrorUploadProjecto").text("O ficheiro excede os 100Mb");
  						return;
  				}else {
  					 $("#ErrorUploadProjecto").text("");
  				}

  				fileSize = fileSize + 'Mb';
    }else
      fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'Kb';

    document.getElementById('ProjfileSize').innerHTML = 'Size: ' + fileSize;

    $(".ButtonUp").show();
  }
}
var ProjUp = false;

function uploadFile(){

	var file = document.getElementById('fileToUpload').files[0];

	$(".ButtonUp").hide();

	if (file) {
		var form = new FormData(file);
	  form.append("fileToUpload", file);
	  var ajax = new XMLHttpRequest();
		ajax.upload.addEventListener("progress", progressHandler, false);
		ajax.addEventListener("load", completeHandler, false);
		ajax.addEventListener("error", errorHandler, false);
		ajax.addEventListener("abort", abortHandler, false);
		ajax.open("POST", "Upload.php");
		ajax.send(form);
	}
}

function progressHandler(evt) {
  if (evt.lengthComputable) {
    var percentComplete = Math.round(evt.loaded * 100 / evt.total);
    document.getElementById('UploadFile').innerHTML = "Upload progress:" + percentComplete.toString() + '%';
  }
  else {
    //document.getElementById('progressNumber').innerHTML = 'unable to compute';
  }
}

function completeHandler(evt) {
  //This event is raised when the server send back a response
  $('#UploadFile').css({ 'color': 'green', 'font-size': '150%' });
  document.getElementById('UploadFile').innerHTML = "Uploaded!";
  ProjUp = true;
}

function errorHandler(evt) {
	$(".ButtonUp").show();
  alert("There was an error attempting to upload the file.");
}

function abortHandler(evt) {
	$(".ButtonUp").show();
  alert("The upload has been canceled by the user or the browser dropped the connection.");
}

$("#ajaxform").submit(function(form){

	form.preventDefault();

	if (ProjUp) {
	    var formInput = $("#ajaxform").serialize();
	    $.post($("#ajaxform").attr('action'),formInput, function(data){
	      	$(".formInsc").hide();
			$(".InsMade").show();
	    });		
	}


    return false;
});