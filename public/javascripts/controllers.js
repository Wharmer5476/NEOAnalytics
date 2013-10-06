define(['app'], function(App){

  // Charts
  App.ChartsController = Ember.ArrayController.extend({});


  /* Search
  App.SearchController = Ember.ObjectController.extend({

    activeProduct: null,

    loadProduct: function(id) {
      this.set('activeProduct', App.ActionItemDetail.find(id));
    }
  });
  */

  // Trends
  App.TrendsController = Ember.ArrayController.extend({});
});
