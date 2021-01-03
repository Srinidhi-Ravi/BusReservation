import { Injectable } from '@angular/core';



class User{
  constructor(public isValid:boolean, public source:string,public dest:string,public from_Date:Date){

  }
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user:User = {isValid:false, source:"",dest:"",from_Date:null}
  constructor() { }
}
