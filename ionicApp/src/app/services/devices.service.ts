import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpRequest, HttpHeaders } from '@angular/common/http';
import { DeviceEdit, Device, Room } from 'src/app/models/devices.model';

/**
 *
 *
 * @export
 * @class DevicesService
 * Devices Service: this service manage data from the server's database. It gets, delete and update
 * device's data using httpclient methods (post, get and delete).
 *
 */
const URLAPI = 'https://localhost:3000/brimo/interface-api';
const token_key = 'tknBrM';
@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  
  aDevices: Array<Device>;
  url: string;

  constructor (public http: HttpClient) {
    this.aDevices = [];
    this.url = URLAPI;
  }
  
  getDevices() {
    const urlget = this.url + '/devices';
    const headers = this.getHeaders();
    if (!headers) { throw -1; }
    return this.http.get(urlget, headers).toPromise().then( (response: Array<Device>) => {
      return response != null ? Object.values(response) : []
    });
  }

  getRooms(){
    const urlget = this.url + '/locations';
    const headers = this.getHeaders();
    if (!headers) { throw -1; }
    return this.http.get(urlget, headers).toPromise().then( (response: Array<Room>) => {
      return response != null ? Object.values(response) : [];
    });
  }
  addRoom(roomDescr){
    const urlget = this.url + '/locations';
    const headers = this.getHeaders();
    if (!headers) { throw -1; }
    return this.http.post(urlget, {descr: roomDescr}, headers).toPromise().then();
  }


  deleteDevice(deviceId: Number) {
    const urldelete = this.url + '/devices/' + deviceId;
    const headers = this.getHeaders();
    if (!headers) {  location.reload(); throw -1; }
    return this.http.delete(urldelete, headers).toPromise().catch(() => {location.reload(); });

  }

  editDevice(deviceId: Number, newName: String, newLocation: Number) {
    let urledit = this.url + '/device/' + deviceId + '?';
    urledit += newName != null ? ('&name='+newName) : '';
    urledit += newLocation != null ? ('&room_id='+newLocation) : '';
    const headers = this.getHeaders();
    if (!headers) {  location.reload(); throw -1; }
    return this.http.patch(urledit, null, headers).toPromise().catch(() => {location.reload(); });
  }

  /*updateDevice(oDevice: Device) {
    const urlget = this.url + '/device/' + oDevice.id;
    const headers = this.getHeaders();
    if (!headers) {  location.reload(); throw -1; }
    return this.http.get(urlget, headers).toPromise().then( (response: any) => {
      this.aDevices =  Object.values(response);
      return this.aDevices;
    }).catch(() => {location.reload(); });
  }
  sendCommandDevice(oDevice: Device, command: string) {
    const urlDevice = 'http://' + oDevice.IP;
    const commandOBject = {
      id: oDevice.id,
      Action: command,
    };
    const headers = this.getHeaders();
    if (!headers) {  location.reload(); throw -1; }
    return this.http.put(urlDevice, JSON.stringify(commandOBject), headers).toPromise().catch(() => {location.reload(); });

  }*/
  getHeaders() {
    const token = localStorage.getItem(token_key);
    if (!token) { return undefined; }
    const httopts = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token,
        'CORS': 'Access-Control-Allow-Origin',
      })
    };
    return httopts;
  }
}
