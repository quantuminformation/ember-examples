import Ember from 'ember';
import aMixin from '../mixins/aMixin';

export default Ember.Component.extend(aMixin, {

  fooFromComponent: "Component prop",


  actions: {
    update(message){
      this.x2(message)
    }
  }
});
