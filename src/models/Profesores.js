import { DataTypes } from 'sequelize';
import {sequelize} from 'sequelize';
import sequelize  from '../database/database.js';

export const Profesor = sequelize.define("profesores",{
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
    
})