/**
 * TorneoController
 *
 * @description :: Server-side logic for managing Torneos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
 //actions
  'new': function(req, res) {
    res.view();
  }, 

  create: function(req, res, next) {
    Torneo.create( req.params.all(), function torneoCreated(err, torneo) {
      if (err) return next(err);

      res.redirect('/torneo/show/' + torneo.id);
    });
  },

  show: function (req, res, next) {
    Torneo.findOne(req.param('id')).populateAll().exec( function(err, torneo) {
      if (err) return next(err);
      if (!torneo) return next();
      res.view({
        torneo: torneo
      });
    });
  },

  index: function(req, res, next){
    Torneo.find(function foundTorneo (err, torneo) {
      if (err) return next(err);

      res.view({
        torneo: torneo
      });
    });
  },

  edit: function(req, res, next) {
    Torneo.findOne(req.param('id'), function foundTorneo(err,torneo) {
      if (err) return next(err);
      if (!torneo) return next();

      res.view({
        torneo: torneo
      });
    });
  },

  update: function(req, res, next) {
    Torneo.update(req.param('id'), req.params.all(), function TorneoUpdated(err){
      if (err) {
        return res.redirect('/torneo/edit/' + req.param('id'));
      }

      res.redirect('/torneo/show/' +req.param('id'));
    });
  },

  destroy: function(req, res, next) {
    Torneo.destroy(req.param('id')).exec( function() {
      res.redirect('/torneo/');
    });
  }

};

