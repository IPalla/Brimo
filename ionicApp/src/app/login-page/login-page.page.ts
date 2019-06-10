import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { AuthenticationService } from '../services/authentication.service';
import { AuthenticationModel } from '../models/authentication.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(public login_service: AuthenticationService, private router: Router, public alertController: AlertController) { }

  username: string;
  password: string;
  errMsg: string;
  errClass: string;

  ngOnInit() {
    this.username = '';
    this.password = '';
  }
  
  login() {
    if (this.username === '' || this.password === '') {
      this.errMsg = 'Complete all fields.';
      this.errClass = '';
      return;
    }
    const auth_object = new AuthenticationModel(this.username, this.password);
    this.login_service.login(auth_object).then( res => {  
      if (res === true) {
        this.router.navigate(['']);
      } else {
        this.presentAlert('Invalid credentials. Try again.');
      }
    }).catch( (err) => {
      this.presentAlert(err);
    });
  }
    async presentAlert(errMsg) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: errMsg,
        buttons: ['OK']
      });
  
      await alert.present();
  }

}
