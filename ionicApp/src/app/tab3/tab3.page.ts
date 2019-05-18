import { Component } from '@angular/core';

import { AlertController, IonSelect } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public alertController: AlertController){}
  async presentChangeUsername() {
    const alert = await this.alertController.create({
      header: 'Change username',
      inputs: [
        {
          name: 'username',
          placeholder: 'New username'
        },
        {
          name: 'password',
          placeholder: 'Old password',
          type: 'password'
        },
        {
          name: 'password',
          placeholder: 'New password',
          type: 'password'
        },
        {
          name: 'confirm-password',
          placeholder: 'Confirm assword',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm'
        }
      ]
    });

    await alert.present();
  }

  async presentNewUsername() {
    const alert = await this.alertController.create({
      header: 'New username',
      inputs: [
        {
          name: 'username',
          placeholder: 'New username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        },
        {
          name: 'confirm-password',
          placeholder: 'Confirm assword',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm'
        }
      ]
    });

    await alert.present();
  }

  async presentFactoryReset() {
    const alert = await this.alertController.create({
      header: 'Factory reset',
      message: 'This will remove all your custom settings and all paired devices.',
      buttons: ['Yes', 'Cancel']
    });

    await alert.present();
  }
}
