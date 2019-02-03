import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.page.html',
  styleUrls: ['./device-info.page.scss'],
})
export class DeviceInfoPage implements OnInit {
  deviceId: String;
  deviceName: String;
  constructor( private activatedRouter: ActivatedRoute) { }

  ionViewWillEnter(){
    this.deviceId = this.activatedRouter.snapshot.paramMap.get('deviceId');
    this.deviceName = this.activatedRouter.snapshot.paramMap.get('deviceName');

  }

  ngOnInit() {
  }

}
