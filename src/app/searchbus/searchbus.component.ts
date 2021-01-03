import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.scss']
})
export class SearchbusComponent implements OnInit {
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

  ngOnInit() {
    //fetch("https://www.google.com/")
    fetch("http://localhost:3000/searchbus")
    // fetch("https://jsonplsdfsdfsdfsdaceholder.typicode.com/todos")
      .then(function (resp) { return resp.json(); })
      // .then((data) => {
      //   this.users = data;
      //   console.log(this.users);
      // })
      .then(function(data) {
        this.users = data;
        console.log(this.users);
      }.bind(this))
      .catch(function (err) { console.log(err); })
  }

}
