import Ember from 'ember';

export default Ember.Route.extend({
  model(param){
    console.log(param)
    return this.store.find('speaker',param.id);
  }
});
