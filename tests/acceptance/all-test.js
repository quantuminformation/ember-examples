import { test } from 'qunit';
import moduleForAcceptance from 'ember-lifecycle/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | all');

test('visiting /all', function(assert) {
  visit('/all');

  andThen(function() {
    assert.equal(currentURL(), '/all');
  });
});
