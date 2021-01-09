import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-hirebus',
  templateUrl: './hirebus.component.html',
  styleUrls: ['./hirebus.component.scss']
})
export class HirebusComponent implements OnInit {
  source:string;
  destination:string;
  fromDate:Date;
  users: any = [];
    route=new Object();
    constructor( private router:Router,public userService:UserServiceService) { 
      this.source=userService.user.source;
      this.destination=userService.user.dest;
      this.fromDate=userService.user.from_Date;
    }
  ngOnInit(): void {
  }

}
