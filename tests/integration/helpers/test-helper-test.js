
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('test-helper', 'helper:test-helper', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{test-helper inputValue}}`);

  assert.equal(this.$().text().trim(), '1234 1234');
});

