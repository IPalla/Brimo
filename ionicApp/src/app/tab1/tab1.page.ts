import { Component, ViewChild } from '@angular/core';
import { AlertController, IonSelect } from '@ionic/angular';
import { DevicesService } from '../services/devices.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public alertController: AlertController, public devicesService: DevicesService){}

  @ViewChild('filterSelect') selectRef: IonSelect;

  async presentDelteAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete the device?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          console.log('Confirm delete');
        }
      },
       'Cancel']
    });

    await alert.present();
  }
  

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'New room',
      inputs: [
        {
          name: 'Room name',
          type: 'text',
          placeholder: 'Room name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
