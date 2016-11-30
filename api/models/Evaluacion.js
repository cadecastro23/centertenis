module.exports = {

connection:'MysqlProyecto',
connection:'Heroku',

  attributes: {
    id_entrenamiento: {
      type: 'integer',
      required: true
    },

    tipo: {
      type: 'string',
      size: 100,
      required: true
    },

    puntuacion: {
      type: 'integer'
    }

    //relacion entre profesor alumno
   // alumnos: {
     // collection: 'alumno',
      //via: 'entrenado'
    //}

  }
};