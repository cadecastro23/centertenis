/**
 * TareaController
 *
 * @description :: Server-side logic for managing Tareas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

   index: function(req, res, next){
     Tarea.find(function foundTarea (err, tarea) {
       if (err) return next(err);

       res.view({
         tarea: tarea
       });
     });
   },

    query1: function(req, res, next) {
    Tarea.query('SELECT first_name FROM actor', function(err, tarea) {
      if (err) return res.serverError(err);
      
      /*return res.json(tarea);*/
      res.view({
        tarea: tarea
      });
    });
  },

    query2: function(req, res, next) {
    Tarea.query('SELECT first_name FROM actor', function(err, tarea) {
      if (err) return res.serverError(err);
      
      /*return res.json(tarea);*/
      res.view({
        tarea: tarea
      });
    });
  },

  query3: function(req, res, next) {
    Tarea.query('select f.title as PeliculasNuncaRentadas from film f left outer join inventory i on f.film_id = i.film_id left outer join rental r on r.inventory_id = i.inventory_id where (r.inventory_id IS NULL) group by f.title;', function(err, tarea) {
      if (err) return res.serverError(err);
      
      /*return res.json(tarea);*/
      res.view({
        tarea: tarea
      });
    });
  },

  query4: function(req, res, next) {
    Tarea.query('SELECT first_name FROM actor', function(err, tarea) {
      if (err) return res.serverError(err);
      
      /*return res.json(tarea);*/
      res.view({
        tarea: tarea
      });
    });
  },

  query5: function(req, res, next) {
    Tarea.query('SELECT first_name FROM actor', function(err, tarea) {
      if (err) return res.serverError(err);
      
      /*return res.json(tarea);*/
      res.view({
        tarea: tarea
      });
    });
  },

};

