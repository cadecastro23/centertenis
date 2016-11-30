/**
 * Torneo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection:'MysqlProyecto',
  connection:'Heroku',
  
  attributes: {

    nombre : { type: 'string' , required: true},

    fecha_torneo : { type: 'date' , required: true},

    premio : { type: 'string' , required: true},

    resultado : { type: 'string' },

    lugar_torneo : { type: 'string' , required: true},

    //id_equipo : {type: 'string' , defaultsTo : 0}
  }
};

