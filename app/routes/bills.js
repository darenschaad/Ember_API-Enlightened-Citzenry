import Ember from 'ember';
import ENV from 'enlightened-citizenry/config/environment';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=' + ENV.SUNLIGHTFOUNDATION_KEY;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
