
(function(window) {
	var obj={ };
	obj.dreamOn= function() {
		console.log("I want to see the global scope! let me out");

	};
	window.doer =obj;
});
doer.dreamOn();