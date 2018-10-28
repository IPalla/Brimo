import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './camera/camera.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CameraComponent],
  exports: [CameraComponent]
})
export class CameraModule { }
