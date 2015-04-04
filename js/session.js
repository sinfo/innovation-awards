 function login(){
    FB.login(function(response) {
      checkLoginState();
    }, {scope: 'public_profile,email'});
  }

  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      session();
    }else if (response.status === 'not_authorized') {
      console.log('not authorized');
    }else {
      console.log('please login into facebook');
    }    
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1375365809455096',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.2'
    });

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });

  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  var sessionID = '';
  var role = '';

  function session(){
    FB.api('/me', function(response) {

      sessionID = response.id;

      $.ajax({
        url: 'php/session.php',
        type: 'POST',
        dataType: 'json',
        data: { userID : response.id } ,
      })
      .done(function(data) {

        $(".InsButton").hide();

        if (data.Type == 'Admin') {
          role = data.Type;
          $('.AdminPanel').show();
          GetFiles(response.id);
        }else{
          if (data.Registo == 'Sim') {
            $(".formInsc").show();
            GetProject(data.ID);

          }else{
            $(".formInsc").show(); 
            $('#ProjectID').val(data.ID);
          }
        }

      });

    });
  }