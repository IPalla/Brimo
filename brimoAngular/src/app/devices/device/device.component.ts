import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Device } from '../../models/devices.model';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() oDevice: Device; // The device to be shown
  @Output() deleted: EventEmitter<Device>;
  arrowClass: string;
  shown: boolean;
  contentClass: string;
  editClass: string;
  editClass2: string;
  new_name: string;
  new_location: string;
  constructor(public devices_service: DevicesService) {
    this.deleted = new EventEmitter();
    this.arrowClass = 'fa fa-sort-down';
    this.shown = false;
    this.contentClass = 'oculto';
    this.editClass = '';
    this.editClass2 = 'oculto';
  }

  ngOnInit() {
  }
  showInstructions() {
    alert('Different commands are avalaible depending on your device type. Check instructions to know more.');
  }
  getStatus() {
    const lastupdate = Math.round(Number(new Date(this.oDevice.lastupdate)) / 1000);  // Seconds of lastupdate
    const now = Math.round(Number(new Date()) / 1000);                                // Actual seconds
    const update_frequency =  Math.round(Number(this.oDevice.freq ));                 // Update Frequency on seconds
    if (now - lastupdate <= update_frequency) {
      return 'online';
    }
    return 'offline';
  }
  setContent() {
    this.shown = !this.shown;
    (this.shown) ? this.arrowClass = 'fa fa-sort-up' : this.arrowClass = 'fa fa-sort-down';
    (this.shown) ? this.contentClass = '' : this.contentClass = 'oculto';

  }
  deleteDevice() {
    this.deleted.emit(this.oDevice);
    this.devices_service.deleteDevice(this.oDevice).then(
      () => {
        console.log('borrado');
      }
    );
  }
  editDevice() {
    if (this.editClass === '') {
      this.editClass = 'oculto';
      this.editClass2 = '';
      this.new_name = this.oDevice.name;
      this.new_location = this.oDevice.location;
    } else {
      this.editClass = '';
      this.editClass2 = 'oculto';
    }
  }
    editDeviceSave() {
      if (this.new_location === '') {
        this.new_location = this.oDevice.location;
      }
      if (this.new_name === '') {
        this.new_name = this.oDevice.name;
      }

      this.editClass = '';
      this.editClass2 = 'oculto';
      this.oDevice.name = this.new_name;
      this.oDevice.location = this.new_location;
      this.devices_service.editDevice(this.oDevice).then(
        () => {
          console.log('editado');
        }
      );
    }
}
