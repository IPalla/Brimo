import { Component, OnInit } from '@angular/core';
import { Device } from '../../models/devices.model';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  aDevices: Array<Device>;
  aRooms: Array<string>;
  filtered_room: string;
  timer;
  constructor(public devicesService: DevicesService) {
    this.aDevices = [];
    this.aRooms = [];
    this.filtered_room = 'None';
  }

  ngOnInit() {
    this.devicesService.getDevices().then(
      response => {
        this.aDevices = response;
        this.getRooms();
      }
    ).catch( err => {
      if (err === -1 ) {
        console.error('Log In necessary');
        return -1;
      }
      console.log(err);
    });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
  }
  showInstructions() {
    alert('Different commands are avalaible depending on your device type. Check instructions to know more.');
  }
  fadeContent(id) {
  }
  getStatus(aDevice) {
    const lastupdate = Math.round(Number(new Date(aDevice.lastupdate)) / 1000);  // Seconds of lastupdate
    const now = Math.round(Number(new Date()) / 1000);                                // Actual seconds
    const update_frequency =  Math.round(Number(aDevice.freq ));                 // Update Frequency on seconds
    if (now - lastupdate <= update_frequency) {
      return 'online';
    }
    return 'offline';
  }
  updateContent() {
    this.devicesService.getDevices().then(
      response => this.aDevices = response
    );
  }
  deleteDevice(deleted: Device) {
    const index = this.aDevices.indexOf(deleted);
    if (index > -1) {
      this.aDevices.splice(index, 1);
    }
  }
  getRooms() {
    this.aDevices.forEach( item => {
      if ( this.aRooms.indexOf(item.location) === -1) {
        this.aRooms.push(item.location);
        console.log(item.location);
      }
    });
  }
}
