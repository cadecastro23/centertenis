/**
 * TurnoController
 *
 * @description :: Server-side logic for managing Turno
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



  //creando un Turno en la bd y pasando esa informacion al proximo metodo
   create: function(req, res, next) {
     Turno.create( req.params.all(), function turnoCreated(err, turno) {
        if (err) return next(err);

        res.redirect('/turno/show/' + turno.codigo);
     });
   },
 //muestra un Turno en la bd y sus datos
   show: function (req, res, next) {
     Turno.findOne(req.param('codigo'), function foundTurno(err, turno) {
        if (err) return next(err);
        if (!turno) return next();
        res.view({
          turno: turno
        });
     });
   },
 //muestra los Turno en la bd
   index: function(req, res, next){
     Turno.find(function foundTurno (err, turno) {
       if (err) return next(err);

       res.view({
         turno: turno
       });
     });
   },
 //edita un Turno en la bd 
  edit: function(req, res, next) {
     Turno.findOne(req.param('codigo'), function foundTurno(err,turno) {
       if (err) return next(err);
       if (!turno) return next();

       res.view({
        turno: turno
      });
    });
  },

  update: function(req, res, next) {
    Turno.update(req.param('codigo'), req.params.all(), function TurnoUpdated(err){
      if (err) {
        return res.redirect('/turno/edit/' + req.param('codigo'));
      }

      res.redirect('/turno/show/' +req.param('codigo'));
    });
  },
 //elimina un Turno en la bd
  destroy: function(req, res, next) {
    Turno.destroy(req.param('codigo')).exec( function() {
      res.redirect('/turno/');
    });
  }

};