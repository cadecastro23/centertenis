/**
 * ProfesorController
 *
 * @description :: Server-side logic for managing profesors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //actions
  'new': function(req, res) {
    res.view();
  }, //se coloca una coma para decirle a node que viene otro metodo

  //creando un alumno en la bd y pasando esa informacion al proximo metodo
  create: function(req, res, next) {
    Profesor.create( req.params.all(), function profesorCreated(err, profesor) {
      if (err) return next(err);

      res.redirect('/profesor/show/' + profesor.id);
    });
  },

 show: function (req, res, next) {
    Profesor.findOne(req.param('id')).populateAll().exec( function(err, profesor) {
      if (err) return next(err);
      if (!profesor) return next();
      res.view({
        profesor: profesor
      });
    });
  },





  index: function(req, res, next){
    Profesor.find(function foundProfesor (err, profesor) {
      if (err) return next(err);

      res.view({
        profesor: profesor
      });
    });
  },

  edit: function(req, res, next) {
    Profesor.findOne(req.param('id'), function foundProfesor(err,profesor) {
      if (err) return next(err);
      if (!profesor) return next();

      res.view({
        profesor: profesor
      });
    });
  },

  update: function(req, res, next) {
    Profesor.update(req.param('id'), req.params.all(), function ProfesorUpdated(err){
      if (err) {
        return res.redirect('/profesor/edit/' + req.param('id'));
      }

      res.redirect('/profesor/show/' +req.param('id'));
    });
  },

  destroy: function(req, res, next) {
    Profesor.destroy(req.param('id')).exec( function() {
      res.redirect('/profesor/');
    });
  }
};

