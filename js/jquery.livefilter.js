/*!
 * jQuery Live Filter plugins
 *
 * License:
 * 		Dual licensed under the MIT or GPL Version 2 licenses.
 * 		http://jquery.org/license
 *		Copyright 2011, Ei Maung (Fairway Web)
 *		http://fairwayweb.com/
 *
 * History:
 *		version 0.1, Sep 16th, 2011
 *
 * Source: https://github.com/eimg/jquery.livefilter.js
 *
 * Inspired By: Kilian Valkhof's Article (http://goo.gl/Jk4iN)
 *
 * Usage Example: $('input[type=text]').liveFilterOf('.items')
 */

(function($) {

    $.fn.liveFilterOf = function(items) {

		// Building a case-insensitive :contains()
		jQuery.expr[':'].Contains = function(a,i,m){
			return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
		};

		if(!$(items).length) return this;

		this.each(function() {
			$(this).change(function() {

				query = $(this).val().toLowerCase().split(" ");

				$(items).show();

				$.each(query, function(){
					$(items + ":visible:not(:Contains('"	+ this + "'))").hide();
				});

			}).keyup(function() {
				$(this).change();
			})
		});

		return this;

    }

})(jQuery);

