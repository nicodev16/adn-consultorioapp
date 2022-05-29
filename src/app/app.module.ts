import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { FeatureModule } from './feature/feature.module';
import { HomeModule } from '@home/home.module';
import { LoginModule } from './feature/login/login.module';
import { MedicosModule } from './feature/medicos/medicos.module';
import { ProductoModule } from '@producto/producto.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    MedicosModule,
    ProductoModule,
    FeatureModule,
    CoreModule
  ],
  providers: [
    CookieService,
    // {provide: LOCALE_ID, useValue: 'es'}
  ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
