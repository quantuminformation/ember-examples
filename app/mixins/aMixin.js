import Ember from 'ember';

export default Ember.Mixin.create({


  simple:Ember.inject.service(),

  x2(value){
    this.set("lastResult", this.multiplyby2(value));
      this.get('list').pushObject(this.get("lastResult"));
  },
  multiplyby2(param){
    return param * 2
  },

  list:[]

});
