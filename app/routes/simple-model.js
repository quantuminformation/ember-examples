import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // return Ember.RSVP.Promise.resolve([1, 2, 3])
    return new Ember.RSVP.Promise((resolve, reject) => {
      resolve([1, 2, 3])
    })
    /*
        return Ember.RSVP.Promise.reject("You lose, loser, you suck").catch(reason => {
          console.log(reason)
        })
    */
  }
});
