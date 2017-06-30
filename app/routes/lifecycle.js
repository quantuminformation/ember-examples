import Ember from 'ember';

export default Ember.Route.extend({


/*
  activate: function () {
    //no longer enter
    this._super();
    //only called once on entering a route.
  },

  beforeModel: function () {
    // any state you want in place before the model is initialized, this is called before any model promises are resolved
    // also could be used to conditionally prevent access to a route by throwing transition.abort
  },

  model: function () {
    // interesting note, if you tranisition into a route via a dynamic route segment this will never
    // not get called because the model will have already been specified ie {{#link-to 'article' article}}
    // in that case use beforeModel or afterModel
  },

  afterModel: function () {
    //anything that may need to reference a model
  },

  serialize: function () {
    // setup any dynamic routes
  },

  setupController: function () {
    // set additional properties on the controller, or override it’s content.
  },

  renderTemplate: function () {
    // can be useful for setting up third party libraries. with a call to this._super
    //also could be used to setup a non-default template without super
  },

  deactivate: function () {
    this._super();
    //no longer exit
  },

  actions: {
    willTransition: function () {
      //can be used to prevent a transition on make sure some state is ready for the next route
    },
  }
*/

});
