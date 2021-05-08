import { Component,OnInit} from '@angular/core';
import { HelpersService } from 'ga-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

   title = 'Delete User'
   constructor(private rex:HelpersService){

   }

   ngOnInit(): void {
      this.rex.getMoney();
  }

   give(){
     console.log("This is a fantastic way to check")
   }

}
