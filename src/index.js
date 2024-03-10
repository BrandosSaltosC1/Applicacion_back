
import './models/Alumnos.js'
import './models/Profesores.js'
import './models/Practicas.js'
import './models/ExamenesTeoricos.js'
import './models/NotaExamenesTeoricos.js'
import  './models/NotasPracticas.js'


//llamamos a la onexion a BD en una funcion principal del index
async function main () {
    try{
        //await sequelize.sync({force:false}); //actualizar cambios
        
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        //server se escucha en el puerto:
        app.listen (3039)
        console.log('---Server is listening on port---', 3039);
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }
}

main();