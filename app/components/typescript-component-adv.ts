import Ember from 'ember'
import { action, computed } from 'ember-decorators/object';
import { service } from 'ember-decorators/service';

export default class MyComponent extends Ember.Component implements ISomething {
  //@service typescript

  typescript=Ember.inject.service('')

  someKey = 1
  otherKey = 2

  @computed('someKey', 'otherKey')
  bar (someKey, otherKey) {
    // do stuff
    return someKey + otherKey
  }

  @action
  handleClick () {
    console.log("An action called from a typescript component")
  }
}

interface ISomething {
  someKey:Number
  otherKey:Number
  handleClick: () => void
}
