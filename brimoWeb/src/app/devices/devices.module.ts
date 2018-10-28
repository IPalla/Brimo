import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices/devices.component';
import { DevicesService } from '../services/devices.service';
import { DeviceComponent } from './device/device.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DevicesComponent, DeviceComponent],
  exports: [DevicesComponent],
  providers: [
    DevicesService
  ]
})
export class DevicesModule { }
