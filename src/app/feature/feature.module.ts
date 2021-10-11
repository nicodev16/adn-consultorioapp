import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeModule } from '@home/home.module';
import { LoginModule } from './login/login.module';
import { MedicosModule } from './medicos/medicos.module';
import { FeatureComponent } from './feature.component';



@NgModule({
  declarations: [
    FeatureComponent
  ],
  exports: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FeatureRoutingModule,
    HomeModule,
    MedicosModule,
    ProductoModule,
    LoginModule,
  ]
})
export class FeatureModule { }
