import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { FeatureRoutingModule } from './feature-routing.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ProductoModule,
    CoreModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
