var hasError = true;

$(".formInsc").hide();
$(".InsMade").hide();
$('.AdminPanel').hide();

$("#categorySelector").change(function(){
	$("#ErrorCategorySel").text("");}
);

/***********************************************
	Check Project Name and set Project 
***********************************************/

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

/***********************************************
	   			ADD NEW MEMBERS
***********************************************/
var NumElementos = 1

$("#AddMember").click(function() {
	NumElementos++;
	$('#elements').append(' <div id="element' + NumElementos + '" class="row half">	<h2>' + NumElementos + 'º Elemento</h2><div class="row"><div class="6u"><input type="text" class="text" id="name' + NumElementos + '" name="name[]" placeholder="Nome" /><span id="Errorname' + NumElementos + '"></span></div><div class="6u"><input type="text" class="text" id="email' + NumElementos + '" name="email[]" placeholder="Email" /><span id="Erroremail' + NumElementos + '"></span></div></div></div>');
});

/***********************************************
	   	  EMAIL & PHONE FORMAT CHECK
***********************************************/
var emailForm = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phoneForm = /^[+-]?([0-9]{1,5})?\s?([0-9]{9,12})+$/;

/***********************************************
	   		ELEMENTS INFO CHECK
***********************************************/

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

/***********************************************
	   		PROJECT INFO CHECK
***********************************************/

//Check if "Detalhe do projecto" is filled:
$("#projectDescription").blur(function(){
	if(this.value == ""){ $("#ErrorProjectDescription").text("Este campo é obrigatorio");}
	else{ $("#ErrorProjectDescription").text("");}
});


/***********************************************
	    CHECK FILE NAME, FORMAT & SIZE
***********************************************/

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

/***********************************************
				UPLOAD ZIP
***********************************************/

var ProjUp = false;

function uploadFile(){


	var file = document.getElementById('fileToUpload').files[0];
	var params = "id=" + sessionID;

	$(".ButtonUp").hide();

	if (file) {
		var form = new FormData(file);
	  form.append("fileToUpload", file);
	  form.append("id", sessionID);
	  var ajax = new XMLHttpRequest();
		ajax.upload.addEventListener("progress", progressHandler, false);
		ajax.addEventListener("load", completeHandler, false);
		ajax.addEventListener("error", errorHandler, false);
		ajax.addEventListener("abort", abortHandler, false);
		ajax.open("POST", "php/uploadProj.php");
		ajax.send(form);
	}
}

function progressHandler(evt) {
  if (evt.lengthComputable) {
    var percentComplete = Math.round(evt.loaded * 100 / evt.total);
    document.getElementById('UploadFile').innerHTML = "Upload progress:" + percentComplete.toString() + '%';
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

/***********************************************
				SUBMIT FORM
***********************************************/

$("#ajaxform").submit(function(form){

	form.preventDefault();

	if (ProjUp) {

	  $("#categorySelector").prop('disabled', false);
		$("#team").prop('disabled', false);

		console.log($("ajaxform").serialize());

	  var form = $("#ajaxform").serialize();
	  $.post($("#ajaxform").attr('action'),form, function(data){
	    $(".formInsc").hide();
			$(".InsMade").show();

			console.log(data);
	  });		
	}

    return false;
});

/***********************************************
				GET Project
***********************************************/

function GetProject(profileID){

	//Get project data
	$.getJSON( "files/JSON/" + profileID + ".json", function( content ) {
		
		//Fill form with json data:
		$('#ProjectID').val(profileID);
		$('#roleType').val(role);
    $("#categorySelector").val(content.Category);
    $('#team').val(content.Project);

    $("#categorySelector").prop('disabled', true);
    $("#team").prop('disabled', true);

    var NumPeople = content.NumPeople;
    var Users = content.Users;

    $('#name1').val(Users[0].Name);
    $('#email1').val(Users[0].Email);
    $('#cellphone1').val(Users[0].Phone);

    for (var i = 1; i < NumPeople; i++) {
    	$("#AddMember").click();
    	$('#name' + NumElementos).val(Users[i].Name);
    	$('#email' + NumElementos).val(Users[i].Email);
    };

		$('#projectDescription').val(content.Description);

		ProjUp = true;

		if (role == 'Admin') {

			$('#backOrReset').attr('type','back');
			$('#backOrReset').val('retroceder');
			$('#backOrReset').addClass('GetBack');

			$('#fileToUpload').hide();
			$(".ButtonUp").show();
			$("#UploadFicheiro").hide();
			$("#DownloadFicheiro").show();

			$('#DownloadFicheiro').attr("href", content.ProjectDir );
		};
		
  });
}

function GetFiles(profileID){

	$.ajax({
    url: 'php/getfiles.php',
    type: 'POST',
    dataType: 'json',
    data: { userID : profileID },
  })
  .done(function(data) {
  	displayFiles(data, profileID);
  });
}

function displayFiles(content, profileID){

	var Projects = content.Projects;

	for (var i = 0; i < content.NumOfFiles; i++) {

		$.getJSON( "files/JSON/" + Projects[i].File , function(info) {

			$('#listproj').append(' <div class="12u openProj" name="' + info.Category +'" id="UploadProjecto" style="margin-bottom: 10px;"><div class="12u FileInfo"><div class="12u FileInfo2"><div class="2u" id="fileName" style="margin-top: 13px;">'+ info.Category +'</div><div class="7u" id="fileSize" style="margin-top: 13px;">'+ info.Project +'</div><div class="3u" style="margin-bottom: 10px;float: right;"><a id="GetProj" name="'+ info.ProjID +'" class="button" >Ver projecto</a></div></div></div></div>');
		});
	}
}

$('#listproj').on('click','#GetProj',function(){
	var id = $(this).attr('name');
	GetProject(id);

	$(".AdminPanel").hide();
	$(".formInsc").show();
});

$('.actions').on('click','.GetBack',function(){
	$(".AdminPanel").show();
	$(".formInsc").hide();
});


/***********************************************
							Filter Categories
***********************************************/

$("#ChooseWhatToSee").change(function(){

	$('.openProj').hide();
	if($(this).val() == 'videogames'){
		$("div[name='videogames']").show();
	}else if ($(this).val() == 'lifestyle') {
		$("div[name='lifestyle']").show();
	}else if ($(this).val() == 'social') {
		$("div[name='social']").show();
	}else if ($(this).val() == 'business') {
		$("div[name='business']").show();
	}else{
		$('.openProj').show();
	}
});