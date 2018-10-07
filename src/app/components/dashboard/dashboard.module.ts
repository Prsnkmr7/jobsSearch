import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { sharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    sharedModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DashboardComponent }
    ])
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
