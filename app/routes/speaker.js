import Ember from 'ember';

export default Ember.Route.extend({
  model([id]){
    console.log(id)
    return this.store.find('speaker',id);
  }
});
