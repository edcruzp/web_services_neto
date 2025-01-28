indicadores.SuperView = Backbone.View.extend({
	initialize : function() {
		this.render();
	},
	render : function() {
		this.$el.html(this.template);
		return this;
	},
	append : function(view) {
		this.$el.append(view.el);
	},
	close : function() {
		this.remove();
	},
	assign : function(selector, view) {
		var selectors;
		if (_.isObject(selector)) {
			selectors = selector;
		} else {
			selectors = {};
			selectors[selector] = view;
		}
		if (!selectors)
			return;
		_.each(selectors, function(view, selector) {
			view.setElement(this.$(selector)).render();
		}, this);
	}
});
indicadores.InicioView = indicadores.SuperView
		.extend({
			events : {
				"click [id*=switchSemanas]" : "switchSemanas",
				"click [id*=srv]" : "srv",
				"click #ventasTAbtn" : "loadPopupBox",
				"click #ventasTAimg" : "loadPopupBox",
				"click #ventasregionimg" : "ventasP",
				"click #variacionimg" : "variaP"
			},
			initialize : function() {

				this.navBar = new indicadores.NavBarView({
					model : new navBarModel({
						urlLogo : '#/',
						Link1 : '#/ventas',
						Link2 : '#/variacion',
						Desc1 : 'Gráficas de ventas',
						Desc2 : 'Gráficas de variación'
					})
				});
				this.contenedor = new indicadores.InicioConView({
					model : new inicioModel({
						//etiqueta : "Resultados para la semana " + semanaActual
								//+ ", " + strInicioSemActual + ", a  "
								//+ strFinSemActual
					})
				});

				this.render = _.wrap(this.render, function(render) {
					render.apply(this);
					this.afterRender();
				});
				this.render();
			},

			render : function() {

				this.$el.html(this.template);

				this.$el.append(this.navBar.el);
				this.$el.append(this.contenedor.el);
				this.$el.append(indicadores.router.footer.el);

				this.trigger("render");
				return this;
			},
			switchSemanas : function(e) {
				/*if ($(strSwitchSemanas).is(':checked')) {
					loading(strVarweekId);
					$("#" + strVarweekId).attr("id", strVarDayId);
					obtenerVta('xDia', re_chartVarDia);
					this.graficaVisible = true;
				} else {
					loading(strVarDayId);
					$("#" + strVarDayId).attr("id", strVarweekId);
					obtenerVta('xSem', re_chartVarSemana);
					this.graficaVisible = false;
				}*/
			},
			srv : function(e) {
				/*if ($(strTA).is(':checked'))
					this.servicios = (this.servicios | this.prendeTA);
				else
					this.servicios = (this.servicios & this.apagaTA);
				if ($(strIVA).is(':checked'))
					this.servicios = (this.servicios | this.prendeIVA);
				else
					this.servicios = (this.servicios & this.apagaIVA);

				parametros['xDia'].servicio = parametros['xSem'].servicio = this.servicios;
				parametros['xSemComp'].servicio = this.servicios;

				if (this.graficaVisible) {
					loading(strVarDayId);
					obtenerVta('xDia', re_chartVarDia);
				} else {
					loading(strVarweekId);
					obtenerVta('xSem', re_chartVarSemana);
				}
				muestraTotal();*/
			},
			afterRender : function(e) {
				/*$("#separadorFechas").text(
						"Resultados para la semana " + semanaActual + ", "
								+ strInicioSemActual + ", a  "
								+ strFinSemActual);*/
			},
			loadPopupBox : function() {
				//loadPopupBox();
			},
			ventasP : function() {
				location.replace("#/ventas");
			},
			variaP : function() {
				location.replace("#/variacion");
			}
		});
indicadores.InicioConView = indicadores.SuperView.extend({

	initialize : function() {
		this.render();
		this.ready();
	},
	render : function() {
		this.$el.html(this.template(this.model.attributes));
	},
	ready : function() {
		
		$( ".porcentajeInner" ).mouseover(function() {
			  $( "#popPorcentaje" ).css("display","block");
			});
		
		setTimeout(function () {
			$(".fotoUsuario").attr("src","http://portal.gruposalinas.com.mx/fotos/EKT-BAZ/empleados/" + userId + ".jpg");
			$(".nombreUsuario").text(nombreUsuario);
			$(".apUsuario").text(apUsuario);
			$(".amUsuario").text(amUsuario);
			
			inicializaFechayHoraEjecucion();
			inicializaBarra();
			inicializaIndicadores();
			
			
	    }, 500);
		
		if(puestoId == PUESTO_DIRECTOR_GENERAL) {
			setInterval('checkSession()',300000);
			setInterval('checkVentas()',600000);
			setInterval('checkGrafica()',660000);
		}
		
		
		
		
		
		
	}
});

indicadores.VentasView = indicadores.SuperView.extend({

	initialize : function() {

		subTituloCabeceroS = "De " + formateaFechaS(fInicioSemanaActual)
				+ " a " + formateaFechaS(fechaActual);

		this.navBar = new indicadores.NavBarView2({
			model : new navBarModel({
				urlLogo : '#/ventas',
				Link1 : '#/',
				Link2 : '#/variacion',
				Desc1 : 'Inicio',
				Desc2 : 'Gráficas de variación',
				subTituloCabeceroS : subTituloCabeceroS
			})
		});

		tituloCabecero = "Gráficas de Ventas, semana " + semanaActual;
		subTituloCabecero = "De " + strInicioSemActual + " a "
				+ formateaFecha(fechaActual);

		this.contenedor = new indicadores.VentasConView({
			model : new inicioModel({
				tituloCabecero : tituloCabecero,
				subTituloCabecero : subTituloCabecero
			})
		});
		this.render();

	},

	render : function() {
		this.$el.html(this.template);

		this.$el.append(this.navBar.render().$el);
		this.$el.append(this.contenedor.el);
		this.$el.append(indicadores.router.footer.el);

		return this;
	},
	close : function() {
		$('#contenedorBotonesRegiones').empty();
		$('#contenedorBotonesRegiones').remove();
		$('#contenedorBotonesZonas').empty();
		$('#contenedorBotonesZonas').remove();
		$('#contenedorBotonesTiendas').empty();
		$('#contenedorBotonesTiendas').remove();
		this.navBar.remove();
		this.contenedor.remove();
		this.remove();
	}
});
indicadores.VariacionView = indicadores.SuperView
		.extend({

			initialize : function() {

				/*this.navBar = new indicadores.NavBarView({

					model : new navBarModel({
						urlLogo : '#/variacion',
						Link1 : '#/',
						Link2 : '#/ventas',
						Desc1 : 'Inicio',
						Desc2 : 'Gráficas de ventas'
					})
				});*/
			
			this.navBar = new indicadores.NavBarView3({
				model : new navBarModel({
					urlLogo : '#/ventas',
					Link1 : '#/',
					Link2 : '#/variacion',
					Desc1 : 'Inicio',
					Desc2 : 'Gráficas de ventas'
				})
			});

				this.contenedor = new indicadores.VariacionConView({
					model : new variaModel({
						//tituloCabecero : tituloCabecero,
						//subTituloCabecero : subTituloCabecero
					})
				});
				this.render();

			},

			render : function() {

				this.$el.html(this.template);

				this.$el.append(this.navBar.render().$el);
				this.$el.append(this.contenedor.el);
				this.$el.append(indicadores.router.footer.el);
				
				

				return this;
		}
});

/*
indicadores.VentasConView = indicadores.SuperView.extend({

			events : {
				"click [id*=switchSemanas]" : "switchSemanas",
				"click [id*=srv]" : "srv"
			},
			initialize : function() {
				this.servicios = parseInt('00', 2);
				this.prendeTA = parseInt('01', 2);
				this.apagaTA = parseInt('00', 2);
				this.prendeIVA = parseInt('10', 2);
				this.apagaIVA = parseInt('01', 2);
				this.graficaVisible = true;
				nivel = 0;
				this.render();
				this.ready();
			},
			render : function() {

				this.$el.html(this.template(this.model.attributes));
				return this;
			},
			ready : function() {
				console.log("En el ready de variacionconview");
				$(document).ready(function() {

					obtenerVta('xSem', re_chartPie, null, {
						pais : 1,
						region : 0,
						zona : -1,
						semana : semanaActual,
						servicio : 0,
						tienda : -1,
						anio: 0,
						incHoy: 0
					});
					obtenerVta('xDia', re_chartVarDia, null, {
						pais : 1,
						region : -1,
						zona : 0,
						semana : 0,
						servicio : 0,
						tienda : -1,
						anio: 0,
						incHoy: 0
					});
					obtenerVta('taXSem', re_chartPieTA, null, {pais: 1, region: -1, zona:  0, tienda: -1, anio: 0, semana: semanaActual, carrier: '', incHoy: 0});
				});
			},
			switchSemanas : function(e) {

				var strSwitchSemanas = (window.innerWidth < 768) ? "#switchSemanas2"
						: "#switchSemanas";

				if ($(strSwitchSemanas).is(':checked')) {
					$("#" + strVarweekId)
							.html(
									'<img src="images/loading51.gif" class="loading"/>');
					$("#" + strVarweekId).attr("id", strVarDayId);
					if (nivel == 3) {
						obtenerVta('tiendaXDia', re_chartVarDia);
					} else {
						obtenerVta('xDia', re_chartVarDia);
					}
					this.graficaVisible = true;
					$("#labelActual").html("Semana Actual");
				} else {
					$("#" + strVarDayId)
							.html(
									'<img src="images/loading51.gif" class="loading"/>');
					$("#" + strVarDayId).attr("id", strVarweekId);
					if (nivel == 3) {
						obtenerVta('tiendaXSem', re_chartVarSemana);
					} else {
						obtenerVta('xSem', re_chartVarSemana);
					}
					this.graficaVisible = false;
					$("#labelActual").html("Día Actual");
				}
			},
			srv : function(e) {

				var strTA = (window.innerWidth < 768) ? "#srvTA12" : "#srvTA1";
				var strIVA = (window.innerWidth < 768) ? "#srvIVA12" : "#srvIVA1";

				if ($(strTA).is(':checked'))
					this.servicios = (this.servicios | this.prendeTA);
				else
					this.servicios = (this.servicios & this.apagaTA);
				if ($(strIVA).is(':checked'))
					this.servicios = (this.servicios | this.prendeIVA);
				else
					this.servicios = (this.servicios & this.apagaIVA);

				parametros['xDia'].servicio = parametros['xSem'].servicio = this.servicios;
				parametros['tiendaXDia'].servicio = parametros['tiendaXSem'].servicio = this.servicios;
				parametros['tiendaXDiaComp'].servicio = parametros['tiendaXSemComp'].servicio = this.servicios;

				if (this.graficaVisible) {
					loading(strVarDayId);
					if (nivel == 3) {
						obtenerVta('tiendaXDia', re_chartVarDia);
					} else {
						obtenerVta('xDia', re_chartVarDia);
					}
				} else {
					loading(strVarweekId);
					if (nivel == 3) {
						obtenerVta('tiendaXSem', re_chartVarSemana);
					} else {
						obtenerVta('xSem', re_chartVarSemana);
					}
					$("#labelActual").html("Semana Actual");
				}
				muestraTotal();
				obtenerVta('xSem', re_chartPie, null, {
					pais : 1,
					region : 0,
					zona : -1,
					semana : semanaActual,
					servicio : this.servicios,
					tienda : -1,
					anio : 0,
					incHoy: 0
				});
			},
		});
*/

indicadores.VariacionConView = indicadores.SuperView.extend({

	initialize : function() {
		this.render();
		this.ready();
	},
	render : function() {

		this.$el.html(this.template(this.model.attributes));
	},
	ready : function() {
		
		cargaInicial     = true;
		tipoBusqueda = 1;
		esFiltroGeoActivo = false;
		
		$("#listaRegiones").niceScroll({ autohidemode:"cursor",cursorcolor:"#fe6c00"});
		initBusqueda();
		inicializaDatosMapa();
		initMaximizarMapa();
		
		setTimeout(function () {
			crearBuscadorMapas();
			
			//$("#googleMap").css("width",$( document ).width());
			$("#googleMap").css("height",$( document ).height());
			$(".nombreUsuario").text(nombreUsuario);
			$(".apUsuario").text(apUsuario);
			$(".amUsuario").text(amUsuario);
			
	    }, 500);
	}
});

indicadores.NavBarView = indicadores.SuperView.extend({
	defaults : {
		nav : 'navbar',
		urlLogo : '#',
		Link1 : '#',
		Link2 : '#',
		Desc1 : 'link 1',
		Desc2 : 'link 2'
	},

	events : {
		"click .logOut" : "clicked"
	},
	initialize : function() {

		this.render();
	},
	render : function() {

		this.$el.html(this.template(this.model.attributes));
		return this;

	},
	clicked : function(e) {
		e.preventDefault();

		cerrarSesion();
	}
});

indicadores.NavBarView2 = indicadores.SuperView.extend({
	defaults : {
		nav : 'navbar',
		urlLogo : '#',
		Link1 : '#',
		Link2 : '#',
		Desc1 : 'link 1',
		Desc2 : 'link 2'
	},
	events : {
		"click .logOut" : "clicked"
	},
	initialize : function() {
		this.render();

	},
	render : function() {

		this.$el.html(this.template(this.model.attributes));
		return this;
	},
	clicked : function(e) {
		e.preventDefault();

		cerrarSesion();
	}
});

indicadores.NavBarView3 = indicadores.SuperView.extend({
	defaults : {
		nav : 'navbar',
		urlLogo : '#',
		Link1 : '#',
		Link2 : '#',
		Desc1 : 'link 1',
		Desc2 : 'link 2'
	},
	events : {
		"click .logOut" : "clicked"
	},
	initialize : function() {
		this.render();

	},
	render : function() {

		this.$el.html(this.template(this.model.attributes));
		return this;
	},
	clicked : function(e) {
		e.preventDefault();

		cerrarSesion();
	}
});

indicadores.FooterView = indicadores.SuperView.extend({

	className : "row",
	events : {
		"click #appDownload" : "clicked"
	},
	initialize : function() {
		this.render();
	},
	render : function() {
		
		this.$el.html(this.template);
	},
	clicked : function(e) {
		e.preventDefault();
		obtieneTok();
	}
});
