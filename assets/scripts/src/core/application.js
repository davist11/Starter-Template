window.SITE || (SITE = {});

(function($, window, document, undefined) {
	'use strict';

	SITE.init = function() {
		console.log('hello');
	};

})(jQuery, window, document);

$(document).ready(SITE.init);