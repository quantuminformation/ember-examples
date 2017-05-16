import DS from 'ember-data';

export default DS.Model.extend({

  company: DS.attr("string"),
  name: DS.attr("string"),
  avatar: DS.attr("string"),
  avatar2: DS.attr("string")
});
