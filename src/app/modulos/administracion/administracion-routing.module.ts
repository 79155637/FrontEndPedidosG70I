import {EliminarProductoComponent} from './productos/eliminar-producto/eliminar-producto.component';
import {BuscarProductoComponent} from './productos/buscar-producto/buscar-producto.component';
import {EditarProductoComponent} from './productos/editar-producto/editar-producto.component';
import {CrearProductoComponent} from './productos/crear-producto/crear-producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrearPersonaComponent} from './personas/crear-persona/crear-persona.component';
import {EditarPersonaComponent} from './personas/editar-persona/editar-persona.component';
import {BuscarPersonaComponent} from './personas/buscar-persona/buscar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { ValidadorSesionGuard } from '../../guardianes/validador-sesion.guard';
const routes: Routes = [
  {
    path: 'crear-persona',
    component: CrearPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-persona',
    component: EditarPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-persona',
    component: BuscarPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-persona',
    component: EliminarPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-producto',
    component: CrearProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-producto/:id',
    component: EditarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-productos',
    component: BuscarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-producto',
    component: EliminarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
