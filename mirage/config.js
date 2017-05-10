export default function () {

  this.namespace = 'api';

  this.get('/authors', (schema, request) => {
    return schema.authors.all();
  });
}
