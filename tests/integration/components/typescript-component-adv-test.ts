import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('typescript-component-adv', 'Integration | Component | typescript component adv', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{typescript-component-adv}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#typescript-component-adv}}
      template block text
    {{/typescript-component-adv}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
