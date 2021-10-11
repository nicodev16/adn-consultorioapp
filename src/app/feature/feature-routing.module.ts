import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: 'producto',
        loadChildren: () => import('./producto/producto.module').then(i => i.ProductoModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(i => i.HomeModule)
      },
      {
        path: 'medicos',
        loadChildren: () => import('./medicos/medicos.module').then(i => i.MedicosModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(i => i.LoginModule)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
