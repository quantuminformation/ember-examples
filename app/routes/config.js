import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(){
    return {
      useFirebase: config.featureFlags['use-firebase'],
      fooFeatureFlag: config.featureFlags['foo-feature-flag'],

    }
  }
});






