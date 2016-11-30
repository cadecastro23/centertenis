module.exports = {

connection:'MysqlProyecto',
connection:'Heroku',

  attributes: {
    
    

    codigo: {
      type: 'string',
      size: 1,
      required: true,
      primaryKey: true,
      unique: true
    },

    descripcion: {
      type: 'string',
      size: 100
    },

    horario: {
      type: 'string',
      size: 50,
      required: true
    },

    cod_tipo_entre: {
      type: 'string',
      required: true,
      size: 1
    },

    dia_semana: {
      type: 'string',
      size: 10,
      required: true   
    }

    //relacion entre profesor alumno
   // alumnos: {
     // collection: 'alumno',
      //via: 'entrenado'
    //}

  }
};