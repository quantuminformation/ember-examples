import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('emberobject', function () {
    this.route('nested');
  });


  this.route('speakers');
  this.route('speaker',{ path: '/speakers/:id' });

});

export default Router;



