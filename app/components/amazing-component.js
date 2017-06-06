import Ember from 'ember';

/* eslint-disable */


export default Ember.Component.extend({

  data: { name: 'steve', age: 40 },
  position: 'Developer',
  income: 40000,
  jobDetails: Ember.computed('title', 'income', function () {
    console.log("computed prop update for jobDetails")


    return `${this.get("position")} ${this.get("income").toLocaleString('en-UK', { style: 'currency', currency: 'GBP' })}`
  }),

  log: Ember.observer('income', () => {
    console.log(`Income changed to ${this.get("income")}`)
  }),
  actions: {
    foo(){
      alert("Foo action called ")
    },
    increaseAge(){
      this.set('data.age', this.get("data.age") + 1)
    },
    increaseIncome(){
      this.set('income', this.get("income") + 1)
    }
  },

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
