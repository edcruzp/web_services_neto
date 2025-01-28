

/*VentaXSemana*/
var VentaxSemanaBean = function(json)
{	
	this.paisId				= json.paisId;
	this.nombrePais			= json.nombrePais;
	this.regionId			= json.regionId;
	this.descRegion 		= (typeof json.descRegion['@nil'] === "undefined")? json.descRegion : '';	
	this.zonaId				= json.zonaId;
	this.descZona			= (typeof json.descZona['@nil'] === "undefined")? json.descZona : '';
	this.semana				= json.semana;
	this.cantidad			= json.cantidad;
	this.monto				= json.monto; 	
	this.servicio			= json.servicio;
	this.cantidadPromedio	= json.cantidadPromedio;
	this.montoPromedio		= json.montoPromedio;
	this.tiendas			= json.tiendas;
	this.tienda				= json.tiendaId;
	this.descTienda 		= (typeof json.descTienda['@nil'] === "undefined")? json.descTienda : '';

};
	
var ReporteVentaxSemana = function(json)
{		
	this.codigoError					= json.codigoError;
	this.descError						= json.descError;	
	this.ventaxSemanaArray				= parseVentaArray(json.ventaxSemanaArray, 'VentaxSemanaBean');	
	this.enumerateArrayUsingFunction	= function(fun){
											for(var i = 0; i < this.ventaxSemanaArray.length; i++)
												fun(this.ventaxSemanaArray[i], i);
											};	
};

/*VentaXDia*/
var VentaxDiaBean = function(json)
{	
	this.paisId				= json.paisId;
	this.nombrePais			= json.nombrePais;
	this.regionId			= json.regionId;
	this.descRegion 		= (typeof json.descRegion['@nil'] === "undefined")? json.descRegion : '';
	this.zonaId				= json.zonaId;
	this.descZona			= (typeof json.descZona['@nil'] === "undefined")? json.descZona : '';
	this.semana				= json.semana;
	this.cantidad			= json.cantidad;
	this.monto				= json.monto; 		
	this.fecha				= json.fecha;
	this.tiendas			= json.tiendas;
	this.cantidadPromedio	= json.cantidadPromedio;
	this.montoPromedio		= json.montoPromedio;	
	this.tienda				= json.tiendaid;
};
var ReporteVentaxDia = function(json)
{	
	this.codigoError					= json.codigoError;
	this.descError						= json.descError;
	this.ventaxDiaArray					= parseVentaArray(json.ventaxDiaArray, 'VentaxDiaBean');	
	this.enumerateArrayUsingFunction	= function(fun){
											for(var i = 0; i < this.ventaxDiaArray.length; i++)
												fun(this.ventaxDiaArray[i], i);
											};	
};


var VentaTTAxDiaBean = function(json)
{	
	this.paisId				= json.paisId;
	this.nombrePais			= json.nombrePais;
	this.zonaId				= json.zonaId;
	this.descZona			= (typeof json.descZona['@nil'] === "undefined")? json.descZona : '';
	this.regionId			= json.regionId;
	this.descRegion 		= (typeof json.descRegion['@nil'] === "undefined")? json.descRegion : '';
	this.tienda				= json.tiendaId;
	this.descTienda			= (typeof json.descTienda['@nil'] === "undefined")? json.descTienda : '';
	this.carrier			= json.carrier;
	this.semana				= json.semana;
	this.cantidad			= json.totalProductos;
	this.monto				= json.totalVentas; 		
};
var ReporteVentaTTAxDia = function(json)
{	
	this.codigoError					= json.codigoError;
	this.descError						= json.descError;
	this.ventaTAxDiaArray				= parseVentaArray(json.ventaTAxDiaArray, 'VentaTTAxDiaBean');	
	this.enumerateArrayUsingFunction	= function(fun){
											for(var i = 0; i < this.ventaTAxDiaArray.length; i++)
												fun(this.ventaTAxDiaArray[i], i);
											};	
};

var VentaTTAxSemBean = function(json)
{	
	this.tienda				= json.tiendaId;
	this.descTienda			= (typeof json.descTienda['@nil'] === "undefined")? json.descTienda : '';
	this.carrier			= json.carrier;
	this.semana				= json.semana;
	this.cantidad			= json.totalProductos;
	this.monto				= json.totalVentas; 
	
};
var ReporteVentaTTAxSem = function(json)
{	
	this.codigoError					= json.codigoError;
	this.descError						= json.descError;
	this.ventaTAxSemanaArray			= parseVentaArray(json.ventaTAxSemArray, 'VentaTTAxSemBean');	
	this.enumerateArrayUsingFunction	= function(fun){
											for(var i = 0; i < this.ventaTAxSemanaArray.length; i++)
												fun(this.ventaTAxSemanaArray[i], i);
											};	
};


//TA Variacion

var VentaTAxDiaBean = function(json)
{	
	this.paisId				= json.paisId;
	this.nombrePais			= json.nombrePais;
	this.regionId			= json.regionId;
	this.descRegion 		= (typeof json.descRegion['@nil'] === "undefined")? json.descRegion : '';
	this.zonaId				= json.zonaId;
	this.descZona			= (typeof json.descZona['@nil'] === "undefined")? json.descZona : '';
	this.semana				= json.semana;
	this.cantidad			= json.cantidad;
	this.monto				= json.monto; 		
	this.carrier			= json.carrier;
	this.fecha				= json.fecha;	
	this.tienda				= json.tiendaId;
	this.descTienda			= (typeof json.descTienda['@nil'] === "undefined")? json.descTienda : '';
	
};

var ReporteVentaTAxDia = function(json)
{	
	this.codigoError					= json.codigoError;
	this.descError						= json.descError;
	this.ventaTAxDiaArray				= parseVentaArray(json.ventaTAxDiaArray, 'VentaTAxDiaBean');	
	this.enumerateArrayUsingFunction	= function(fun){
											for(var i = 0; i < this.ventaTAxDiaArray.length; i++)
												fun(this.ventaTAxDiaArray[i], i);
											};	
};

var VentaTAxSemanaBean = function(json)
{	
	this.paisId				= json.paisId;
	this.nombrePais			= json.nombrePais;
	this.regionId			= json.regionId;
	this.descRegion 		= (typeof json.descRegion['@nil'] === "undefined")? json.descRegion : '';
	this.zonaId				= json.zonaId;
	this.descZona			= (typeof json.descZona['@nil'] === "undefined")? json.descZona : '';
	this.semana				= json.semana;
	this.cantidad			= json.cantidad;
	this.monto				= json.monto; 		
	this.carrier			= json.carrier;
	this.tienda				= json.tiendaId;
	this.descTienda			= (typeof json.descTienda['@nil'] === "undefined")? json.descTienda : '';
	
};

var ReporteVentaTAxSemana = function(json)
{	
	this.codigoError					= json.codigoError;
	this.descError						= json.descError;
	this.ventaTAxSemanaArray			= parseVentaArray(json.ventaTAxSemanaArray, 'VentaTAxSemanaBean');	
	this.enumerateArrayUsingFunction	= function(fun){
											for(var i = 0; i < this.ventaTAxSemanaArray.length; i++)
												fun(this.ventaTAxSemanaArray[i], i);
											};	
};

var VarianzaBean = function(json)
{	
	this.pais				= json.pais;
	this.zona				= json.zona;
	this.nombreZona			= json.nombreZona;
	this.fecha				= json.fecha;
	this.variacionSemAnt	= new VariacionBean(json.variacionSemAnt); 
	this.variacion2SemAnt	= new VariacionBean(json.variacion2SemAnt);	
};

var VariacionBean = function(json)
{
	this.fecha		= json.fecha;
	this.variacion	= json.variacion;
	this.porcentaje	= json.porcentaje;
};

/*Varianza*/
var ReporteVarianza = function(json)
{	
	this.codigoError					= json.codigoError;
	this.descError						= json.descError;
	this.varianzaArray					= parseVentaArray(json.varianzaArray, 'VarianzaBean');	
	this.enumerateArrayUsingFunction	= function(fun){
											for(var i = 0; i < this.varianzaArray.length; i++)
												fun(this.varianzaArray[i], i);
											};	
};


var VarianzaxSemBean = function(json)
{	
	this.pais				= json.pais;
	this.zona				= json.zona;
	this.nombreZona			= json.nombreZona;
	this.fecha				= json.fecha;
	this.semana				= json.semana;
	this.variacionxSem		= new VariacionBean(json.variacionxSem); 
	this.variacionxSemAnt2	= new VariacionBean(json.variacionxSemAnt2);	
};

var VariacionxSemBean = function(json)
{
	this.fecha		= json.fecha;
	this.variacion	= json.variacion;
	this.porcentaje	= json.porcentaje;
	this.semana		= json.semana;
};

var ReporteVarianzaxSem = function(json)
{	
	this.codigoError					= json.codigoError;
	this.descError						= json.descError;
	this.varianzaXSemArray				= parseVentaArray(json.varianzaXSemArray, 'VarianzaxSemBean');	
	this.enumerateArrayUsingFunction	= function(fun){
											for(var i = 0; i < this.varianzaXSemArray.length; i++)
												fun(this.varianzaXSemArray[i], i);
											};	
};


/*funciones*/
function parseVentaArray(arr, varName)
{				
	if(typeof arr === "undefined")
		return new Array();
	if (arr instanceof Array) {
			for(var i = 0; i < arr.length; i++)
		arr[i] = eval('new ' + varName + '(arr[i])');		
	return arr;
	}
	else{
		return [eval('new ' + varName + '(arr)')];	
	}

};

var navBarModel = Backbone.Model.extend({
	  
});

var inicioModel = Backbone.Model.extend({
});

var variaModel = Backbone.Model.extend({
});

