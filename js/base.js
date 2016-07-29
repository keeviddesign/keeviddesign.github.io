function CreateContact() {
	"use strict";

	var address1 = String.fromCharCode(114-7,90+11,123-22);
	var address2 = String.fromCharCode(111+7,117-12,96+4,68-22,73+27,127-26,115+0,121-16,101+2,131-21);
	var address3 = String.fromCharCode(62-16,84+21,115-5,101+1,117-6,38+26);
	var address4 = String.fromCharCode(122-19,85+24);
	var address5 = String.fromCharCode(105-8,95+10,122-14,40+6,110-11,86+25,112-3);
  if (document.getElementById)
	  {
		document.getElementById("contact_content").innerHTML = "<span>" + address1 +"</span>" + address2 + "<span>" + address3 +"</span>" + "<span>" + address4 +"</span>" + "<span>" + address5 +"</span>";
	  }
}
window.onload = function(){
	"use strict";
	CreateContact();
};
