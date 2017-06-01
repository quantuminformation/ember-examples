
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('multiply-two-nums', 'helper:multiply-two-nums', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{multiply-two-nums 2 4}}`);

  assert.equal(this.$().text().trim(), '8');
});

