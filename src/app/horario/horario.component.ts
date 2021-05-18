import { Component, OnInit, Input } from '@angular/core';
import { Materia } from '../interfaces/materia';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  @Input() materias?: Materia[];
  materiaSeleccionada?: Materia; 
   isSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(materia: Materia): void {
    this.materiaSeleccionada = materia;
    this.isSelected = true;
  }

}
