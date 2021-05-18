import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { MateriasComponent } from './materias/materias.component';
import { FormsModule } from '@angular/forms';
import { AlumnoComponent } from './alumno/alumno.component';
import { HorarioComponent } from './horario/horario.component';
import { DetalleMateriaComponent } from './detalle-materia/detalle-materia.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    MateriasComponent,
    AlumnoComponent,
    HorarioComponent,
    DetalleMateriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
