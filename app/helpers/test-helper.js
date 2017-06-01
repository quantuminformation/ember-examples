import Ember from 'ember';

export function testHelper(params/*, hash*/) {
  return `${params} ${params}`;
}

export default Ember.Helper.helper(testHelper);
