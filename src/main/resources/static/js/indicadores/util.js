
var customScrollHChart={
			enabled: true,
			barBackgroundColor: 'gray',
			barBorderRadius: 7,
			barBorderWidth: 0,
			buttonBackgroundColor: 'gray',
			buttonBorderWidth: 0,
			buttonArrowColor: 'white',
			buttonBorderRadius: 7,
			rifleColor: 'white',
			trackBackgroundColor: 'transparent',
			trackBorderWidth: 0,
			trackBorderColor: 'silver',
			trackBorderRadius: 7,
			height: 30
};

var MESES = ["Enero", 
             "Febrero",
             "Marzo",
             "Abril",
             "Mayo",
             "Junio",
             "Julio",
             "Agosto",
             "Septiembre",
             "Octubre",
             "Noviembre",
             "Diciembre",
             ];

var colorsPie=[
               '#DD1E2F', 
               '#EBB035', 
               '#06A2CB', 
               '#218559', 
               '#D0C6B1', 
               '#90CA77', 
               '#EE0F97',
               '#E48743',
               '#c42525', 
               '#a6c96a',
               '#5BBD85',
               '#D5E451',
               '#CB50CF',
               '#1E2991',
               '#BEEF59',
               '#E5902E',
               '#77F256',
               '#35F7E1'
            ];

var colorsTA = { 
		telcel:'#06A2CB', 
		iusacell:'#DD1E2F', 
		unefon:'#EBB035', 
		movistar:'#218559'};


Date.prototype.getWeek = function(dowOffset) {

	dowOffset = typeof (dowOffset) == 'int' ? dowOffset : 1; // default

	var newYear = new Date(this.getFullYear(), 0, 1);
	var day = newYear.getDay() - dowOffset; // the day of week the year begins

	day = (day >= 0 ? day : day + 7);
	var daynum = Math
			.floor((this.getTime() - newYear.getTime() - (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1;
	var weeknum;
	// if the year starts before the middle of a week
	if (day < 4) {
		weeknum = Math.floor((daynum + day - 1) / 7) + 1;
		if (weeknum > 52) {
			nYear = new Date(this.getFullYear() + 1, 0, 1);
			nday = nYear.getDay() - dowOffset;
			nday = nday >= 0 ? nday : nday + 7;

			weeknum = nday < 4 ? 1 : 53;
		}
	} else {
		weeknum = Math.floor((daynum + day - 1) / 7);
	}
	return weeknum;
};


var ayer				= new Date();
var fechaActual 		= new Date();
ayer.setDate(fechaActual.getDate() - 1);
var anioAnterior		= ayer.getFullYear()-1;
var strAyer				= ayer.getDate() + "/" + (ayer.getMonth()+1) + "/" + ayer.getFullYear();
var semanaActual 		= fechaActual.getWeek();
var fInicioSemanaActual = inicioSemana(fechaActual);
var fFinSemanaActual 	= new Date(fInicioSemanaActual);
fFinSemanaActual.setDate(fFinSemanaActual.getDate() + 6);
var strInicioSemActual 	= formateaFecha(fInicioSemanaActual);
var strFinSemActual 	= formateaFecha(fFinSemanaActual);

function formatNumber(num, prefix) {
	prefix = prefix || '';
	num += '';
	var splitStr = num.split('.');
	var splitLeft = splitStr[0];
	var splitRight = splitStr.length > 1 ? '.' + splitStr[1] : '.00';
	splitRight = splitRight + '00';
	splitRight = splitRight.substr(0, 3);
	var regx = /(\d+)(\d{3})/;
	while (regx.test(splitLeft)) {
		splitLeft = splitLeft.replace(regx, '$1' + ',' + '$2');
	}
	return prefix + splitLeft + splitRight;
}

function inicioSemana(date) {	
	date = new Date(date);		
    var day = date.getDay() || 7;  
    if( day !== 1 ) 
        date.setHours(-24 * (day - 1)); 
    return date;
}

function formateaFecha(fecha)
{
	return fecha.getDate() + " de " + MESES[fecha.getMonth()] + " de " + fecha.getFullYear();
}

function formateaFechaS(fecha)
{
	return fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
}
	
function loading(div)
{
	$("#" + div).html('<img src="images/loading51.gif" class="loading"/>');
}

function insertionSort( myArr, catArr ) {
	var sorted=new Array(2);
	  var size = myArr.length,
	      slot,
	      tmp;
	 var ctmp;
	  for ( var item = 0; item < size; item++ ) { // outer loop     
	    tmp = myArr[item];
	    ctmp = catArr[item];
	    for ( slot = item - 1; slot >= 0 && myArr[slot].y > tmp.y; slot-- ){ // inner loop
	      myArr[ slot + 1 ] = myArr[slot];
	      catArr[ slot + 1 ] = catArr[slot];
	    }
	    myArr[ slot + 1 ] = tmp;
	    catArr[ slot + 1 ] = ctmp;
	  }
	  sorted[0]=myArr;
	  sorted[1]=catArr;
	  return sorted;
	};