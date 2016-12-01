module.exports = {
//actions

/*
   index: function(req, res, next){
     Deuda.find(function foundEntrenamiento (err, deuda) {
       if (err) return next(err);

       res.view({
         deuda: deuda
       });
     });
   },*/


'new': function(req, res) {
    res.view();
  }, //se coloca una coma para decirle a node que viene otro metodo


  //creando un Entrenamiento en la bd y pasando esa informacion al proximo metodo
   create: function(req, res, next) {
     Deuda.create( req.params.all(), function deudaCreated(err, deuda) {
        if (err) return next(err);

        res.redirect('/deuda/index/' + deuda.id);
     });
   },


  index: function(req, res, next) {
        Deuda.query('select concat(a.nombre," " ,a.apellido) as Deudor, d.monto as Monto ' +
                    'from alumno a ' +
                    'inner join deuda d ' +
                    'on a.id=d.id ' +
                    'where monto>0 order by monto asc;', function(err, deuda) {
          console.log(deuda);
      if (err) {
        return res.serverError(err);
      }
      return res.view({
        deuda: deuda
      });
    });
    }

};