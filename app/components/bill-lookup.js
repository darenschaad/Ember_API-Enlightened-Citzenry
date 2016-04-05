import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    billLookup(){
      this.sendAction('billLookup');
    }
  }
});
