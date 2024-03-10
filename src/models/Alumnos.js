//import { DataTypes } from 'sequelize';
import {sequelize} from 'sequelize';
import sequelize  from '../database/database.js';



export const Alumno = sequelize.define("alumnos",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cedula: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    grupo: {
        type: DataTypes.CHAR
    },
})

Alumno.hasMany(Practicas, {
    foreignKey: 'practicaId',
    sourceKey: 'id'
})

Practica.belongsTo(Alumno, {
    foreignKey: 'alumnoId',
    targetId: 'id' //objetivo el id del esquema
})


