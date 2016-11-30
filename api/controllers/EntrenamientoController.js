/**
 * EntrenamientoController
 *
 * @description :: Server-side logic for managing Entrenamiento
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
//actions
  'new': function(req, res) {
    res.view();
  }, //se coloca una coma para decirle a node que viene otro metodo


  //creando un Entrenamiento en la bd y pasando esa informacion al proximo metodo
   create: function(req, res, next) {
     Entrenamiento.create( req.params.all(), function entrenamientoCreated(err, entrenamiento) {
        if (err) return next(err);

        res.redirect('/entrenamiento/show/' + entrenamiento.id);
     });
   },

   show: function (req, res, next) {
     Entrenamiento.findOne(req.param('id'), function foundEntrenamiento(err, entrenamiento) {
        if (err) return next(err);
        if (!entrenamiento) return next();
        res.view({
          entrenamiento: entrenamiento
        });
     });
   },

   index: function(req, res, next){
     Entrenamiento.find(function foundEntrenamiento (err, entrenamiento) {
       if (err) return next(err);

       res.view({
         entrenamiento: entrenamiento
       });
     });
   },

  edit: function(req, res, next) {
     Entrenamiento.findOne(req.param('id'), function foundEntrenamiento(err,entrenamiento) {
       if (err) return next(err);
       if (!entrenamiento) return next();

       res.view({
        entrenamiento: entrenamiento
      });
    });
  },

  update: function(req, res, next) {
    Entrenamiento.update(req.param('id'), req.params.all(), function EntrenamientoUpdated(err){
      if (err) {
        return res.redirect('/entrenamiento/edit/' + req.param('id'));
      }

      res.redirect('/entrenamiento/show/' +req.param('id'));
    });
  },

  destroy: function(req, res, next) {
    Entrenamiento.destroy(req.param('id')).exec( function() {
      res.redirect('/entrenamiento/');
    });
  },

  alumnos_en_entrenamiento: function(req, res, next) {
        Alumno.query('select a.nombre, a.apellido ' +
                    'from entrenamiento e ' +
                    'inner join alumno a ' +
                    'on a.id_entrenamiento=e.id;', function(err, alumno) {
      if (err) {
        return res.serverError(err);
      }
      res.view({
        alumno: alumno
      });
    });
    }

};