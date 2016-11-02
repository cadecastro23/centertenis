/**
 * AlumnoController
 *
 * @description :: Server-side logic for managing Alumnoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
//actions
  'new': function(req, res) {
    res.view();
  }, //se coloca una coma para decirle a node que viene otro metodo

  //creando un alumno en la bd y pasando esa informacion al proximo metodo
   create: function(req, res, next) {
     Alumno.create( req.params.all(), function alumnoCreated(err, alumno) {
        if (err) return next(err);

        res.redirect('/alumno/show/' + alumno.id);
     });
   },

   show: function (req, res, next) {
     Alumno.findOne(req.param('id'), function foundAlumno(err, alumno) {
        if (err) return next(err);
        if (!alumno) return next();
        res.view({
          alumno: alumno
        });
     });
   },

   index: function(req, res, next){
     Alumno.find(function foundAlumnos (err, alumnos) {
       if (err) return next(err);

       res.view({
         alumnos: alumnos
       });
     });
   },

  edit: function(req, res, next) {
     Alumno.findOne(req.param('id'), function foundAlumno(err,alumno) {
       if (err) return next(err);
       if (!alumno) return next();

       res.view({
        alumno: alumno
      });
    });
  },

  update: function(req, res, next) {
    Alumno.update(req.param('id'), req.params.all(), function AlumnoUpdated(err){
      if (err) {
        return res.redirect('/alumno/edit/' + req.param('id'));
      }

      res.redirect('/alumno/show/' +req.param('id'));
    });
  },

  destroy: function(req, res, next) {
    Alumno.destroy(req.param('id')).exec( function() {
      res.redirect('/alumno/');
    });
  }

};
