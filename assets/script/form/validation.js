// function for password validation
var checkPassword = function() {
    var password = document.getElementById('password').value;
    var verify_password = document.getElementById('verify_password').value;
    var pl = password.length;
    var vpl = verify_password.length;
    var pass_req =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
  
    // --- check if length is between 8 and 20
    if (pl !== 0) { // if password is not empty
        if (pl < 8) {
        document.getElementById('pass-info-1').style.color = "red";
        document.getElementById('pass-info-1').innerHTML = "Password must contain at least 8 characters";
        }
        // --- check if password passes requirements
        else if (password.match(pass_req)) {
        document.getElementById('pass-info-1').style.color = "green";
        document.getElementById('pass-info-1').innerHTML = "&#10004 Password is valid";
        }
        // --- if password does not pass requirements
        else {
        document.getElementById('pass-info-1').style.color = "red";
        document.getElementById('pass-info-1').innerHTML = "&#10006 Password must contain at least 1 uppercase, number and a special character";
        }
    }
    else {
        document.getElementById('pass-info-1').innerHTML = "&nbsp;";
    }
    
  
    // --- check if passwords match
    if(pl == vpl && pl !== 0) { // if same length
      if (password == verify_password) {
        if (password.match(pass_req)) {
            document.getElementById('pass-info-2').style.color = 'green';
            document.getElementById('pass-info-2').innerHTML = '&#10004	Password Match';
        } 
        else {
            document.getElementById('pass-info-2').style.color = 'red';
            document.getElementById('pass-info-2').innerHTML = 'Password must contain at least 8 characters';
        }
      }
      else {
        document.getElementById('pass-info-2').style.color = 'red';
        document.getElementById('pass-info-2').innerHTML = '&#10006 Password does not match';
      }
    }
    else {
        document.getElementById('pass-info-2').innerHTML = '&nbsp;';
    }
  }

  


  // function for email validation  
    var checkEmail = function() {    
      var email = document.getElementById('email').value;
      var verify_email = document.getElementById('verify-email').value;
      var email_req = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      var el = email.length;
      var vel = verify_email.length;

      // --- check if email is valid
      if (el > 0) {
        if (email.match(email_req)) {
            document.getElementById('email-info').innerHTML = '&nbsp';
        } 
        else{
            document.getElementById('email-info').innerHTML = 'Enter a valid Email';
        }
      }
      else {
        document.getElementById('email-info').innerHTML = '&nbsp';
      }
        
      // --- check if emails match
      if (el <= vel && el !== 0) { // if same length 
        // --  if same characters (not case sensitive)
        if(email.toLowerCase() == verify_email.toLowerCase()){
            // -- if email pass the requirements
            if(verify_email.toLowerCase().match(email_req)){
                document.getElementById('verify-email-info').style.color = 'green';
                document.getElementById('verify-email-info').innerHTML = '&#10004 Email Match';
            }
            // -- if same characters but email does not pass the requirements
            else {
                document.getElementById('verify-email-info').style.color = 'red';
                document.getElementById('verify-email-info').innerHTML = '&#10006 Please enter a valid Email';
            }
        }
        // -- if characters do not match
        else{
            document.getElementById('verify-email-info').style.color = 'red';
            document.getElementById('verify-email-info').innerHTML = '&#10006 Email does not match';
        }
      }
      // -- if not the same length
      else{
        document.getElementById('verify-email-info').innerHTML = ' ';
      }
    }




    // function for NAME validation
    var checkName = function() {
      var fname = document.getElementById('fname').value;
      var lname = document.getElementById('lname').value;
      var name_req = /^[a-zA-Z0-9._-]+$/;
      var fnl = fname.length;
      var lnl = lname.length;

      // --- check if first name is valid
      if (fnl > 0) {
        if (fname.match(name_req)) {
            document.getElementById('fname-info').innerHTML = '&nbsp';
        }
        else {
            document.getElementById('fname-info').innerHTML = '&#10006 Please enter a valid First Name';
        }
      }
      else {    
            document.getElementById('fname-info').innerHTML = '&nbsp';
      };


      // --- check if last name is valid
      if (lnl > 0) {
        if (lname.match(name_req)) {
            document.getElementById('lname-info').innerHTML = '&nbsp';
        }
        else {
            document.getElementById('lname-info').innerHTML = '&#10006 Please enter a valid Last Name';
        };
      }
      else {
            document.getElementById('lname-info').innerHTML = '&nbsp';
      }
    }





    // function for Pair Code
    var checkPairCode = function() {
      var pair_code = document.getElementById('paircode').value;
      var pcl = pair_code.length;
      var pair_req = /^[a-z0-9]+$/; //--Alphanumeric only

      // --- check if pair code is valid
      if (pcl >= 6) {
        if (pcl == 6 && pair_code.toLowerCase().match(pair_req)) {
            document.getElementById('paircode-info').innerHTML = '&nbsp';
        }
        else{
            document.getElementById('paircode-info').innerHTML = '&#10006 Please enter a valid Join/Pairing Code';
        }
      }
      else {
            document.getElementById('paircode-info').innerHTML = '&nbsp';
      }
    }


    // function for Phone Number
    var checkPhone = function() {
     var phone = document.getElementById('phone').value;
        var phone_req = /^[0-9]+$/; //--Numbers only
        var pl = phone.length;

        // --- check if phone number is valid
        if (pl > 0) {
            if (phone.match(phone_req)) {
                document.getElementById('phone-info').innerHTML = '&nbsp';
            }
            else {
                document.getElementById('phone-info').innerHTML = '&#10006 Please enter a valid Phone Number';
            }
        }   
        else {
            document.getElementById('phone-info').innerHTML = '&nbsp';
        }
    }


    // function for Title
    var checkTitle = function() {
        var title = document.getElementById('title').value;
        var title_req = /^[a-zA-Z0-9._-]+$/; //--Alphanumeric only
        var tl = title.length;

        // --- check if title is valid
        if (tl > 0) {
            if (title.match(title_req)) {
                document.getElementById('title-info').innerHTML = '&nbsp';
            }
            else {
                document.getElementById('title-info').innerHTML = '&#10006 Please enter a valid Job Title';
            }
        }
        else {
            document.getElementById('title-info').innerHTML = '&nbsp';
        }
    }
    




  //   ----------------  LOGIN VALIDATION ----------------

  // function for password validation
var checkLogPassword = function() {
  var password = document.getElementById('password').value;
  var pl = password.length;
  var pass_req =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;

  // --- check if length is between 8 and 20
  if (pl !== 0) { // if password is not empty
      if (pl < 8) {
      document.getElementById('pass-info-1').style.color = "red";
      document.getElementById('pass-info-1').innerHTML = "Password must contain at least 8 characters";
      }
      // --- check if password passes requirements
      else if (password.match(pass_req)) {
      document.getElementById('pass-info-1').style.color = "green";
      document.getElementById('pass-info-1').innerHTML = "&#10004 Password is valid";
      }
      // --- if password does not pass requirements
      else {
      document.getElementById('pass-info-1').style.color = "red";
      document.getElementById('pass-info-1').innerHTML = "&#10006 Password must contain at least 1 uppercase, number and a special character";
      }
  }
  else {
      document.getElementById('pass-info-1').innerHTML = "&nbsp;";
  }
  
}



 // function for email validation  
 var checLogkEmail = function() {    
  var email = document.getElementById('email').value;
  var email_req = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var el = email.length;

  // --- check if email is valid
  if (el > 0) {
    if (email.match(email_req)) {
        document.getElementById('email-info').innerHTML = '&nbsp';
    } 
    else{
        document.getElementById('email-info').innerHTML = 'Enter a valid Email';
    }
  }
  else {
    document.getElementById('email-info').innerHTML = '&nbsp';
  }
}