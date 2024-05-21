import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports:[
    NavbarComponent,
    SelectComponent
  ]

})
export class SharedModule { }
