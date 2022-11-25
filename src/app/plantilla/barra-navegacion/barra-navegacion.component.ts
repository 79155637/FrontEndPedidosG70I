//import {Subscription} from '../../../../node_modules/rxjs/src/internal/Subscription';
import {Subscription} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../../servicios/seguridad.service';
import { ModeloDatos } from '../../modelos/datos.modelo';
import { ModeloIdentificar } from '../../modelos/identificar.modelo';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  
  seInicioSesion: boolean = false;

  subs: Subscription = new Subscription();

  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar) =>{
     this.seInicioSesion = datos.estaIdentificado;
    })
  }

}
