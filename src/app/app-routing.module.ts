import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './usuarios/form/form.component';
import { ListarComponent } from './usuarios/listar/listar.component';

const routes: Routes = [
  {path:'form-usuario',component:FormComponent},
  {path:'lista-usuarios',component:ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
