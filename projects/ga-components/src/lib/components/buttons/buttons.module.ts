import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';



@NgModule({
  declarations: [ButtonsComponent],
  exports:[ButtonsComponent],
  imports: [
    CommonModule
  ]
})
export class ButtonsModule { }
