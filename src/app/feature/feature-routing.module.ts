import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '@producto/components/producto/producto.component';

const routes: Routes = [
  {
    path: 'producto',
    component: ProductoComponent,
    loadChildren: () => import('./producto/producto.module').then(i => i.ProductoModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(i => i.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(i => i.HomeModule)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
