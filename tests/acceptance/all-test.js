import { test } from 'qunit';
import moduleForAcceptance from 'ember-lifecycle/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | all');

test('visiting index', function (assert) {
  visit('/');

  andThen(function () {
    assert.equal(currentURL(), '/');
  });
  visit('/speakers');

  andThen(function () {
    assert.equal(currentURL(), '/speakers');
    pauseTest()
  });


});
