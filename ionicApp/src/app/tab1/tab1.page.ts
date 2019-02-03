import { Component, ViewChild } from '@angular/core';
import { AlertController, IonSelect } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public alertController: AlertController){}

  @ViewChild('filterSelect') selectRef: IonSelect;

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete the device?',
      buttons: ['Yes', 'Cancel']
    });

    await alert.present();
  }
}
