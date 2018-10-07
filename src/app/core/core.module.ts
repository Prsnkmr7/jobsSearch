import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchDetailsServiceService } from './fetch-details-service.service';



@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    FetchDetailsServiceService
  ]
})
export class coreModule { }
