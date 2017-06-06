import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('speaker').then(function(data){
      console.log(data)
      return data
    })
/*
    return this.store.findAll('speaker').then(function(data){
      console.log(data)
    })
*/
  },
  afterModel(model){
    return model
/*
    return this.store.findAll('speaker').then(function(data){
      console.log(data)
    })
*/
  }
});




