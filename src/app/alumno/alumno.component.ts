import { Component, OnInit } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { MATERIAS } from '../mock-materias';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {


  alumno: Alumno = {
     id: '204360',
     nombre: 'Anni',
     carrera: 'ISW',
     materias: MATERIAS
  };


  constructor() { }

  ngOnInit(): void {
  }

}
