import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement(){
    var emberObject = Ember.Object.create({
      greeting: "hello"
    });

    var jsObject = {
      greeting: "hello"
    };
  }
});
