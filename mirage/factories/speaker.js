import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    return `${i} ${faker.name.findName()}`;
  },
  company() {
    return `${faker.company.companyName()}`;
  },



  avatar() {
    return faker.internet.avatar();
  }

});
