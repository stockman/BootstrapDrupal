(function($) {



    Drupal.behaviors.shoopinglist = {
        attach: function(context, settings) {
            //code starts

			//Prepopulate the title field
			//below js must be located in the admin theme.
			var input= document.getElementById('edit-field-item-und')||"";
			    
			input.onchange=input.onkeyup= function() {
			tagger = input.value;

			console.log(tagger);
			document.getElementById("edit-title").value = tagger;

			};
        

        }

    };
})(jQuery);