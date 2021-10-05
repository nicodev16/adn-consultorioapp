import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeModule } from '@home/home.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ProductoModule,
    CoreModule,
    HomeModule,
    LoginModule,
    FeatureRoutingModule,
  ]
})
export class FeatureModule { }
