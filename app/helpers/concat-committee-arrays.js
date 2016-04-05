import Ember from 'ember';

export function concatCommitteeArrays(params/*, hash*/) {
  var concattedArray = [];
  for(var i = 0; i < params.length; i++) {
    concattedArray = concattedArray.concat(params[i]);
  }
  return concattedArray;
}

export default Ember.Helper.helper(concatCommitteeArrays);
