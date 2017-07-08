import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.get('handle'); // @tomdale
  },

  didUpdateAttrs(options) {
    console.log('didUpdateAttrs', options);
  },

  willUpdate(options) {
    console.log('willUpdate', options);
  },

  didReceiveAttrs(options) {
    console.log('didReceiveAttrs', options);
  },

  willRender() {
    console.log('willRender');
  },

  didRender() {
    console.log('didRender');
  },

  didInsertElement() {
    console.log('didInsertElement');
  },

  didUpdate(options) {
    console.log('didUpdate', options);
  },

  willDestroyElement() {
    console.log('willDestroyElement');
  },

  willClearRender() {
    console.log('willClearRender');
  },

  didDestroyElement(options) {
    console.log('didDestroyElement', options);
  },
});
