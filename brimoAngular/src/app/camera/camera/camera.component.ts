import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit, OnDestroy {
  img_src: string;
  timer;
  constructor() {
    this.img_src = 'http://brimo.ddns.net:8081/images/pic.jpg';
  }

  ngOnInit() {
    this.timer = setInterval( () => {
        this.img_src = 'http://brimo.ddns.net:8081/images/pic.jpg?' + new Date().getTime();
        console.log('updated photo');
    }, 100);

  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
