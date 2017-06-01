/* eslint-env node */

module.exports = function(environment) {



  var ENV = {
    modulePrefix: 'ember-lifecycle',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: process.env.FIREBASE_apiKey,
      authDomain: process.env.FIREBASE_authDomain,
      databaseURL: process.env.FIREBASE_databaseURL,
      projectId: process.env.FIREBASE_projectId,
      storageBucket: process.env.FIREBASE_storageBucket,
      messagingSenderId: process.env.FIREBASE_messagingSenderId,
    },

    featureFlags: {
      'show-index': true,
      'use-firebase': true,
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['ember-cli-mirage'] = {
    enabled: true
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }


  return ENV;
};
