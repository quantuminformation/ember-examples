import Ember from 'ember';

export default Ember.Component.extend({

  //works for both adding a speaker and editing one, if edit mode is false we just display the model without inputs
  isEditMode:false,
  isCreateMode:false,
  actions:{
    save(){

      this.set("isEditMode",false);
    },
    switchToEditMode(){
      this.set("isEditMode",true);
    }
  }

});
