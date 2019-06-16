
import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { AlertController, IonSelect } from '@ionic/angular';
import { DevicesService } from '../services/devices.service';
import { Room } from 'src/app/models/devices.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.page.html',
  styleUrls: ['./device-info.page.scss'],
})
export class DeviceInfoPage implements OnInit {
  device: Object;
  deviceId: string;
  deviceName: String;
  edit: boolean;
  newName: String;
  newLocation: String;
  aRooms: Array<Room>;
  constructor(private activatedRouter: ActivatedRoute, public alertController: AlertController, public devicesService: DevicesService, private router: Router) { 
    this.device = {};
  }

  @ViewChild('filterSelect') selectRef: IonSelect;

  ionViewWillEnter() {
    this.deviceId = this.activatedRouter.snapshot.paramMap.get('deviceId');
    this.deviceName = this.activatedRouter.snapshot.paramMap.get('deviceName');
    this.edit = false;
    this.device = {};
    this.aRooms = [];
    this.getDevice();
    this.updateRooms();
  }

  ngOnInit() {
  }

  getDevice() {
    this.devicesService.getDevice(this.deviceId).then((resp: any)=>{
      this.device=resp;
      this.newName = resp.name;
      this.newLocation = (resp.room != null && resp.room.descr != null) ? resp.room.descr : "None";
    }).catch(err=>this.checkUnauthorized(err));
  }

  deleteDevice(deviceId: number){
    this.devicesService.deleteDevice(deviceId).then(()=>this.router.navigate(['tabs/tab1'])).catch(err=>this.checkUnauthorized(err));
  }

  updateRooms(){
    return this.devicesService.getRooms().then(rooms=>this.aRooms=rooms).catch(err=>this.checkUnauthorized(err));
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete the device?',
      buttons: [{ text: 'Yes', handler: ()=>this.deleteDevice(Number.parseInt(this.deviceId))}, 'Cancel']
    });

    await alert.present();
  }
  
  checkUnauthorized(err){
    console.log(err);
    if (err == -1 || (err != undefined && err.status != undefined && err.status == 401)){
      console.log('Navigating to login page due to unauthorized response');
      if (location.pathname != '/login-page')
        this.router.navigate(['login-page']);
    }
  }

}
