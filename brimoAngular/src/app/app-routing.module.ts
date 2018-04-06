import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices/devices.component';
import { CameraComponent } from './camera/camera/camera.component';
const routes: Routes = [

  { path: 'devices_menu', component: DevicesComponent},
  { path: 'cam', component: CameraComponent},
  { path: '', redirectTo: '/devices_menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
