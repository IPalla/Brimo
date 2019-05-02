import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';
import { Router } from '@angular/router';

@Injectable()
export class SharedService {

  private emitLoginSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public login = this.emitLoginSource.asObservable();

  public emitLoginChange(data: any) {
    this.emitLoginSource.next(data);
  }
  constructor(private router: Router) {
    this.emitLoginSource.next('');
  }
}
