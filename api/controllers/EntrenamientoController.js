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
//muestra los datos de los entrenamientos seleccionados
   show: function (req, res, next) {
     Entrenamiento.findOne(req.param('id'), function foundEntrenamiento(err, entrenamiento) {
        if (err) return next(err);
        if (!entrenamiento) return next();

  Entrenamiento.query('select a.nombre, a.apellido ' +
                    'from entrenamiento e ' +
                    'inner join alumno a ' +
                    'on a.id_entrenamiento=e.id;', function(err, alumnos) {
          console.log(alumnos);
      if (err) {
        return res.serverError(err);
      }

        res.view({
          entrenamiento: entrenamiento,alumnos:alumnos
        });
      });


     });
   },
//muestra todos los entrenamientos
   index: function(req, res, next){
     Entrenamiento.find(function foundEntrenamiento (err, entrenamiento) {
       if (err) return next(err);

       res.view({
         entrenamiento: entrenamiento
       });
     });
   },
//editar un entrenamiento
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
//eliminar un entrenamiento
  destroy: function(req, res, next) {
    Entrenamiento.destroy(req.param('id')).exec( function() {
      res.redirect('/entrenamiento/');
    });
  },

//query para mostrar los alumnos en los entrenamientos
  alumnosenentrenamiento: function(req, res, next) {
        Entrenamiento.query('select a.nombre, a.apellido ' +
                    'from entrenamiento e ' +
                    'inner join alumno a ' +
                    'on a.id_entrenamiento=e.id;', function(err, entrenamiento) {
          console.log(entrenamiento);
      if (err) {
        return res.serverError(err);
      }
      return res.view({
        entrenamiento: entrenamiento
      });
    }
    );
    }


};