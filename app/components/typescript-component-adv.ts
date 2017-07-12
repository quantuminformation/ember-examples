import Ember from 'ember'
import { action, computed } from 'ember-decorators/object';
import { service } from 'ember-decorators/service';

export default class MyComponent extends Ember.Component {
  @service foo

  someKey = 1
  otherKey = 2

  @computed('someKey', 'otherKey')
  bar (someKey, otherKey) {
    // do stuff
    return someKey + otherKey
  }

  @action
  handleClick () {
    // do stuff
  }
}
