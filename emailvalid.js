function formValidation(){
	var usid = document.myform.userid;
	var psid = document.myform.passid;
	var uname = document.myform.username;
	var uads = document.myform.address;
	var ucountry = document.myform.country;
	var uzip = document.myform.zip;
	var umail = document.myform.email;
	var umsex = document.myform.msex;
	var ufsex = document.myform.fsex;
	if(userid_valid(usid,7,12)){
		if (passwd_valid(psid,7,12)) {
			if (uname_valid(uname)) {
				if (uaddress_valid(uads)) {
					if (ucountry_valid(ucountry)) {
						if (zip_valid(uzip)) {
							if (email_valid(umail)) {
								if(validsex(umsex,ufsex))
								{
								}
							}
						}
					}
				}
			}
		}
	}
	return false;
}
function userid_valid(usid,min,max) {
	var ulength = usid.value.length;
	if(ulength == 0 || ulength < min || ulength > max){
		alert("Enter a name or enter a name between " +min+ " and " +max);
		usid.focus();
		return false;
	}
	return true;
}
function passwd_valid(psid,min,max) {
	var plength = psid.value.length;
	if(plength == 0 || plength < min || plength > max){
		alert("Enter a password or enter a password between " +min+ " and " +max);
		psid.focus();
		return false;
	}
	return true;
}
function uname_valid(uname) {
	var letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters))
	{
		return true;
	}
	else
	{
		alert("Please enter valid username:");
		uname.focus();
		return false;
	}
}
function uaddress_valid(uads) {
	var alpha_num = /^[0-9]+[a-z]+[A-Z]+$/;

	if(uads.value.match(alpha_num))
	{
		return true;
	}
	else
	{
		alert("Please enter address in numerics only");
		uads.focus();
		return false;
	}
}
function ucountry_valid(ucountry) {
	if (ucountry.value == "Default") {
		alert("Please select a country from the list");
		ucountry.focus();
		return false;
	}
	else
		return true;
}
function zip_valid(uzip) {
	var numb  = /^[0-9]+$/;
	if (uzip.value.match(numb)) {
		return true;
	}
	else
	{
		alert("Enter a valid zip:");
		uzip.focus();
		return false;
	}
}
function email_valid(umail) {
	var emailn = umail.value;
	if (emailn != "" && isNaN(emailn)) {
		y = emailn.indexOf("@");
		z = emailn.lastIndexOf(".");
		w = emailn.search(" ");
		if(y < 0 || y + 2 > z || z+2 > emailn.length || w > -1){
			alert("Enetred value is not email:");
			return false;
		}
		else{
			a = emailn.substr(0,y);
			alert("Enetred value is: " +a);
			return true;
		}
	}
	else {
		alert('Please enter a valid email');
		return false;
	}
	return false;
}
function validsex(umsex,ufsex) {
	var x = 0;
	if (umsex.checked) {
		x++;
	}
	if(ufsex.checked){
		x++;
	}
	if(x == 0)
	{
		alert("Select your gender");
		umsex.focus();
		return false;
	}
	else
	{
		alert("Form submitted bro");
		window.location.reload();
		return true;
	}
}