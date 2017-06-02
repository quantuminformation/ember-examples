import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('receives-action-and-model', 'Integration | Component | receives action and model', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{receives-action-and-model}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#receives-action-and-model}}
      template block text
    {{/receives-action-and-model}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
