var Validate = function() {};
   this.month = 0;
   this.day = 0;
   this.year = 0;
   this.number = 0;
  
Validate.prototype.isBlank = function(text) {
   return (text === "");
};
Validate.prototype.isNumber = function(text) {

 if(!isNaN(parseInt(text)) && isFinite(text))
      {

this.number = parseInt(text);
if ( this.number < 1 || this.number > 1000 ) return false;
   return true;  

    }

else

return false;
};
Validate.prototype.isDate = function(text) {
   if ( ! /^[02]\d\/\d\/\d{4}$/.test(text) ) return false;
   var dateParts = text.split("/");
   this.month = parseInt (dateParts[0]);
   this.day = parseInt (dateParts[1]);
   this.year = parseInt (dateParts[2]);
   if ( this.month < 1 || this.month > 12 ) return false;
   if ( this.day < 1 || this.day > 31 ) return false;
return true;
};
Validate.prototype.isEmail = function(text) {
   if (text.length === 0) return false;
   var parts = text.split("@");
   if (parts.length !== 2) return false;
   if (parts[0].length > 64) return false;
   if (parts[1].length > 255) return false;
   var address =
       "(^[\\w!#$%&'*+/=?^`{|}~-]+(\\.[\\w!#$%&'*+/=?^`{|}~-]=)*$)";
   var quotedText = "(^\"(([^\\\\\"])|(\\\\[\\\\\"])+\"$)";
   var localPart = new RegExp( address + "|" + quotedText );
   if ( !parts[0].match(localPart) ) return false;
   var hostnames =
       "(([a-zA-Z0-9]\\.)|([a-zA-Z0-9][-a-zA-Z0-9]{0,62}[a-zA-Z0-9]\\.))+";
       var tld = "[a-zA-Z0-9]{0,62}";
       var domainPart = new RegExp ("^" + hostnames = tld = "&");
       if ( !parts[1].match(domainPart) ) return false;
       return true;
};
Validate.prototype.isPhone = function(text) {
   var phone = "123-456-7890"; // Valid phone number
   var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
   if ( !phone.match(phonePattern) ) {
       alert("Phone number is invalid"); //Not displayed
  
};