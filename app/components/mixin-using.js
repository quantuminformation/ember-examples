import Ember from 'ember';
import aMixin from '../mixins/aMixin';

export default Ember.Component.extend(aMixin, {

actions:{
  update(message){
    this.x2(message)
  }
}
});
