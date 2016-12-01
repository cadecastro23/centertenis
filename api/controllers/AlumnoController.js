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



  //creando un alumno en la bd y pasando esa informacion al proximo metodo
   create: function(req, res, next) {
     Alumno.create( req.params.all(), function alumnoCreated(err, alumno) {
        if (err) return next(err);

        res.redirect('/alumno/show/' + alumno.id);
     });
   },

//muestra todos los datos al seleccionar un alumno
   show: function (req, res, next) {
     Alumno.findOne(req.param('id'), function foundAlumno(err, alumno) {
        if (err) return next(err);
        if (!alumno) return next();
        res.view({
          alumno: alumno
        });
     });
   },

//muestra todos los alumnos que hay en la bd
   index: function(req, res, next){
     Alumno.find(function foundAlumnos (err, alumnos) {
       if (err) return next(err);

       res.view({
         alumnos: alumnos
       });
     });
   },


//edita el alumno seleccionado
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

//elimina un alumno
  destroy: function(req, res, next) {
    Alumno.destroy(req.param('id')).exec( function() {
      res.redirect('/alumno/');
    });
  },


  queryquiz: function(req, res, next) {
      console.log(req.method);
      if(req.method == "POST"){
        Alumno.query('select nombre, apellido, deuda from alumno where deuda > 0 order by deuda desc;', function(err, alumno) {
      console.log(alumno);
          if (err) return res.serverError(err)
        
          res.view({
            alumno: alumno
          });
        });
      }else {
      res.view({
        alumno:[]
      });
      }
    },

    

};
