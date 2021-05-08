import { Component, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ga-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() title:string='';
  @Input() style:any;

  constructor() { }

  ngOnInit(): void {
  }


}
