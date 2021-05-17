import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia';
import { MATERIAS } from '../mock-materias';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

   nombre: string = 'Anni';
   carrera: string = 'ISW';
   materias: Materia[] = MATERIAS;
   CSSClass: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
