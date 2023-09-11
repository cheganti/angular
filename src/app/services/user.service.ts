import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userAddedEvent = new Subject<boolean>();

  constructor() { }
  addUser(){
    this.userAddedEvent.next(true);
  }
}
