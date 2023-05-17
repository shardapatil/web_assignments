
//Define function that accepts unordered param - Pass all the param -Pass less param Define with 
//default value - Accepts less param Pass more param.

function register({ username, email, mobile, aaddhar }) {
    console.log(username);
    console.log(email);
    console.log(mobile);
    console.log(aaddhar);
  }
  
  let username = "rohit";
  let email = "rohit@adfdf.ocm";
  let mobile = "1212121";
  let aaddhar = "R1212121212";
  register({ aaddhar, mobile, email, username });

  function reg({ user, mail = "d@d", mob = "d", aaddhar1 }) {
    console.log(user);
    console.log(mail);
    console.log(mob);
    console.log(aaddhar1);
  }
  
  // ORDER OR INDEX DRIVEN, PARAM DRIVEN
  let user = "rohit";
  let mail = "rohit@adfdf.ocm";
  let mob = "1212121";
  let aaddhar1 = "R1212121212";
  reg({ aaddhar1, user });