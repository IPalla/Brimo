import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.page.html',
  styleUrls: ['./device-info.page.scss'],
})
export class DeviceInfoPage implements OnInit {
  deviceId: String;
  deviceName: String;
  edit: boolean;
  constructor(private activatedRouter: ActivatedRoute, public alertController: AlertController) { }

  ionViewWillEnter() {
    this.deviceId = this.activatedRouter.snapshot.paramMap.get('deviceId');
    this.deviceName = this.activatedRouter.snapshot.paramMap.get('deviceName');
    this.edit = false;

  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete the device?',
      buttons: ['Yes', 'Cancel']
    });

    await alert.present();
  }
}
