import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=79eb38a23c434b4b8cf8f3702433d5ed&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    })
  }
});
