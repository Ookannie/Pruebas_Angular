import { Materia } from "./materia";

export interface Alumno{
    id: string,
    nombre: string,
    carrera: string,
    materias: Materia[]
}