module.exports = {
//actions
  index: function(req, res, next){
     Tarea.find(function foundTarea (err, tarea) {
       if (err) return next(err);

       res.view({
         tarea: tarea
       });
     });
   },

  queryquiz: function(req, res, next) {
      console.log(req.method);
      if(req.method == "POST"){
        Queryquiz.query('select nombre, apellido, deuda from alumno where deuda > 0 order by deuda desc;', function(err, queryquiz) {
      console.log(queryquiz);
          if (err) return res.serverError(err)
        
          res.view({
            queryquiz: queryquiz
          });
        });
      }else {
      res.view({
        queryquiz:[]
      });
      }
    }

};