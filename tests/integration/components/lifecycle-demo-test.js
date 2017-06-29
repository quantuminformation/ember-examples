import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lifecycle-demo', 'Integration | Component | lifecycle demo', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lifecycle-demo}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lifecycle-demo}}
      template block text
    {{/lifecycle-demo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
