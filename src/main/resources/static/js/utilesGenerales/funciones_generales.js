 function bloquearPantalla(mensaje, estilo, elemento, selector, overlay)
 {
		if (estilo == undefined || estilo == "")
		   estilo = { align:"center", width:"330px", backgroundColor: '#000', color: '#fff', padding: "20px", font: "18px Arial, Helvetica, sans-serif" };
		else if ( estilo == "error" )
  		   estilo = { align:"center", width:"330px", backgroundColor: '#f00', color: '#fff', padding: "20px", font: "18px Arial, Helvetica, sans-serif", border:"3px solid white" };
		else if ( estilo == "denegado" ){
		   estilo = { align:"center", width:"330px", backgroundColor: '#fc7c26', color: '#fff', padding: "20px", font: "18px Arial, Helvetica, sans-serif", border:"3px solid white" };
		}
		if (overlay == undefined || overlay == ""){
			overlay = {backgroundColor: '#000'}; 
		}
		
		if ( elemento == undefined || elemento == "" ){
			$.blockUI({ message: mensaje, css: estilo, overlayCSS: overlay});
		}
		else {
			selector = selector == "class"?".":"#";
			$(selector + elemento).block({ message: mensaje, css: estilo, overlayCSS: overlay });
		}
		   
}
 function sort (inputArr, sort_flags) {
	  var valArr = [],
	    k = '',
	    i = 0,
	    sorter = false,
	    that = this,
	    strictForIn = false,
	    populateArr = [];

	  switch (sort_flags) {
	  case 'SORT_STRING':
	    sorter = function (a, b) {
	      return that.strnatcmp(a, b);
	    };
	    break;
	  case 'SORT_LOCALE_STRING':
	    var loc = this.i18n_loc_get_default();
	    sorter = this.php_js.i18nLocales[loc].sorting;
	    break;
	  case 'SORT_NUMERIC':
	    sorter = function (a, b) {
	      return (a - b);
	    };
	    break;
	  case 'SORT_REGULAR':
	  default:
	    sorter = function (a, b) {
	      var aFloat = parseFloat(a),
	        bFloat = parseFloat(b),
	        aNumeric = aFloat + '' === a,
	        bNumeric = bFloat + '' === b;
	      if (aNumeric && bNumeric) {
	        return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
	      } else if (aNumeric && !bNumeric) {
	        return 1;
	      } else if (!aNumeric && bNumeric) {
	        return -1;
	      }
	      return a > b ? 1 : a < b ? -1 : 0;
	    };
	    break;
	  }

	  this.php_js = this.php_js || {};
	  this.php_js.ini = this.php_js.ini || {};
	  strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
	  populateArr = strictForIn ? inputArr : populateArr;

	  for (k in inputArr) { 
	    if (inputArr.hasOwnProperty(k)) {
	      valArr.push(inputArr[k]);
	      if (strictForIn) {
	        delete inputArr[k];
	      }
	    }
	  }

	  valArr.sort(sorter);

	  for (i = 0; i < valArr.length; i++) { 
	    populateArr[i] = valArr[i];
	  }
	  return strictForIn || populateArr;
	}
 