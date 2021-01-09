import { Injectable } from '@angular/core';



class User{
  constructor(public isValid:boolean, public source:string,public dest:string,public from_Date:Date){

  }
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
public depart:Date;
  user:User = {isValid:false, source:"",dest:"",from_Date:null}
  constructor() { }
  get departure():Date{
    return this.depart;
  }
  set departure(val: Date){
    this.depart = val;
  }
}
