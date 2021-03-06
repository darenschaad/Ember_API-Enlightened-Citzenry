import Ember from 'ember';
import ENV from 'enlightened-citizenry/config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=' + ENV.SUNLIGHTFOUNDATION_KEY + '&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
