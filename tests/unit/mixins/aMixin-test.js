import Ember from 'ember';
import ShowAlertMixin from 'ember-lifecycle/mixins/aMixin';
import { module, test } from 'qunit';

module('Unit | Mixin | aMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let ShowAlertObject = Ember.Object.extend(ShowAlertMixin);
  let subject = ShowAlertObject.create();
  assert.ok(subject);
});
