import { DataTypes } from 'sequelize';
import {sequelize} from 'sequelize';
import sequelize  from '../database/database.js';

export const Practica = sequelize.define("practicas",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    gradoDificultad: {
        type: DataTypes.ENUM
    },
    fechaRealizacion: {
        type: DataTypes.DATE
    },
    
})