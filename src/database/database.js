//import { DataTypes } from 'sequelize';
import {sequelize} from 'sequelize';
//import Sequelize from "sequelize";

//conexion a la bd
export const sequelize = new Sequelize('product_test', 'root', "",{
    host: "localhost",
    dialect: "mysql",
    port: 3306,
});