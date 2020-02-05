import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
