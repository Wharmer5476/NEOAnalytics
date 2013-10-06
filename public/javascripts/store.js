define(['app'], function(App) {

	// Store
	App.Adapter = DS.RESTAdapter.extend();

	App.Adapter.configure('App.ActionItem', {
		primaryKey: ''
	});

	App.Store = DS.Store.extend({
		revision: 12,
		adapter: App.Adapter.create()
	});

	/* ActionItem
	App.ActionItem = DS.Model.extend({

	})
	*/
});
