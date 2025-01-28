//-------------------------------------------------------------------------------------
//									PIE
//-------------------------------------------------------------------------------------

var lastSelected;
var lastSelected2;
var regionSeleccionada;
var strVarDayId 		= "varDay";
var strVarweekId 		= "week";
var strSwitchSemanas	= "#switchSemanas";
var strTA 				= "#srvTA1";
var strIVA 				= "#srvIVA1";
var noBarras 			= 10;
var dataSeriePie;
var nivel				= 0;
var small;
var maxColumn			= 0;
var daysNow;
var weeksNow;
var deviceType			= "";

if((window.innerWidth < 768))
{
	strVarDayId			= "varDay2";
	strVarweekId 		= "week2";
	strSwitchSemanas	= "#switchSemanas2";
	strTA 				= "#srvTA12";
	strIVA 				= "#srvIVA12";
	noBarras 			= 5;
	small=true;
	
}else{
	small=false;
}

function resize(){
		if((window.innerWidth < 768)&& ( small==false))
		{
			strVarDayId			= "varDay2";
			strVarweekId 		= "week2";  
			strSwitchSemanas	= "#switchSemanas2";
			strTA 				= "#srvTA12";
			strIVA 				= "#srvIVA12";
			noBarras 			= 5;
			small=true;
			gUpdate();
		}
		else  if((window.innerWidth >= 768) && ( small==true)){
			strVarDayId 		= "varDay";
			strVarweekId 		= "week";
			strSwitchSemanas	= "#switchSemanas";
			strTA 				= "#srvTA1";
			strIVA 				= "#srvIVA1";
			noBarras 			= 10;		
			small=false;
			gUpdate();
					
		}
}

function gUpdate(){

	if($(strSwitchSemanas).is(':checked')){
		if(nivel==3){
		
			obtenerVta('tiendaXDia', re_chartVarDia);
		}else {
			obtenerVta('xDia', re_chartVarDia);
		}
	}
	else {
		if(nivel==3){
			obtenerVta('tiendaXSem', re_chartVarSemana);
		}else {
			obtenerVta('xSem', re_chartVarSemana);
		}
	}
}

function re_chartPie(data) {
	
	if (data != null && data != "" && data != undefined) {
		var length 		= data.ventaxSemanaArray.length;
		var totalVentas = 0;
		element = null;
		dataSeriePie = new Array(length);
		for (var i = 0; i < length; i++) {
			element = data.ventaxSemanaArray[i];
			dataSeriePie[i] = {name: element.descRegion,  y:(element.monto), region: element.regionId};
			totalVentas += element.monto;
		}				
		$('#pie').highcharts(
						{
							chart : {
								plotBackgroundColor : null,
								plotBorderWidth : null,
								plotShadow : false,
								height:280
							},
							title : {
								text : 'VENTAS TOTALES ' + formatNumber(totalVentas, "$")
							},
							tooltip : {
								pointFormat : '{series.name}: <b>{point.percentage:.1f}%</b>'
							},
							colors : colorsPie,
							plotOptions : {
							    series: {
							        pointPadding: 0,
							        groupPadding: 0,
							        margin: 0
							        },
								shadow : true,
								pie : {
									allowPointSelect : true,
									cursor : 'pointer',
									dataLabels : {
										enabled : true,
										format : this.formatter,
										formatter:function() {
											if(this.y<1000000)
							                return (this.y/1000).toFixed(2) +' (mil)';
											else
												return (this.y/1000000).toFixed(2) +' (M)';
							            },
										connectorWidth : 1,
										style : {
											fontWeight : 'bold'
										},
										distance : 1,
										color : 'black'
									},
									showInLegend : true
								}
							},
							legend : {
								enabled : false,
								layout : 'vertical',
								backgroundColor : '#FFFFFF',
								align : 'left',
								verticalAlign : 'top',
								x : 0,
								y : 50,
								symbolWidth : 0
							},
							series : [ {
								events : {
									click : function(e) {	
										//loading en grafica de barras
										var elements = $("[name='graficaBarras']");
										for(i = 0; i < elements.length; i++)		
											loading(elements[i].id);	
																														
										$('#pie').highcharts().setTitle({ text: e.point.name + " " + formatNumber(e.point.y, "$")});
										
										if(lastSelected != undefined)
											$('#pie').highcharts().series[0].data[$($("#btn_" + lastSelected)).attr("index")].slice();
										$("#btn_" + lastSelected).removeClass("colorSelected"+lastSelected);										
										lastSelected = e.point.region;											
										regionClicked(e.point.region);										
									}
								},
								type : 'pie',
								name : ' ',
								data : dataSeriePie
							} ]
						});		
				
		if($('#contenedorBotonesRegiones').text().length == 0)
		{
			data.enumerateArrayUsingFunction(function(obj, index){
				var color = colorsPie[index].substring(1);								
				$('#contenedorBotonesRegiones').append('<style>.color'+color+':hover {background-color:#'+color+';} .colorSelected'+ obj.regionId +' {background-color:#'+color+';}></style><a id="btn_' + obj.regionId + '" index=' + index + ' class="large-7 button round noBackgroudButton color'+color+'" style="font-size: 12px; border-color:#'+color+';" >'+obj.descRegion+'</a>');
			});
			
			$('#contenedorBotonesRegiones').niceScroll({cursorwidth:'15px',oneaxismousemode:false,horizrailenabled:false,autohidemode:false});
			$('#contenedorBotonesRegiones').getNiceScroll().resize();
			
		}		else
		{											
			if(parametros['xSem'].servicio != 3 && lastSelected != undefined)
			{
				lastSelected2 = lastSelected;
				$('#pie').highcharts().setTitle({ text: dataSeriePie[$($("#btn_" + lastSelected)).attr("index")].name + " " + formatNumber(dataSeriePie[$($("#btn_" + lastSelected)).attr("index")].y, "$")});				
			}
			else if( lastSelected == undefined)
			{
				$('#pie').highcharts().setTitle({ text: dataSeriePie[$($("#btn_" + lastSelected2)).attr("index")].name + " " + formatNumber(dataSeriePie[$($("#btn_" + lastSelected2)).attr("index")].y, "$")});
			}
			else
			{
				$('#pie').highcharts().setTitle({ text: dataSeriePie[$($("#btn_" + lastSelected)).attr("index")].name + " " + formatNumber(dataSeriePie[$($("#btn_" + lastSelected)).attr("index")].y, "$")});
			}
			lastSelected = undefined;
			
		}		
													
	$("[id*=btn_]").click(function(obj) {	

		var botones = $("[id*=btn_]");		
		for(i = 0; i < botones.length; i++){
			$("#" + botones[i].id).removeClass("colorSelected" + botones[i].id.substring("4"));
		}			
		
		//loading en grafica de barras
		var elements = $("[name='graficaBarras']");
		for(i = 0; i < elements.length; i++)		
			loading(elements[i].id);		
						
		var index = $(this).attr("index");
		regionSeleccionada = index;
		var dataSelectedItem = $('#pie').highcharts().series[0].data[index]; 	
		regionClicked(obj.currentTarget.id.substring(4));
		dataSelectedItem.slice();		
		$('#pie').highcharts().setTitle({ text: dataSelectedItem.name + " " + formatNumber(dataSeriePie[index].y, "$")});			
	});
				
	} else {
		alert("Pie sin datos");

	}	
};

function regionClicked(region)
{
	regionSeleccionada = region;
	nivel			= 1;
	var chart = $('#pie').highcharts();
	
	parametros['xDia'].region = parametros['xSem'].region = region;
	parametros['xDia'].zona = parametros['xSem'].zona = -1;
	
	obtenerVta('xSem', re_zonas, null,{pais: 1, region: region, zona: 0, semana: semanaActual, servicio: 0, tienda : -1, anio : 0 , incHoy: 0});
	
	if($(strSwitchSemanas).is(':checked')){		
		obtenerVta('xDia', re_chartVarDia);		
	}
	else {					
		obtenerVta('xSem', re_chartVarSemana);   	
	}
	
	if(lastSelected != undefined)
		chart.series[0].data[$("#btn_" + lastSelected).attr("index")].slice();	
				
	$("#btn_" + lastSelected).removeClass("colorSelected" + lastSelected);		
	lastSelected = region;		
	$("#btn_" + region).addClass("colorSelected" + region);					   			
	obtenerVta('taXSem', re_chartPieTA, null, {pais: 1, region: region, zona: 0, tienda: -1, anio: 0, semana: semanaActual, carrier: '', incHoy: 0});
	$("[id*=regionL]").html("Región: "+dataSeriePie[$($("#btn_" + lastSelected)).attr("index")].name);
	$("[id*=tiendaL]").hide();
	$("[id*=zonaL]").hide();
}

function zonaClicked(region, zona)
{
	nivel			= 2;
	parametros['xDia'].zona = parametros['xSem'].zona = zona;
	
	obtenerVta('tiendaXSem', re_tiendas, null, {pais: 1, region: region, zona: zona, semana: semanaActual, tienda: 0 , servicio: 0, anio : 0, incHoy: 0});
	
	$("#btnZ_" + zona).addClass("colorSelected"+region);
	
	if($(strSwitchSemanas).is(':checked')){		
		obtenerVta('xDia', re_chartVarDia);
	}
	else {					
		obtenerVta('xSem', re_chartVarSemana);   	
	}
								   			
	obtenerVta('taXSem', re_chartPieTA, null, {pais: 1, region: region, zona: zona, tienda: -1, anio: 0, semana: semanaActual, carrier: '', incHoy: 0});
	$("[id*=tiendaL]").hide();
}

function tiendaClicked(region, zona, tienda)
{	nivel			= 3;
	parametros['tiendaXDia'].region = parametros['tiendaXSem'].region = region;
	parametros['tiendaXDia'].zona = parametros['tiendaXSem'].zona = zona;
	parametros['tiendaXDia'].tienda = parametros['tiendaXSem'].tienda = tienda;
	
	parametros['tiendaXDiaComp'].region = parametros['tiendaXSemComp'].region = region;
	parametros['tiendaXDiaComp'].zona = parametros['tiendaXSemComp'].zona = zona;
	parametros['tiendaXDiaComp'].tienda = parametros['tiendaXSemComp'].tienda = tienda;

	
	$("#btnT_" + tienda).addClass("colorSelected"+region);
	
	if($(strSwitchSemanas).is(':checked')){
		obtenerVta('tiendaXDia', re_chartVarDia);
		
	}
	else {
		obtenerVta('tiendaXSem', re_chartVarSemana);   	
	}
								   			
	obtenerVta('tiendaTAxSem', re_chartPieTA, null, {pais: 1, region: region, zona: zona, semana: semanaActual, tienda: tienda, carrier: '', incHoy: 0});
}


function back()
{
	$('#regionTitle').html("Regiones");
	$("#btnBack").fadeOut("fast");
    $("#contenedorBotonesTiendas").fadeOut("fast",function (){ 
		    $("#contenedorBotonesRegiones").fadeIn("slow");  
	});
}

// -------------------------------------------------------------------------------------
// 									Ventas TA PIE
// -------------------------------------------------------------------------------------

function re_chartPieTA(data) {		
	if (data != null && data != "" && data != undefined) {
		var length = data.ventaTAxSemanaArray.length;
		var totalTA = 0;
		element = null;
		var dataTAPie = new Array(length);
		var dataTA = {};
		for (var i = 0; i < length; i++) {
			element = data.ventaTAxSemanaArray[i];
			carrier_min = element.carrier.toLowerCase();
			if(!(carrier_min in dataTA) )
				dataTA[carrier_min]=element.monto;
			else
				dataTA[carrier_min]=dataTA[carrier_min]+element.monto;
			totalTA += element.monto;
		}
		var index=0;
		$("[id*=td_]").html("<span id='alineaIzquierda'>$ </span>"+"<span id='alineaDerecha'>"+formatNumber(0)+" </span>");
		for (var key in dataTA) {
			 dataTAPie[index]={ name:key , y:dataTA[key],color:colorsTA[key] };
			 $('#td_'+key).html("<span id='alineaIzquierda'>$ </span>"+"<span id='alineaDerecha'>"+formatNumber(dataTA[key])+" </span>");
		    index++;
		}
		
		$('#pieTA')
				.highcharts(
						{
							chart : {
								plotBackgroundColor : null,
								plotBorderWidth : null,
								plotShadow : false,
								height:280
							},
							title : {
								text : 'Ventas tiempo Aire ' + formatNumber(totalTA, "$")
							},
							tooltip : {
								pointFormat : '{series.name}: <b>{point.percentage:.1f}%</b>'
							},
							colors : colorsPie,
							plotOptions : {
							    series: {
							        pointPadding: 0,
							        groupPadding: 0,
							        margin: 0
							        },
								shadow : true,
								pie : {
									allowPointSelect : true,
									cursor : 'pointer',
									dataLabels : {
										enabled : true,
										format : this.formatter,
										formatter:function() {
											if(this.y<1000000)
												return (this.y/1000).toFixed(2) +' (mil)';
											else
											return (this.y/1000000).toFixed(2) +' (M)';
							            },
										connectorWidth : 1,
										style : {
											fontWeight : 'bold'
										},
										distance : 1,
										color : 'black'
									},
									showInLegend : true
								}
							},
							legend : {
								enabled : false,
								layout : 'vertical',
								backgroundColor : '#FFFFFF',
								align : 'left',
								verticalAlign : 'top',
								x : 0,
								y : 50,
								symbolWidth : 0
							},
							series : [ {
								events : {
									click : function(e) {																					
										$('#pieTA').highcharts().setTitle({ text: e.point.name.toUpperCase() + " " + formatNumber(e.point.y, "$")});
									}
								},
								type : 'pie',
								name : ' ',
								data : dataTAPie
							} ]
						});
	} else {
		alert("Pie sin datos");

	}
};

// -------------------------------------------------------------------------------------
// 									Ventas Semanas
// -------------------------------------------------------------------------------------

function re_chartVarSemana(data) {
	
	$('#anioAnterior').hide();
	if(nivel==0){
		parametros['xSemComp'].anio = anioAnterior;
		obtenerVta('xSemComp', re_chartVarSemanaAnterior);
	}
	
	if(nivel==3){
		parametros['tiendaXSemComp'].anio = anioAnterior;
		obtenerVta('tiendaXSemComp', re_chartVarSemanaAnterior); 
	}
	    
	
	$("#labelActual").html("Semana Actual");
	var dataSerieVReal = new Array();
	var dataSerieVAver = new Array();
	var catSemana = new Array();

	if (data != null && data != "" && data != undefined) {
		var length = data.ventaxSemanaArray.length;
		element = null;
		var serie1=[0,0];
		var serie2=[0,0];
		
		if(length>0){
			 serie1[0]=data.ventaxSemanaArray[0].monto;
			 serie1[1]=data.ventaxSemanaArray[0].monto;
			 weeksNow  = data.ventaxSemanaArray;
			 serie2[0]=data.ventaxSemanaArray[0].montoPromedio;
			 serie2[1]=data.ventaxSemanaArray[0].montoPromedio;
			
			 
		for (var i = 0; i < length; i++) {
			element = data.ventaxSemanaArray[i];
			if(element.monto>serie1[1])
				serie1[1]=element.monto;
			else if(element.monto<serie1[0])
				serie1[0]=element.monto;
			
			if(element.montoPromedio>serie2[1])
				serie2[1]=element.montoPromedio;
			else if(element.montoPromedio<serie2[0])
				serie2[0]=element.montoPromedio;
			dataSerieVAver[i] = element.montoPromedio;
			catSemana[i] = element.semana + "";
			if (i == length - 1) {
				dataSerieVReal[i] = {
					y : element.monto,
					color : '#4cd964'
				};
			} else
				dataSerieVReal[i] = element.monto;
			
		}
		}
		
		maxColumn=serie1[1];
			
		$("#" + strVarweekId).highcharts(
						{
							chart : {
								type : 'column',
//								type : 'area',
								backgroundColor: 'transparent'
							},
							title : {
								text : ' '
							},
							subtitle : {
								text : ' '
							},
							scrollbar : customScrollHChart,
							xAxis : {
								max :  (length<noBarras)?length-1:noBarras,
								categories : catSemana
							},
							yAxis : [ {// left yAxis
								min : 0,
								max : serie1[1],
								title : {
									text : 'Venta Real'
								},
								lineWidth : 0,
								minorGridLineWidth : 0,
								lineColor : 'transparent',
								gridLineWidth : 0
							}, {// Right yAxis
								min : 0,
								max : serie2[1],
								gridLineWidth : 0,
								title : {
									text : 'Venta Promedio',
									style : {
										color : '#AA4643'
									}
								},
								labels : {
									formatter : function() {
										return this.value + ' ';
									},
									style : {
										color : '#AA4643'
									}
								},
								opposite : true
							} ],
							legend : {
								enabled : false,
								backgroundColor : '#000000'
							},
							tooltip : {
								formatter:function(){
									return '<span>Semana '+ this.x +'</span>'
									+'<table><tr><td style="color:'+ this.series.color +';">'+ this.series.name+': </td>'+
									'<td><b>'+formatNumber(this.y, '$')+'</td></tr></table>';
								},
								shared : false,
								useHTML : true
							},
							plotOptions : {
								shadow : true,
								column : {
									fillOpacity: 0.3,
									pointPadding : 0.1,
									borderWidth : 0,
									groupPadding : 0
								},
								spline : {
									lineColor : 'red',
									lineWidth: 3,
								},
								area :{
									lineWidth: 3,
									lineColor: 'gray',
									fillColor: '#A5A5A5',
									fillOpacity: 0.3,
				                    marker: {
				                    	fillcolor: 'gray',
				                    	lineColor: 'gray',
				                        symbol: 'circle',
				                    }
								}
							},
							series : [ {
								name : 'Venta Real',
								data : dataSerieVReal,
								zIndex: 2
							}, {
								type : 'spline',
								name : 'Venta Promedio',
								yAxis : 1,
								data : dataSerieVAver,
								zIndex: 3,
								marker : {
									lineWidth : 3,
									lineColor : 'red',
									fillColor : 'red'
								}
							} ]
						});
		
		
		if(nivel!=0 && nivel!=3){
			var chart = $("#" + strVarweekId).highcharts();
			if(length>noBarras)
	        chart.xAxis[0].setExtremes(length-noBarras,	length-1 ,true);
		}        
        
	} else {
		console.log("Var Semana Chart sin datos");

	}
}


function re_chartVarSemanaAnterior(data){
	var dataSerieVReal = new Array();
	var max=0;


			
			if (data != null && data != "" && data != undefined) {
				var length = data.ventaxSemanaArray.length;
				element = null;
				
				if(length>0){
				var noData;
				max=data.ventaxSemanaArray[0].monto;
				element = data.ventaxSemanaArray[0];
				
						
					for(noData= 0, i=0; (noData< weeksNow.length) && (i < length); noData++ )	{
						
						if(weeksNow[noData].semana== element.semana)
						{
							
							if(element.monto>max)
								max=element.monto;

								dataSerieVReal[i+noData] = element.monto;
								i++;
								element = data.ventaxSemanaArray[i];
							}
						else
						dataSerieVReal[noData]= 0;
							}
			
$('#anioAnterior').show();
	
//  Año anterior
	var chart = $("#" + strVarweekId).highcharts();
	
	if(chart!=undefined){
    chart.addSeries({
		name: 'Año anterior',
		data: dataSerieVReal,
		type : 'area',
		zIndex: 1
	}
	);
    
if(max>maxColumn)
    chart.yAxis[0].update({
    	max: max
    });
	}
	
		}
		}
			
			length= weeksNow.length;
			var chart = $("#" + strVarweekId).highcharts();
			if(length>noBarras)
	        chart.xAxis[0].setExtremes(length-noBarras,	length-1 ,true);
			
}

//-------------------------------------------------------------------------------------
//									Ventas Dia
//-------------------------------------------------------------------------------------

function re_chartVarDia(data) {

	$('#anioAnterior').hide();

	if(nivel==0){
		parametros['xDiaComp'].anio = anioAnterior;
		obtenerVta('xDiaComp', re_chartVarDiaAnterior);
	}
	
	if(nivel==3){
		parametros['tiendaXDiaComp'].anio = anioAnterior;
		obtenerVta('tiendaXDiaComp', re_chartVarDiaAnterior); 
	}
	    
	
	$("#labelActual").html("Día Actual");
	var plotBandSemana = new Array();
	var plotLinesSemana = new Array();
	var dataSerieVReal = new Array();
	var dataSerieVAver = new Array();
	var catDia = new Array();

	if (data != null && data != "" && data != undefined) {
		var length = data.ventaxDiaArray.length;
		element = null;
		indice = 0.5;
		nindice = 0.5;
		total = 0;
		if (length != 0)
			semana = data.ventaxDiaArray[0].semana;
		plotLine = null;
		plotBand = null;
		var serie1 = [ 0, 0 ];
		var serie2 = [ 0, 0 ];

		if (length > 0) {
			serie1[0] = data.ventaxDiaArray[0].monto;
			serie1[1] = data.ventaxDiaArray[0].monto;
			daysNow  = data.ventaxDiaArray;
			serie2[0] = data.ventaxDiaArray[0].montoPromedio;
			serie2[1] = data.ventaxDiaArray[0].montoPromedio;
		}
			for (var i = 0; i < length; i++) {
				element = data.ventaxDiaArray[i];
				
				if (element.monto > serie1[1])
					serie1[1] = element.monto;
				else if (element.monto < serie1[0])
					serie1[0] = element.monto;

				if (element.montoPromedio > serie2[1])
					serie2[1] = element.montoPromedio;
				else if (element.montoPromedio < serie2[0])
					serie2[0] = element.montoPromedio;

				if (i == length - 1) {
					dataSerieVReal[i] = {
						y : element.monto,
						fecha:element.fecha,
						color : '#4cd964',
						ant:dataSerieVReal[i-7]!=undefined?'<tr><td>'+data.ventaxDiaArray[i-7].fecha+'</td><td><b>'+formatNumber(dataSerieVReal[i-7].y/1000000, '$')+'</td>':'',
								ant2:dataSerieVReal[i-14]!=undefined?'<tr><td>'+data.ventaxDiaArray[i-14].fecha+'</td><td><b>'+formatNumber(dataSerieVReal[i-14].y/1000000, '$')+'</td>':'',
								varia:dataSerieVReal[i-7]!=undefined?(((100*element.monto/dataSerieVReal[i-7].y))-100).toFixed(2):'',
								varia2:dataSerieVReal[i-14]!=undefined?(((100*element.monto/dataSerieVReal[i-14].y))-100).toFixed(2):''
					};
				} else
					dataSerieVReal[i] = {
						y : element.monto,
						fecha:element.fecha,
						ant:dataSerieVReal[i-7]!=undefined?'<tr><td>'+data.ventaxDiaArray[i-7].fecha+'</td><td><b>'+formatNumber(dataSerieVReal[i-7].y/1000000, '$')+'</td>':'',
						ant2:dataSerieVReal[i-14]!=undefined?'<tr><td>'+data.ventaxDiaArray[i-14].fecha+'</td><td><b>'+formatNumber(dataSerieVReal[i-14].y/1000000, '$')+'</td>':'',
						varia:dataSerieVReal[i-7]!=undefined?(((100*element.monto/dataSerieVReal[i-7].y))-100).toFixed(2):'',
						varia2:dataSerieVReal[i-14]!=undefined?(((100*element.monto/dataSerieVReal[i-14].y))-100).toFixed(2):''
					};

				dataSerieVAver[i] = element.montoPromedio;
				tmp = element.fecha;
				tmp = tmp.substring(0, 2);
				catDia[i] = tmp;
				
				
				if (element.semana != semana) {
					ftot = total/1000000;
					ftot = ftot.toFixed(2);
					nindice = i - .5;
					plotLine = {
						color : 'gray',
						width : 3,
						value : nindice,
						zIndex : 1
					};

					plotBand = {
						color : 'transparent',
						from : indice+3,
						to : nindice-3,
						label : {
							text : '<div  class="plotBandLabel">Semana '
									+ semana + ' <p>$ ' + ftot
									+ '(millon)</p></div>',		
							useHTML : true
						}
					};
					plotLinesSemana.push(plotLine);
					plotBandSemana.push(plotBand);
					plotBand = null;
					semana = element.semana;
					indice = nindice;
					total = 0;
				}
				total += element.monto;
			}
			
			maxColumn=serie1[1];
			
				$("#" + strVarDayId).highcharts(
					{
						chart : {
							type : 'column',
							backgroundColor: 'transparent'
						},
						title : {
							text : ' '
						},
						subtitle : {
							text : ' '
						},
						scrollbar : customScrollHChart,
						xAxis : {
							max :  (length<noBarras)?length-1:noBarras,
							categories : catDia,
							plotLines : plotLinesSemana,
							plotBands : plotBandSemana
						},
						yAxis : [ {// left yAxis
							min : 0,
							max : serie1[1],
							title : {
								text : ' '
							},
							lineWidth : 0,
							minorGridLineWidth : 0,
							lineColor : 'transparent',
							gridLineWidth : 0
						}, {// Right yAxis
							min : 0,
							max : serie2[1],
							gridLineWidth : 0,
							title : {
								text : 'Venta Promedio',
								style : {
									color : '#AA4643'
								}
							},
							labels : {
								formatter : function() {
									return this.value + ' ';
								},
								style : {
									color : '#AA4643'
								}
							},
							opposite : true
						} ],
						legend : {
							enabled : false,
							backgroundColor : '#000000',
						},
						tooltip : {
							formatter : function() {
								var headT='<th>(Cifras Millones $)</th><th></th>';
								var divisor=1000000;
								
								if(nivel==3){
									headT='<th>(Cifras Miles $)</th><th></th>';
									divisor=1000;
								}
								
								var html;
								var varia='';
								var varia2='';
								
								if(this.point.ant!=undefined){
									if(this.point.varia!=''){
										headT+='<th>Variaci\u00f3n</th>';
										varia='<span style="color:#67BA5D;">'+this.point.varia+'%</span>';
										if(this.point.varia<0)
											varia='<span style="color:#FF3232;">'+this.point.varia+'%</span>';
										
									}
									if(this.point.varia2!=''){
										varia2='<span style="color:#67BA5D;">'+this.point.varia2+'%</span>';
										if(this.point.varia2<0)
											varia2='<span style="color:#FF3232;">'+this.point.varia2+'%</span>';
									}
									
									html='<table class="weekTooltip"><tr>'+headT
									+'<tr><td style="color: #6DA8DB  ;">'
									+ this.point.fecha + '</td>' + '<td><b>'+ formatNumber(this.y/divisor, '$')+ '</td><td>'+varia+ '</td></tr>'								
									+this.point.ant +'<td>'+varia2+ '</td></tr>'
									+this.point.ant2 +'<td></td></tr>'								
									+'</table>';
									}
								else{
									html='<span >'+ this.x +'</span>'
									+'<table><tr><td style="color:'+ this.series.color +';">'+ this.series.name+': </td>'+
									'<td><b>'+formatNumber(this.y, '$')+'</td></tr></table >';
								}
								
								return html;
							},
							shared : false,
							useHTML : true
						},
						plotOptions : {
							shadow : true,
							column : {
								pointPadding : 0.1,
								borderWidth : 0,
								groupPadding : 0
							},
							spline : {
								lineColor : 'red',
								lineWidth: 3,
							},
						
						area :{
							lineWidth: 3,
							lineColor: 'gray',
							fillColor: '#A5A5A5',
							fillOpacity: 0.3,
		                    marker: {
		                    	fillcolor: 'gray',
		                    	lineColor: 'gray',
		                        symbol: 'circle',
		                    }
						 }
						},
						series : [ {
							name : 'Venta Real',
							data : dataSerieVReal,
							zIndex: 2
						}, {
							type : 'spline',
							name : 'Venta Promedio',
							yAxis : 1,
							data : dataSerieVAver,
							marker : {
								lineWidth : 3,
								lineColor : 'red',
								fillColor : 'red'
							},
							zIndex: 3
						} ]
					});
			
				
				if(nivel!=0 && nivel!=3){
				var chart = $("#" + strVarDayId).highcharts();
				if(length>noBarras)
		        chart.xAxis[0].setExtremes(length-noBarras,	length-1 ,true);
				}
	
	} else {
		console.log("Var Dia Chart sin datos");
	}
}

function re_chartVarDiaAnterior(data){
	var dataSerieVReal = new Array();
	
	var max=0;


		 
	if (data != null && data != "" && data != undefined) {
		var length = data.ventaxDiaArray.length;
		element = null;
		
		if(length>0){
			
			max=data.ventaxDiaArray[0].monto;
		var noData;
		i=0;
		element = data.ventaxDiaArray[0];
		
		if(daysNow[0].fecha.substring(3,5)>= element.fecha.substring(3,5)){
			if(daysNow[0].fecha.substring(0,2)> element.fecha.substring(0,2)){
				do{
					
					i++;
					element = data.ventaxDiaArray[i];
					
				}
				while(!(daysNow[0].fecha.substring(0,5)== element.fecha.substring(0,5)));
				
			}
		}
		j=length-i;
		for(noData= 0 ; (noData< daysNow.length) && (i < length); noData++ )	{
			
			if(daysNow[noData].fecha.substring(0,5)== element.fecha.substring(0,5))
			{
				
				if(element.monto>max)
					max=element.monto;
				
					dataSerieVReal[noData] = element.monto;
					i++;
					element = data.ventaxDiaArray[i];
				}
			else
			dataSerieVReal[noData]= 0;
				}
			
			
	$('#anioAnterior').show();
	
	//  Año anterior
		var chart = $("#" + strVarDayId).highcharts();
    
		if(chart!=undefined){
		    chart.addSeries({
				name: 'Año anterior',
				data: dataSerieVReal,
				type : 'area',
				zIndex: 1
			}
		);
	    
		if(max>maxColumn)
		    chart.yAxis[0].update({
		    	max: max
		    });
		}
		}
	}
	
	length= daysNow.length;
		
	var chart = $("#" + strVarDayId).highcharts();
	if(length>noBarras)
    chart.xAxis[0].setExtremes(length-noBarras,	length-1 ,true);
	
}

//-------------------------------------------------------------------------------------
//									Varianza x Semana
//-------------------------------------------------------------------------------------
function re_chartVarXSem(data) {
	var catVartSem=new Array();
	var dataSerieVarSem=new Array();
	var varSemTitle="";
	if (data != null && data != "" && data != undefined) {
		var length = data.varianzaXSemArray.length;
		element = null;		
		if(length!=0){
		element = data.varianzaXSemArray[0];
		if(semanaActual<3){
			year=element.variacionxSemAnt2.fecha.substring(0, 4);
			month=element.variacionxSemAnt2.fecha.substring(5, 7);
			day=element.variacionxSemAnt2.fecha.substring(8, 10);
			myDate0=new Date();
			  myDate0.setFullYear(year,month-1,day);
			varSemTitle="Variaciones vs semana " + myDate0.getWeek();
		}
		else
			varSemTitle="Variaciones vs semana " + (element.semana - 2);
		}else{
			$('#varxSem').html("No hay datos para graficar").css("text-align","center");
			return;
		}
		for (var i = 0; i < length; i++) {
			element = data.varianzaXSemArray[i];
			if (element.variacionxSemAnt2.variacion<0) {
				dataSerieVarSem[i] = {
					y : element.variacionxSemAnt2.variacion,
					color : 'red'
				};
			} else
			dataSerieVarSem[i] =  {
					y : element.variacionxSemAnt2.variacion
				};
			catVartSem[i]=element.nombreZona;
		}
		
		insertionSort( dataSerieVarSem, catVartSem);
		
    $('#varxSem').highcharts({

		chart : {
			type: 'bar',
	        spacingRight: 50
		},
		plotOptions : {
			shadow : true,
		},
        title: {
            text: varSemTitle
        },
		legend : {
			enabled : false,
			backgroundColor : '#000000',
		},
        xAxis: {
            categories: catVartSem
        },
		yAxis :  {
			title : {
				text : ' '
			},
			minorGridLineWidth : 0,
			gridLineWidth : 0
		},
        series: [ {
            name: ' ',
            data: dataSerieVarSem
        }]
    });
    
	} else {
		alert("varianza semanal sin datos");

	}
}

//-------------------------------------------------------------------------------------
//									Varianza x Dia
//-------------------------------------------------------------------------------------


function re_chartVarXDia(data) {		
	var catVartSem=new Array();
	var dataSerieVarDia=new Array();
	var varSemTitle="";
	if (data != null && data != "" && data != undefined) {
		var length = data.varianzaArray.length;
		
		element = null;
		if(length!=0){
		element = data.varianzaArray[0];
		varSemTitle="Variaciones vs dia " + element.variacion2SemAnt.fecha.substring(0, 10);
		}else{
			$('#varxDia').html("No hay datos para graficar").css("text-align","center");
			return;
		}
		for (var i = 0; i < length; i++) {
			element = data.varianzaArray[i];
			if (element.variacion2SemAnt.variacion<0) {
				dataSerieVarDia[i] = {
					y : element.variacion2SemAnt.variacion,
					color : 'red'
				};
			} else
			dataSerieVarDia[i] ={
					y : element.variacion2SemAnt.variacion
				};
			
			catVartSem[i]=element.nombreZona;
		}
	
		insertionSort( dataSerieVarDia, catVartSem);
			
    $('#varxDia').highcharts({
        chart: {
            type: 'bar',
            spacingRight: 50
        },
        title: {
            text: varSemTitle
        },
		legend : {
			enabled : false
		},
        xAxis: {
            categories: catVartSem
        },
		yAxis :  {
			title : {
				text : ' '
			},

			gridLineWidth : 0
		},
        series: [ {
            name: ' ',
            data: dataSerieVarDia
        }]
    });
    
	} else {
		alert("varianza semanal sin datos");

	}
}

//-------------------------------------------------------------------------------------
//									Tablas
//-------------------------------------------------------------------------------------
function re_popUpTA(data) {
	

	if (data != null && data != "" && data != undefined) {
		var length = data.ventaTAxSemanaArray.length;
		element = null;
		var dataTAPie = new Array(length);
		var dataTA = {};
		for (var i = 0; i < length; i++) {
			element = data.ventaTAxSemanaArray[i];
			carrier_min=element.carrier.toLowerCase();
			if(!(carrier_min in dataTA) )
				dataTA[carrier_min]=element.monto;
			else
				dataTA[carrier_min]=dataTA[carrier_min]+element.monto;
		}
		var index=0;
		for (var key in dataTA) {
			 dataTAPie[index]={ name:key , y:dataTA[key],color:colorsTA[key] };
			 
		    $('#td_'+key).html("<span id='alineaIzquierda'>$ </span>"+"<span id='alineaDerecha'>"+formatNumber(dataTA[key])+" </span>");
		    index++;
		}
	}
	
	$('body').bind('click',unloadPopupBox);
}

function re_tablaVaria (data){
	 var weekNumber = semanaActual;
	 var total= [0,0,0];
	 var prom= [0,0,0];
	 var varia= [0,0,0];
	 var activas=[0,0,0];

	 
	 if (data != null && data != "" && data != undefined) {
	  var length = data.ventaxDiaArray.length;
	  element = null; 
	  diaAnt=0;
	  diaAnt2=0;
	  first=true;
	  for (var i = length-1; i > 0; i--) {

	   element = data.ventaxDiaArray[i];
	   if(element.semana!=weekNumber){
	    break;
	    }
	    total[0]+=element.monto;
	   diaAnt=i-7;
	   diaAnt2=i-14;
	   element = data.ventaxDiaArray[diaAnt];
	    total[1]+=element.monto;
	   element = data.ventaxDiaArray[diaAnt2];
	    total[2]+=element.monto;
	    if(first){
	     activas[0]=data.ventaxDiaArray[i].tiendas;
	     activas[1]=data.ventaxDiaArray[diaAnt].tiendas;
	     activas[2]=data.ventaxDiaArray[diaAnt2].tiendas;
	     first=false;
	    }
	  }
	  for(var i = 0; i < total.length; i++){
	   prom[i]=total[i]/1000;
	   $('#vartdPro_'+i).html("<span id='alineaIzquierda'>$ </span>"+"<span id='alineaDerecha'>"+formatNumber(prom[i].toFixed(2))+" </span>");
	if(i>0){
		varia[i]=100-((total[i]*100)/total[i-1]);
	   $('#vartdVar_'+(i-1)).html(varia[i].toFixed(2)+"%");
	  }
	   $('#vartdAct_'+i).html(activas[i]);
	  }
	 }else {
	  alert("Tabla varia sin datos");
	 }
	}

function muestraTotal()
{
	//obtenerVta('xSem', function(data){$("#txtVentasRegion").html(formatNumber((data != null && data != undefined && data.ventaxSemanaArray[0] != undefined)?data.ventaxSemanaArray[0].monto:0.0, "$") + " es el total de ventas para la semana " + semanaActual + ", revisa los deltalles por regi&oacute;n");}, null, {pais: 1, region: -1, zona: -1, semana: semanaActual, servicio: parametros.xSem.servicio, tienda : -1, anio : 0, incHoy: 0});
}

function unloadPopupBox() {	
	$('#popUpTA').fadeOut("fast");
	$('.row').css({ "opacity": "1"});
	$('body').unbind();
}

function obtieneTok(){


	var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
	var version=parseInt(v[1], 10) +"."+ parseInt(v[2], 10);
	
		if(version>=7.1){
			if(deviceType=='iPhone'){
			window.location.href="itms-services://?action=download-manifest&url="+webManifestIphone+"/manifest.plist";
			}else{
				window.location.href="itms-services://?action=download-manifest&url="+webManifestIpad+"/manifest.plist";
			}
		}else{

	$.ajax({		   
		  type			: 'POST',		  
		  url			:  'obtieneApp',
		  data	: {device : deviceType},
		  success		: generaIpad,
		  error			: function(e){alert("Error al solicitar aplicación");
		  }		                                    
		});

		}

}

function generaIpad(d){

	/*var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
	version = parseInt([parseInt(v[1], 10).parseInt(v[2], 10)],10);
	
	var context= new Array();

	context=window.location.pathname.split("/");
	
	var host="";
	
	if(location.port!="")
		host = "http://"+window.location.hostname+":"+location.port+"/"+context[1];
	else
		host = "http://"+window.location.hostname+"/"+context[1];
	
	
	if(d==undefined)
		alert("No se pudo obtener aplicacion");
	else{

			window.location.href="itms-services://?action=download-manifest&url="+host+"/manifest.plist?tok%3D"+d;

		}*/
}

function loadPopupBox() {
	$('body').unbind();
	obtenerVta('taXSem', re_popUpTA, null, {pais: 1, region: -1, zona:  0, tienda: -1, anio: 0, semana: semanaActual, carrier: '', incHoy: 0});

	$('.row').css({ 
		"opacity": "0.3"  
	});
		
	var tableMarginTop = Math.round( ($('body').height() - 134) / 2 );
	$('#popUpTA').css('margin-top', tableMarginTop);
	$('#popUpTA').fadeIn("fast");	
}

function re_zonas(data){
	$('#zonaTitle').fadeIn();
	$('#contenedorBotonesZonas').empty();
	data.enumerateArrayUsingFunction(function(obj, index){		
		var color = colorsPie[regionSeleccionada].substring(1);		
		var leyenda = obj.monto > 1000000? '(mill)' : '(miles)';				
		$('#contenedorBotonesZonas').append('<a id="btnZ_' + obj.zonaId + '" index=' + index + ' region=' + obj.regionId +' desc='+obj.descZona.replace(/ /g,"-")+ ' class="button round noBackgroudButton color'+color+'" style="font-size: 12px; border-color:#'+color+';" >'+obj.descZona + ' ' + formatNumber(obj.monto > 1000000? obj.monto / 1000000 : obj.monto / 1000,'$') + leyenda + '</a>');
	});
	
	$("[id*=btnZ_]").click(function(obj) {		
		var botones = $("[id*=btnZ_]");		
		for(var i = 0; i < botones.length; i++){			
			$("#" + botones[i].id).removeClass("colorSelected" + botones[i].attributes.region.value);
		}
		zonaClicked(obj.currentTarget.attributes.region.value, obj.currentTarget.id.substring(5));
		$("[id*=zonaL]").html("Zona: "+obj.currentTarget.attributes.desc.value.replace(/-/g," "));
		$("[id*=zonaL]").show();
	});
	$('#contenedorBotonesZonas').niceScroll({cursorwidth:'15px',oneaxismousemode:false,horizrailenabled:false,autohidemode:false});
	$('#contenedorBotonesZonas').getNiceScroll().resize();
}

function re_tiendas(data){
	
	$('#regionTitle').html("Tiendas");
	$('#contenedorBotonesTiendas').empty();
	data.enumerateArrayUsingFunction(function(obj, index){
		var color = colorsPie[regionSeleccionada].substring(1);		
		var leyenda = obj.monto > 1000000? '(mill)' : '(miles)';
		$('#contenedorBotonesTiendas').append('<a id="btnT_' + obj.tienda + '" index=' + index + ' region=' + parametros['xDia'].region+ ' zona=' + parametros['xDia'].zona +' desc='+obj.descTienda.replace(/ /g,"-")+ ' class="button round noBackgroudButton color'+color+'" style="font-size: 12px; border-color:#'+color+';" >'+obj.descTienda + ' ' + formatNumber(obj.monto > 1000000? obj.monto / 1000000 : obj.monto / 1000,'$') + leyenda + '</a>');
	});
	
    $("#contenedorBotonesRegiones").fadeOut("fast",function (){    
		$("#contenedorBotonesTiendas").fadeIn("slow");
		$("#btnBack").fadeIn("slow");
	});
	
	$("[id*=btnT_]").click(function(obj) {
		var botones = $("[id*=btnT_]");		
		for(var i = 0; i < botones.length; i++){			
			$("#" + botones[i].id).removeClass("colorSelected" + botones[i].attributes.region.value);
		}
		tiendaClicked(obj.currentTarget.attributes.region.value,obj.currentTarget.attributes.zona.value, obj.currentTarget.id.substring(5));
		$("[id*=tiendaL]").html("Tienda: "+obj.currentTarget.attributes.desc.value.replace(/-/g," "));
		$("[id*=tiendaL]").show();
	});
	$('#contenedorBotonesTiendas').niceScroll({cursorwidth:'15px',oneaxismousemode:false,horizrailenabled:false,autohidemode:false});
	$('#contenedorBotonesTiendas').getNiceScroll().resize();
	$('#contenedorBotonesZonas').niceScroll({cursorwidth:'15px',oneaxismousemode:false,horizrailenabled:false,autohidemode:false});
	$('#contenedorBotonesZonas').getNiceScroll().resize();
}
function tooltipXDia() {
	var html;
	var headT='<th>(Cifras Millones $)</th><th></th>';
	var varia='';
	var varia2='';
	
	if(this.point.ant!=undefined){
		if(this.point.varia!=''){
			headT+='<th>Variaci\u00f3n</th>';
			varia='<span style="color:#67BA5D;">'+this.point.varia+'%</span>';
			if(this.point.varia<0)
				varia='<span style="color:#FF3232;">'+this.point.varia+'%</span>';
			
		}
		if(this.point.varia2!=''){
			varia2='<span style="color:#67BA5D;">'+this.point.varia2+'%</span>';
			if(this.point.varia2<0)
				varia2='<span style="color:#FF3232;">'+this.point.varia2+'%</span>';
		}
		
		html='<table class="weekTooltip"><tr>'+headT
		+'<tr><td style="color: #6DA8DB  ;">'
		+ this.point.fecha + '</td>' + '<td><b>'+ formatNumber(this.y/1000000, '$')+ '</td><td>'+varia+ '</td></tr>'								
		+this.point.ant +'<td>'+varia2+ '</td></tr>'
		+this.point.ant2 +'<td></td></tr>'								
		+'</table>';
		}
	else{
		html='<span >'+ this.x +'</span>'
		+'<table><tr><td style="color:'+ this.series.color +';">'+ this.series.name+': </td>'+
		'<td><b>'+formatNumber(this.y, '$')+'</td></tr></table >';
	}
	
	return html;
}


function checkIoS(){
	var i = 0,
    iOS = false,
    iDevice = ['iPad', 'iPhone', 'iPod'];

for ( ; i < iDevice.length ; i++ ) {
    if( navigator.platform === iDevice[i] ){
    	deviceType = navigator.platform;
    	iOS = true; 
    	break; 
    }
}

if(iOS){
	$('#btniOS').show();
}

}
