import Ember from 'ember';


export function sortSubs(params/*, hash*/) {
  var committee = params[0];
  setTimeout(function() {
    $('#' + committee.parent_committee_id).append('<li>' + committee.name + '</li>');
  },10)
}

export default Ember.Helper.helper(sortSubs);
