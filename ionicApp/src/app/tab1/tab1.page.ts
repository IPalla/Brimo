import { Component, ViewChild, OnInit } from '@angular/core';
import { AlertController, IonSelect } from '@ionic/angular';
import { DevicesService } from '../services/devices.service';
import { Device, Room } from 'src/app/models/devices.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  @ViewChild('filterSelect') selectRef: IonSelect;

  aDevices: Array<Device>;
  aRooms: Array<Room>;

  constructor(public alertController: AlertController, public devicesService: DevicesService){
    this.aDevices = [];
    this.aRooms = [];
  }
  
  ngOnInit(): void {
    this.updateRooms().then(()=>this.updateDevices());
  }

  updateRooms(){
    return this.devicesService.getRooms().then(rooms=>this.aRooms=rooms);
  }
  updateDevices(){
    return this.devicesService.getDevices().then(devs => {this.aDevices = devs;} );
  }

  getRoomFromRoomId(roomId: number){
    let room = this.aRooms.find(r=>r.id == roomId);
    return room == undefined ? "Location not defined" : room.descr;
  }

  addRoom(roomDescr: string){
    this.devicesService.addRoom(roomDescr).then(()=>this.updateRooms());
  }

  async presentDeleteAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete the device?',
      buttons: [{
        text: 'Yes',
        handler: this.updateDevices
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
}
