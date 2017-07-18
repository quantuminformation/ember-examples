import Ember from 'ember';
import {IFooService} from '../interfaces/foo-service';


var service:IFooService = {
  foo: 3

}

export default Ember.Service.extend(service);
