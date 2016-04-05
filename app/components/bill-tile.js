import Ember from 'ember';

export default Ember.Component.extend({
  billDetails: false,
  actions: {
    billDetailsShow() {
      this.toggleProperty('billDetails');
    }
  }
});
