/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;
var currentPopup = "";


//loading popup with jQuery magic!
function loadPopup(popupName){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$(popupName).fadeIn("slow");
		popupStatus = 1;
		currentPopup = popupName;
	}
}

//disabling popup with jQuery magic!
function disablePopup(popupName){
	//disables popup only if it is enabled
	if(popupStatus==1){
		$(popupName).fadeOut("slow");
		popupStatus = 0;
	}
}

//centering popup
function centerPopup(popupName){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $(popupName).height();
	var popupWidth = $(popupName).width();
	//centering
	$(popupName).css({
		"position": "absolute",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}

window.onresize = function () {
	centerPopup(currentPopup);
	};

function openDelayed(openThis) {
	centerPopup(openThis);
	loadPopup(openThis);	
}

function closeAndOpenNext(closeThis, openThis) {
	disablePopup(closeThis);
	openDelayed(openThis)
}