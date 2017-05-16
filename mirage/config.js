export default function () {

 // this.namespace = 'api';

  this.get('/speakers', (schema, request) => {
    return schema.speakers.all();
  });

  this.get('/speakers/:id', function(db, request) {
    var id = request.params.id;

    return db.speakers.find(id);
  })
}

