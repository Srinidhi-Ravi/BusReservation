import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-journeyhire',
  templateUrl: './journeyhire.component.html',
  styleUrls: ['./journeyhire.component.scss']
})
export class JourneyhireComponent implements OnInit {

  constructor( private router: Router,
    // private tagsService: TagsService,
    public userService:UserServiceService) { }

  ngOnInit(){
  }
  selected_origin_city: string = 'From ';
  public display_origin_city(event, value) {
    this.selected_origin_city = value;
    this.userService.user.isValid = false;
         this.userService.user.source = this.selected_origin_city;
  }
  selected_dest_city: string = 'To ';
  public display_dest_city(event, value) {
    this.selected_dest_city = value;
    if(this.selected_dest_city!=this.selected_origin_city){
    this.userService.user.isValid = true;
    }
         this.userService.user.dest = this.selected_dest_city;
  }
  fromDated:Date;
  public dated(event,value){
    this.fromDated=value;
    this.userService.user.isValid = true;
    this.userService.user.from_Date = this.fromDated;
  }
}
