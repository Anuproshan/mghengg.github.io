


window.onscroll = function() {myFunction()};

var header = document.getElementById("rs-header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    $("header").addClass("stop");
  } else {
    $("header").removeClass("stop");
  }
};

$(window).load(function($){
	$('.forms-wrapper').Togale();

});

$(function() {  
	$("#popModal").modal('show');
});


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

$('#overlay').show('show', function(){
          
        });

 setTimeout(function(){
  $('#overlay').hide('hide');
 }, 5000);


// *****************Premium Popup Forms Script*************************
function Submit(){
   var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
   var fname = document.form.Name.value,
      lname = document.form.LastName.value,
      femail = document.form.Email.value,
      freemail = document.form.enterEmail.value,
      fpassword = document.form.Password.value,
      fmonth = document.form.birthday_month.value,
      fday = document.form.birthday_day.value,
      fyear = document.form.birthday_year.value;
      
   if( fname == "" )
   {
     document.form.Name.focus() ;
    document.getElementById("errorBox").innerHTML = "enter the first name";
     return false;
   }
   if( lname == "" )
   {
     document.form.LastName.focus() ;
     document.getElementById("errorBox").innerHTML = "enter the last name";
     return false;
   }
   
   if (femail == "" )
   {
      document.form.Email.focus();
      document.getElementById("errorBox").innerHTML = "enter the email";
      return false;
    }else if(!emailRegex.test(femail)){
      document.form.Email.focus();
      document.getElementById("errorBox").innerHTML = "enter the valid email";
      return false;
    }
    
     if (freemail == "" )
   {
      document.form.enterEmail.focus();
      document.getElementById("errorBox").innerHTML = "Re-enter the email";
      return false;
    }else if(!emailRegex.test(freemail)){
      document.form.enterEmail.focus();
      document.getElementById("errorBox").innerHTML = "Re-enter the valid email";
      return false;
    }
    
    if(freemail !=  femail){
       document.form.enterEmail.focus();
       document.getElementById("errorBox").innerHTML = "emails are not matching, re-enter again";
       return false;
       }
    
    
   if(fphone == "")
    {
       document.form.phone.focus();
       document.getElementById("errorBox").innerHTML = "enter the password";
       return false;
    }
    
       if (fmonth == "") {
        document.form.birthday_month.focus();
      document.getElementById("errorBox").innerHTML = "select the birthday month";
        return false;
     }
    if (fday == "") {
        document.form.birthday_day.focus();
      document.getElementById("errorBox").innerHTML = "select the birthday day";
        return false;
     }
    if (fyear == "") {
        document.form.birthday_year.focus();
      document.getElementById("errorBox").innerHTML = "select the birthday year";
        return false;
     }
      if(document.form.radiobutton[0].checked == false && document.form.radiobutton[1].checked == false){
            document.getElementById("errorBox").innerHTML = "select your gender";
          return false;
         }
      if(fname != '' && lname != '' && femail != '' && freemail != '' && fphone != '' && fmonth != '' && fday != '' && fyear != ''){
         document.getElementById("errorBox").innerHTML = "form submitted successfully";
         }
        
};

