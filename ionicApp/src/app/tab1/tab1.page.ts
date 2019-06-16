import { Component, ViewChild, OnInit } from '@angular/core';
import { AlertController, IonSelect } from '@ionic/angular';
import { DevicesService } from '../services/devices.service';
import { Device, Room } from 'src/app/models/devices.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('filterSelect') selectRef: IonSelect;

  aDevices: Array<Device>;
  aRooms: Array<Room>;

  constructor(public alertController: AlertController, public devicesService: DevicesService, private router: Router){
    console.log('constructor');
    this.aDevices = [];
    this.aRooms = [];
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.updateAll();
  }

  updateAll(){
    this.updateRooms().then(()=>this.updateDevices());
  }

  updateRooms(){
    return this.devicesService.getRooms().then(rooms=>this.aRooms=rooms).catch(err=>this.checkUnauthorized(err));
  }

  updateDevices(){
    return this.devicesService.getDevices().then(devs => {this.aDevices = devs;} ).catch(err=>this.checkUnauthorized(err));
  }

  getRoomFromRoomId(roomId: number){
    let room = this.aRooms.find(r=>r.id == roomId);
    return room == undefined ? "Location not defined" : room.descr;
  }

  addRoom(roomDescr: string){
    this.devicesService.addRoom(roomDescr).then(()=>this.updateAll()).catch(err=>this.checkUnauthorized(err));
  }

  deleteDevice(deviceId: number){
    this.devicesService.deleteDevice(deviceId).then(()=>this.updateAll()).catch(err=>this.checkUnauthorized(err));
  }

  async presentDeleteAlert(deviceId) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete the device?',
      buttons: [{
        text: 'Yes',
        handler: ()=>this.deleteDevice(deviceId)
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
            console.log(this);
          }
        }, {
          text: 'Ok',
          handler: (pcholder) => {
            this.addRoom(pcholder["Room name"]);
          }
        }
      ]
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
