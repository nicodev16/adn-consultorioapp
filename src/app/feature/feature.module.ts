import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { FeatureRoutingModule } from './feature-routing.module';
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
  ]
})
export class FeatureModule { }
