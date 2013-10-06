define (['app'], function(App) {

	App.Router.map(fucntion() {
		
		this.route('charts');
		this.route('search');
		this.route('trends');
	});	

	// IndexRoute
	App.IndexRoute = Ember.Route.extend({
	
		redirect: function){
		 this.transitionTo('charts');
		}
	});

	// ChartsRoute
	App.ChartsRoute = Ember.Route.extend({
		
		model: function(){
			return ['First', 'second', 'third'];
		};
	});

	// TrendsRoute
	App.TrendsRoute = Ember.Route.extend({
		model: function(){
			return ['Fourth','Fifth','Sixth'];
		}
	});
});
