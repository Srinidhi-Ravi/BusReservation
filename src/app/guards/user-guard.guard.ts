import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class SearchbusGuard implements CanActivate {

  constructor(public userService:UserServiceService, public router:Router){}
  canActivate():boolean {
    if(this.userService.user.isValid){
    return true;
  }
  
  
  
}
}
