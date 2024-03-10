import { Router } from "express";
import { getAlumnos, getAlumno, createAlumno, updateAlumno, deleteAlumno } from "./controllers/Alumnos.Controllers.js";

const router = Router()

//const router = Router()

//Metodos de CRUD
router.get('./Alumnos', getAlumnos);
router.get('./Alumnos/:id', getAlumno);
router.put('./Alumnos/:id', updateAlumno);
router.post('./Alumnos', createAlumno);
router.delete('./Alumnos/:id', deleteAlumno);



export default router