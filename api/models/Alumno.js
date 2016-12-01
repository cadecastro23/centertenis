
/**
 * Alumno.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

//creacion de atributos de alumno

module.exports = {

//connection:'MysqlProyecto',
connection:'Heroku',

  attributes: {
    nombre: {
      type: 'string',
      size: 50,
      required: true
    },

    apellido: {
      type: 'string',
      size: 50,
      required: true
    },

    email: {
      type: 'string',
      size: 70,
      email: true
    },

    cedula: {
      type: 'integer',
      size: 11,
      unique: true
    },

    sexo: {
      type: 'string',
      required: true
    },

    telefono: {
      type: 'string',
      size: 50
    },

    nacimiento: {
      type: 'date',
      required: true
    },

    id_entrenamiento: {
      type: 'integer'
    }


    //relacion entre profesor alumno
   // entrenado: {
     // model:'profesor',
      //required: true
    //}

  }

};

