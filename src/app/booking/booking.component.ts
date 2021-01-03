import { Component, OnInit } from '@angular/core';
import { Seat } from '../models/seat.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  showSeatList:Seat[]=[];
  total=0;
  fillupSeat=[];
  alert=false;
  constructor() { }

  ngOnInit(): void {
  }
  Seat(e) {
    let seats=[];
    seats= this.showSeatList.map(iteam=>{
      return iteam.seatNo
    })
     let id = document.getElementById(e);
   
     if((this.fillupSeat.indexOf(String(e))<0) && (seats.indexOf(e)<0)){
       if((this.showSeatList.length!=4)) {
         id.innerHTML = `   <img src="/assets/images/fseat.png" alt="">`
       
         let seat={
           seatNo:e,
         //  fare:this.bus.fare,
           seatClass:'economy'
         }
       //  this.totalFare(seat.fare);
         this.showList(seat);
       }
       else{
         this.alert=true;
       }
     }
 
   }
   showList(seat){
    this.showSeatList.push(seat)
}
totalFare(fare){
  this.total+=fare;
}
}
