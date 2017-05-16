import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement(){

    var Person = Ember.Object.extend({
      species: "homo sapiens"
    })

    var Man = Person.extend({
      gender: "male"
    })

    var Woman = Person.extend({
      gender: "female"
    })

    var joe = Man.create({
      name: "Joe"
    })

    var item = joe.get("name")
    item = joe.hasOwnProperty("name")
    item = joe.get("gender")
    item = joe.hasOwnProperty("gender")
    item = joe.get("species")
    item = joe.hasOwnProperty("species")

    item = Man.prototype.isPrototypeOf(joe)
    item = Person.prototype.isPrototypeOf(joe)
    item = Ember.Object.prototype.isPrototypeOf(joe)

  }
})
