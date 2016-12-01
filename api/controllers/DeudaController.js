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