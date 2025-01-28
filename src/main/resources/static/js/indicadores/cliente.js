/*===========================================================
 * 
 *     Modulo: 		"cliente.js"
 *     Version:		2.0.0a20140404
 *     
 *===========================================================           
*/

parametros = {
		'xDia'			: {pais: 1, region: -1, zona: -1, semana:  0, servicio: 0, anio: 0, tienda: -1, incHoy: 0},
		'xSem'			: {pais: 1, region: -1, zona: -1, semana: -1, servicio: 0, anio: 0, tienda: -1, incHoy: 0},
		'xDiaComp'		: {pais: 1, region: -1, zona: -1, semana:  0, servicio: 0, anio: 0, tienda: -1, incHoy: 1},
		'xSemComp'		: {pais: 1, region: -1, zona: -1, semana: -1, servicio: 0, anio: 0, tienda: -1, incHoy: 1},
		'taXDia'		: {pais: 0, region: -1, zona:  0, tienda: -1, anio: 0, semana: -1, carrier: ''},
		'taXSem'		: {pais: 1, region: -1, zona:  0, tienda: -1, anio: 0, semana: -1, carrier: ''},
		'totalxDia'		: {pais: 1, semana: 0, servicio: 0},
		'totalxSem'		: {pais: 1, semana: 0, servicio: 0},
		'totalTAXDia'	: {pais: 1, semana: 0, carrier: ''},
		'totalTAXSem'	: {pais: 1, semana: 0, carrier: ''},
		'varXDia'		: {pais: 0, zona: 0, fechaIni: '', fechaFin: '', servicio:0},
		'varXSem'		: {pais: 0, zona: 0, fechaIni: '', fechaFin: '', servicio:0},
		'tiendaXDia'	: {pais: 1, region: -1, zona: -1, semana: 0, tienda: 0 , servicio: 0, anio : 0, incHoy: 0},
		'tiendaXSem'	: {pais: 1, region: -1, zona: -1, semana: -1, tienda: 0 , servicio: 0, anio : 0, incHoy: 0},
		'tiendaXDiaComp'	: {pais: 1, region: -1, zona: -1, semana: 0, tienda: 0 , servicio: 0, anio:0, incHoy: 1},
		'tiendaXSemComp'	: {pais: 1, region: -1, zona: -1, semana: -1, tienda: 0 , servicio: 0, anio:0, incHoy: 1},
		'tiendaTAxDia'	: {pais: 1, region: -1, zona: -1, semana: 0, tienda: 0 , carrier: ''},
		'tiendaTAxSem'	: {pais: 1, region: -1, zona: -1, semana: 0, tienda: 0 , carrier: '', incHoy: 0},
		'tiendaTAxDiaComp'	: {pais: 1, region: -1, zona: -1, semana: 0, tienda: 0 , carrier: '', anio:0},
		'tiendaTAxSemComp'	: {pais: 1, region: -1, zona: -1, semana: -1, tienda: 0 , carrier: '', anio:0}
};

function defaultParam(){
	parametros = {
			'xDia'			: {pais: 1, region: -1, zona: -1, semana:  0, servicio: 0, anio: 0, tienda: -1, incHoy: 0},
			'xSem'			: {pais: 1, region: -1, zona: -1, semana: -1, servicio: 0, anio: 0, tienda: -1, incHoy: 0},
			'xDiaComp'		: {pais: 1, region: -1, zona: -1, semana:  0, servicio: 0, anio: 0, tienda: -1, incHoy: 1},
			'xSemComp'		: {pais: 1, region: -1, zona: -1, semana: -1, servicio: 0, anio: 0, tienda: -1, incHoy: 1},
			'taXDia'		: {pais: 0, region: -1, zona:  0, tienda: -1, anio: 0, semana: -1, carrier: ''},
			'taXSem'		: {pais: 1, region: -1, zona:  0, tienda: -1, anio: 0, semana: -1, carrier: ''},
			'totalxDia'		: {pais: 1, semana: 0, servicio: 0},
			'totalxSem'		: {pais: 1, semana: 0, servicio: 0},
			'totalTAXDia'	: {pais: 1, semana: 0, carrier: ''},
			'totalTAXSem'	: {pais: 1, semana: 0, carrier: ''},
			'varXDia'		: {pais: 0, zona: 0, fechaIni: '', fechaFin: '', servicio:0},
			'varXSem'		: {pais: 0, zona: 0, fechaIni: '', fechaFin: '', servicio:0},
			'tiendaXDia'	: {pais: 1, region: -1, zona: -1, semana: 0, tienda: 0 , servicio: 0, anio : 0, incHoy: 0},
			'tiendaXSem'	: {pais: 1, region: -1, zona: -1, semana: -1, tienda: 0 , servicio: 0, anio : 0, incHoy: 0},
			'tiendaXDiaComp'	: {pais: 1, region: -1, zona: -1, semana: 0, tienda: 0 , servicio: 0, anio:0, incHoy: 1},
			'tiendaXSemComp'	: {pais: 1, region: -1, zona: -1, semana: -1, tienda: 0 , servicio: 0, anio:0, incHoy: 1},
			'tiendaTAxDia'	: {pais: 1, region: -1, zona: -1, semana: 0, tienda: 0 , carrier: ''},
			'tiendaTAxSem'	: {pais: 1, region: -1, zona: -1, semana: 0, tienda: 0 , carrier: '', incHoy: 0},
			'tiendaTAxDiaComp'	: {pais: 1, region: -1, zona: -1, semana: 0, tienda: 0 , carrier: '', anio:0},
			'tiendaTAxSemComp'	: {pais: 1, region: -1, zona: -1, semana: -1, tienda: 0 , carrier: '', anio:0}
		};	
}




function obtenerVta(m, onSuccess, onError, params)
{			
	/*if(typeof params === "undefined")
		params = parametros[m];	
	$.ajax({		   
		  type			: 'POST',		  
		  url			: ctx() + m,
		  data			: params,
		  success		: success,
		  error			: onError		                                    
		});		
	
	function success(data)
	{	
		var className = data['return']["@type"];
		className = className.substring(className.indexOf(':') + 1);		
		var respuesta = eval("new " + className + "(data['return'])");
		onSuccess(respuesta);
		data = null;
	}*/
}

function ctx() {
    var base = document.getElementsByTagName('base')[0];
    if (base && base.href && (base.href.length > 0)) {
        base = base.href;
    } else {
        base = document.URL;
    }        
   return base.substr(0, base.indexOf("/", base.indexOf("/", base.indexOf("//") + 2) + 1)) + '/consulta?'; 
};