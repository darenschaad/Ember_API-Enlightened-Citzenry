import Ember from 'ember';
import ENV from 'enlightened-citizenry/config/environment';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?&' + params.selection + '&apikey=' + ENV.SUNLIGHTFOUNDATION_KEY +'&per_page=50&page=';
    return new Ember.RSVP.hash({
      page1: Ember.$.getJSON(url+'1').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page2: Ember.$.getJSON(url+'2').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page3: Ember.$.getJSON(url+'3').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page4: Ember.$.getJSON(url+'4').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page5: Ember.$.getJSON(url+'5').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page6: Ember.$.getJSON(url+'6').then(function(responseJSON) {
        return responseJSON.results;
      }),
    });
  }
});
