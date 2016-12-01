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
      required: true,
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
    }

    //relacion entre profesor alumno
   // alumnos: {
     // collection: 'alumno',
      //via: 'entrenado'
    //}

  }
};