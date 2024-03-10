import { DataTypes } from 'sequelize';
import {sequelize} from 'sequelize';
import sequelize  from '../database/database.js';
import { Alumno } from './Alumnos.js';
import { Practica } from './Practicas.js'


export const NotaPractica = sequelize.define("notaspracticas",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nota: {
        type: DataTypes.DECIMAL
    },
})

//tiene muchos
NotaPractica.hasMany(Practicas, {
    foreignKey: 'practicaId',
    sourceKey: 'id'
})
//pertence a
Practica.belongsTo(NotaPractica, {
    foreignKey: 'practicaId',
    targetId: 'id' //objetivo el id del esquema
})

Alumno.hasMany(NotaPractica, {
    foreignKey: 'alumnoId',
    sourceKey: 'id'
})

NotaPractica.belongsTo(Alumno, {
    foreignKey: 'alumnoId',
    targetId: 'id' //objetivo el id del esquema
})

