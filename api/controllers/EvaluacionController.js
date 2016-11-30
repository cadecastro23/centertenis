/**
 * EvaluacionController
 *
 * @description :: Server-side logic for managing evaluacion
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
//actions
  'new': function(req, res) {
    res.view();
  }, //se coloca una coma para decirle a node que viene otro metodo

/*
'new': function(req, res, err) {
  Profesor.findOne(req.param('entrenado'), function foundProfesor (err, profesor) {
    if (err) return next(err);
    if (!profesor) return next();
    res.view({
      profesor: profesor
    });
  });
},*/



  //creando un evaluacion en la bd y pasando esa informacion al proximo metodo
   create: function(req, res, next) {
     Evaluacion.create( req.params.all(), function evaluacionCreated(err, evaluacion) {
        if (err) return next(err);

        res.redirect('/evaluacion/show/' + evaluacion.id);
     });
   },

   show: function (req, res, next) {
     Evaluacion.findOne(req.param('id'), function foundEvaluacion(err, evaluacion) {
        if (err) return next(err);
        if (!evaluacion) return next();
        res.view({
          evaluacion: evaluacion
        });
     });
   },

   index: function(req, res, next){
     Evaluacion.find(function foundEvaluacion (err, evaluacion) {
       if (err) return next(err);

       res.view({
         evaluacion: evaluacion
       });
     });
   },

  edit: function(req, res, next) {
     Evaluacion.findOne(req.param('id'), function foundEvaluacion(err,evaluacion) {
       if (err) return next(err);
       if (!evaluacion) return next();

       res.view({
        evaluacion: evaluacion
      });
    });
  },

  update: function(req, res, next) {
    Evaluacion.update(req.param('id'), req.params.all(), function EvaluacionUpdated(err){
      if (err) {
        return res.redirect('/evaluacion/edit/' + req.param('id'));
      }

      res.redirect('/evaluacion/show/' +req.param('id'));
    });
  },

  destroy: function(req, res, next) {
    Evaluacion.destroy(req.param('id')).exec( function() {
      res.redirect('/evaluacion/');
    });
  }

};