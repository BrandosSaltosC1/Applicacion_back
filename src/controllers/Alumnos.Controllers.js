import { Alumno } from '../models/Alumnos.js';
//AQUI hacemos insertar datos en tablas, puede ser desde POSTMAN/THUNDER


//traer  todos alumnos
export const getAlumnos = async (req,res) => {
    try{
        const alumnos = await Alumno.findAll();
        res.json(alumnos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//traer alumno por ID
export const getAlumno = async (req,res) => {
    const { id } = req.params;
    try {
      const alumno = await Alumno.findOne({
        where: {
          id,
        },
      });
      res.json(alumno);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
};

//crear un alumno
export const createAlumno = async (req,res) => {
    const {cedula, nombre, apellido, grupo} = req.body;
try{
    const newAlumno = await Alumno.create({
        cedula,
        nombre,
        apellido,
        grupo,
    });
    res.json(newAlumno);
}catch (error){
    return res.status(500).json({ message: error.message });
}   
};

//actualizar alumno
export const updateAlumno = async (req,res) => {
    try {
        const { id } = req.params;
        const { cedula, nombre, apellido, grupo } = req.body;
    
        const alumno = await Alumno.findByPk(id); 
        alumno.cedula = cedula;
        alumno.nombre = nombre;
        alumno.apellido = apellido;
        alumno.grupo = grupo;//buscar  por llave primaria
        
        await alumno.save();
    
        res.json(alumno);
      } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//borrar un alumno por id
export const deleteAlumno = async (req,res) => {
    const { id } = req.params;
    try {
      await Task.destroy({
        where: {
          alumnoId: id,
        },
      });
      await Alumno.destroy({
        where: {
          id,
        },
      });
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }  
};