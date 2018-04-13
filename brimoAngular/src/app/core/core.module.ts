import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [MenuComponent, FooterComponent],
  exports: [
    MenuComponent, FooterComponent
  ],
  providers: [
    AuthenticationService,
  ]
})
export class CoreModule { }
