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

$("#elementsSelector").change(function(){
	if(this.value == "1"){
		$("#element1").show().siblings().hide();
	}else if(this.value == "2"){
		$("#element1").show().siblings().hide();
		$("#element2").show();
	}else if(this.value == "3"){
		$("#element1").show().siblings().hide();
		$("#element2").show();
		$("#element3").show();
	}else if(this.value == "4"){
		$("#element1").show().siblings().hide();
		$("#element2").show();
		$("#element3").show();
		$("#element4").show();
	}else if(this.value == "5"){
		$("#element1").show().siblings().hide();
		$("#element2").show();
		$("#element3").show();
		$("#element4").show();
		$("#element5").show();
	}else if(this.value == "6"){
		$("#element1").show().siblings().show();
		$("#element7").hide();
		$("#element8").hide();
		$("#element9").hide();
	}else if(this.value == "7"){
		$("#element1").show().siblings().show();
		$("#element8").hide();
		$("#element9").hide();
	}else if(this.value == "8"){
		$("#element1").show().siblings().show();
		$("#element9").hide();
	}else if(this.value == "9"){
		$("#element1").show().siblings().show();
	}else{
		$("#element1").hide().siblings().hide();
	}});

$("#elementsSelector").change();
var emailForm = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phoneForm = /^[+-]?([0-9]{1,5})?\s?([0-9]{9,12})+$/;
//Check if element one is filled:
$("#name1").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorName1").text("Este campo é obrigatorio");}
	else{ $("#ErrorName1").text("");}});
$("#email1").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorEmail1").text("Este campo é obrigatorio");}
	else if(!emailForm.test($.trim(this.value))){$("#ErrorEmail1").text("Email tem o formato errado");}
	else{ $("#ErrorEmail1").text("");}});
$("#cellphone1").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorCellphone1").text("Este campo é obrigatorio");}
	else if(!phoneForm.test($.trim(this.value))){$("#ErrorCellphone1").text("Numero de telemovel tem o formato errado");}
	else{ $("#ErrorCellphone1").text("");}});
//Check if element two is filled:
$("#name2").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorName2").text("Este campo é obrigatorio");}
	else{ $("#ErrorName2").text("");}});
$("#email2").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorEmail2").text("Este campo é obrigatorio");}
	else if(!emailForm.test($.trim(this.value))){$("#ErrorEmail2").text("Email tem o formato errado");}
	else{ $("#ErrorEmail2").text("");}});
//Check if element three is filled:
$("#name3").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorName3").text("Este campo é obrigatorio");}
	else{ $("#ErrorName3").text("");}});
$("#email3").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorEmail3").text("Este campo é obrigatorio");}
	else if(!emailForm.test($.trim(this.value))){$("#ErrorEmail3").text("Email tem o formato errado");}
	else{ $("#ErrorEmail3").text("");}});
//Check if element four is filled:
$("#name4").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorName4").text("Este campo é obrigatorio");}
	else{ $("#ErrorName4").text("");}});
$("#email4").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorEmail4").text("Este campo é obrigatorio");}
	else if(!emailForm.test($.trim(this.value))){$("#ErrorEmail4").text("Email tem o formato errado");}
	else{ $("#ErrorEmail4").text("");}});
//Check if element five is filled:
$("#name5").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorName5").text("Este campo é obrigatorio");}
	else{ $("#ErrorName5").text("");}});
$("#email5").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorEmail5").text("Este campo é obrigatorio");}
	else if(!emailForm.test($.trim(this.value))){$("#ErrorEmail5").text("Email tem o formato errado");}
	else{ $("#ErrorEmail5").text("");}});
//Check if element six is filled:
$("#name6").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorName6").text("Este campo é obrigatorio");}
	else{ $("#ErrorName6").text("");}});
$("#email6").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorEmail6").text("Este campo é obrigatorio");}
	else if(!emailForm.test($.trim(this.value))){$("#ErrorEmail6").text("Email tem o formato errado");}
	else{ $("#ErrorEmail6").text("");}});
//Check if element seven is filled:
$("#name7").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorName7").text("Este campo é obrigatorio");}
	else{ $("#ErrorName7").text("");}});
$("#email7").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorEmail7").text("Este campo é obrigatorio");}
	else if(!emailForm.test($.trim(this.value))){$("#ErrorEmail7").text("Email tem o formato errado");}
	else{ $("#ErrorEmail7").text("");}});
//Check if element eight is filled:
$("#name8").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorName8").text("Este campo é obrigatorio");}
	else{ $("#ErrorName8").text("");}});
$("#email8").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorEmail8").text("Este campo é obrigatorio");}
	else if(!emailForm.test($.trim(this.value))){$("#ErrorEmail8").text("Email tem o formato errado");}
	else{ $("#ErrorEmail8").text("");}});
//Check if element nine is filled:
$("#name9").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorName9").text("Este campo é obrigatorio");}
	else{ $("#ErrorName9").text("");}});
$("#email9").blur(function(){
	if($.trim(this.value) == ""){ $("#ErrorEmail9").text("Este campo é obrigatorio");}
	else if(!emailForm.test($.trim(this.value))){$("#ErrorEmail9").text("Email tem o formato errado");}
	else{ $("#ErrorEmail9").text("");}});

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

	var NE = document.getElementById('elementsSelector').value;
	var T = document.getElementById('team').value;
	var C = document.getElementById('categorySelector').value;
	var PD = document.getElementById('projectDescription').value;

  if ((NE != 1) && (NE != 2) && (NE != 3) && (NE != 4) && (NE != 5) && (NE != 6) && (NE != 7) && (NE != 8) && (NE != 9) && (T != '') && (C != 'Escolhe a categoria') && (PD != '')){
		alert("Escolha o numero de elementos do grupo e preencha os respectivos dados");
		return;
	}

   var formInput = $("#ajaxform").serialize();
    $.post($("#ajaxform").attr('action'),formInput, function(data){
      $(".formInsc").hide();
			$(".InsMade").show();
    });

    var formInput = $(".ink-form").serialize();
      $.post($(".ink-form").attr('action'),formInput, function(data){
      alert("Thank you for your comment!");
    });

    return false;
});