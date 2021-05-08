import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  getMoney():string{
    console.log('goood good things');
    return 'we are returning the right things'
  }

  getPaid(){
    console.log('Amazing grace');
    return 'Good things are waiting..'
  }


}
