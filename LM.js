// 	LM.JS
//	2015/4/29  LONGLING 

(function(window){
	var util = window.util || {} ;
	util.isNumber = function(value){
		return typeof value === 'number' && isFinite(value);
	};
	window.util = util;
}(window,undefined));