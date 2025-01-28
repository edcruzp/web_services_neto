var indicadores = {

    views: {},

    models: {},
    
    loadTemplates: function(views, callback) {
        var deferreds = [];
        $.each(views, function(index, view) {
            if (indicadores[view]) {
                deferreds.push($.get('tpl/' + view + '.html', function(data) {
                    indicadores[view].prototype.template = _.template(data);
                }, 'html'));
            } else {
                alert(view + " not found");
            }
        });
        $.when.apply(null, deferreds).done(callback);
    }
};

indicadores.Router = Backbone.Router.extend({
	routes : {
		'' 			: 'inicio',
		'inicio' 	: 'inicio',
		'ventas' 	: 'ventas',
		'geografia' : 'variacion'
	},
	modulo:'#modulo',
	initialize: function(){
		this.footer= new indicadores.FooterView();
	},
	inicio : function() {
		

		this.loadView(new indicadores.InicioView());
    
	},
	ventas : function() {

		this.loadView(new indicadores.VentasView());
		
	},
	variacion : function() {

		this.loadView(new indicadores.VariacionView());

	},
	
	loadView : function(view) {
		defaultParam();
		this.view && (this.view.close ? this.view.close() : this.view.remove());
		this.view = view;
		$(this.modulo).empty;
		$(this.modulo).html(view.el);
		
		checkIoS();
		
		 $(document).foundation(); 
	},
	
	current : function() {
		return this.view;
	}
	
});	

_.templateSettings = {
		interpolate : /\<\{\=(.+?)\}\>/gim,
		evaluate : /\<\{([\s\S]+?)\}\>/gim,
		escape : /\<\{\-(.+?)\}\>/gim
	};

$(document).on("ready", function () {
    indicadores.loadTemplates(["NavBarView","NavBarView2","NavBarView3","FooterView","InicioConView","VariacionConView"],

        function () {
            indicadores.router = new indicadores.Router();
            Backbone.history.start();
            window.onresize = resize;
        });
  
});
