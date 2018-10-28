import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices/devices.component';
import { CameraComponent } from './camera/camera/camera.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [

  { path: 'devices-menu', component: DevicesComponent},
  { path: 'cam', component: CameraComponent},
  { path: 'login-page', component: LoginComponent},
  { path: '', redirectTo: '/devices-menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
