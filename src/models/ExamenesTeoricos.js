import { DataTypes } from 'sequelize';
import {sequelize} from 'sequelize';
import sequelize  from '../database/database.js';

export const Examen = sequelize.define("examenes",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    numPregunta: {
        type: DataTypes.INTEGER
    },
    fechaRealizacion: {
        type: DataTypes.DATE
    },
    
})

