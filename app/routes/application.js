import Ember from 'ember';


export default Ember.Route.extend({


  setupController: function (controller, model) {
    this.controller.set('foo-feature-flag', 'hi')
    controller.set('foo-feature-flag', 'hi')
  }
});
