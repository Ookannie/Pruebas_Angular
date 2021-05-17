import { Component, OnInit } from '@angular/core';
import { TAREAS } from '../mock-tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tarea = TAREAS;

  constructor() { }

  ngOnInit(): void {
  }

}
