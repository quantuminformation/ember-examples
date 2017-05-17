import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showAlert(data) {
      alert(`Alert fired by action in ember object route with data from: ${data}`)
    }
  }
});
