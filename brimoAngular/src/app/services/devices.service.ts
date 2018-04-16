import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Device, DeviceEdit } from '../models/devices.model';



/**
 *
 *
 * @export
 * @class DevicesSerive
 * Devices Service: this service manage data from the server's database. It gets, delete and update
 * device's data using httpclient methods (post, get and delete).
 *
 */
const URLAPI = window.location.origin;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'CORS': 'Access-Control-Allow-Origin',
  })
};
@Injectable()
export class DevicesService {

  aDevices: Array<Device>;
  url: string;

  constructor (public http: HttpClient) {
    this.aDevices = [];
    this.url = URLAPI;
  }
  getDevices() {
    const urlget = this.url + '/devices';
    return this.http.get(urlget).toPromise().then( (response: any) => {
      // It uses Object.values() instead of the response because of problems
      // on the server while implementing JSON function. It returns an __proto__ object
      // instead an array object.
      this.aDevices =  Object.values(response);
      return this.aDevices;
    }).catch( res => {
      return this.aDevices;
    });
  }
  deleteDevice(oDevice: Device) {
    const urldelete = this.url + '/device/' + oDevice.id;
    return this.http.delete(urldelete).toPromise();

  }
  editDevice(oDevice: Device) {
    const urledit = this.url + '/device/' + oDevice.id;
    const editObject = new DeviceEdit(oDevice.name, oDevice.location);
    console.log(JSON.stringify(editObject));
    return this.http.put(urledit, JSON.stringify(editObject), httpOptions).toPromise();
  }
  updateDevice(oDevice: Device) {
    const urlget = this.url + '/device/' + oDevice.id;
    return this.http.get(urlget).toPromise().then( (response: any) => {
      this.aDevices =  Object.values(response);
      return this.aDevices;
    });
  }
  sendCommandDevice(oDevice: Device, command: string) {
    const urlDevice = 'http://' + oDevice.ip;
    const commandOBject = {
      id: oDevice.id,
      command: command,
    };
    console.log(urlDevice);
    console.log(commandOBject);
    return this.http.put(urlDevice, JSON.stringify(commandOBject), httpOptions).toPromise();

  }
  /* devicesTrigger() {
    const urlget = this.url + '/trigger';
    return this.http.get(urlget).toPromise().then( (response: any) => {
      this.aDevices =  Object.values(response);
      return this.aDevices;
    });
  } */
}
/*
ip_actuador/
{
    "id" : "33",
    "command" : "ON", "OFF", "+", "-", "texto"
}*/
