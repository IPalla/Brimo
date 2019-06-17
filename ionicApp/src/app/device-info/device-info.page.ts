
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
  device: any;
  deviceId: string;
  deviceName: String;
  edit: boolean;
  newName: String;
  newLocation: String;
  aRooms: Array<Room>;
  hasCommands: boolean;
  selectedCommand: String;
  constructor(private activatedRouter: ActivatedRoute, public alertController: AlertController, public devicesService: DevicesService, private router: Router) { 
    this.device = {};
    this.hasCommands = false;
    this.edit = false;
    this.device = {};
    this.aRooms = [];
  }

  @ViewChild('filterSelect') selectRef: IonSelect;

  ionViewWillEnter() {
    this.deviceId = this.activatedRouter.snapshot.paramMap.get('deviceId');
    this.deviceName = this.activatedRouter.snapshot.paramMap.get('deviceName');
    this.getDevice();
    this.updateRooms();
  }

  ngOnInit() {
  }

  onChange($event){
    console.log(this.selectedCommand);
    this.selectedCommand = "";
  }

  getDevice() {
    this.devicesService.getDevice(this.deviceId).then((resp: any)=>{
      this.device=resp;
      this.newName = resp.name;
      this.newLocation = (resp.room != null && resp.room.descr != null) ? resp.room.descr : "None";
      if (resp.commands != null && resp.commands.length > 0) this.hasCommands = true;
    }).catch(err=>this.checkUnauthorized(err));
  }

  deleteDevice(deviceId: number){
    this.devicesService.deleteDevice(deviceId).then(()=>this.router.navigate(['tabs/tab1'])).catch(err=>this.checkUnauthorized(err));
  }

  updateRooms(){
    return this.devicesService.getRooms().then(rooms=>this.aRooms=rooms).catch(err=>this.checkUnauthorized(err));
  }

  sendCommand(command_descr: any){
    console.log(command_descr);
  }
  editOpenDevice(){
    let updRoomId = null;
    let updRoom = this.aRooms.find((rm)=>{ console.log(rm.descr); console.log(rm.descr==this.newLocation); return rm.descr==this.newLocation;});
    updRoomId = (updRoom != null) ? updRoom.room_id : null;
    console.log('New location: ' + this.newLocation);
    console.log('New location id: '+ updRoomId);
    console.log(updRoom);
    this.devicesService.editDevice(Number.parseInt(this.deviceId), this.newName, updRoomId).then( () => {
      this.getDevice();
      this.edit = !this.edit;
    }).catch(err=>this.checkUnauthorized(err));
  }

  async presentDeleteAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete the device?',
      buttons: [{ text: 'Yes', handler: ()=>this.deleteDevice(Number.parseInt(this.deviceId))}, 'Cancel']
    });

    await alert.present();
  }

  async presentCommandsAlert() {
    let inputs = [];
    let buttons = [];
    this.device.commands.forEach(cmnd => {
      inputs.push({type: 'radio', value: cmnd.command_descr, label: cmnd.command_code})
    });
    buttons.push({text: 'SEND', handler: (data) => this.sendCommand(data)})
    buttons.push({text: 'Cancel', role: 'cancel'});
    const alert = await this.alertController.create({
      message: 'Select the command you want to send:',
      inputs: inputs,
      buttons: buttons
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
