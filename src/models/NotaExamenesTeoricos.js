import { DataTypes } from 'sequelize';
import {sequelize} from 'sequelize';
import sequelize  from '../database/database.js';
import { Alumno } from './Alumnos.js';
import { Examen } from './ExamenesTeoricos.js';


export const NotaExamen = sequelize.define("notasexamenes",{
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
NotaExamen.hasMany(Examen, {
    foreignKey: 'examenteoricoId',
    sourceKey: 'id'
})
//pertence a
Examen.belongsTo(NotaExamen, {
    foreignKey: 'examenteoricoId',
    targetId: 'id' //objetivo el id del esquema
})

Alumno.hasMany(NotaExamen, {
    foreignKey: 'alumnoId',
    sourceKey: 'id'
})

NotaExamen.belongsTo(Alumno, {
    foreignKey: 'alumnoId',
    targetId: 'id' //objetivo el id del esquema
})