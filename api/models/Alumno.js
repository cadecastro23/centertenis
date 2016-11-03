/**
 * Alumno.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },

    apellido: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      email: true
    },

    cedula: {
      type: 'string',
      unique: true
    },

    sexo: {
      type: 'string'
    },

    telefono: {
      type: 'string',
      required: true
    },

    nacimiento: {
      type: 'date',
      required: true
    },

    //relacion entre profesor alumno
    entrenado: {
      model:'profesor'
    }

  }
};

