import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DevicesModule } from './devices/devices.module';
import { CameraModule } from './camera/camera.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DevicesModule,
    CameraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
