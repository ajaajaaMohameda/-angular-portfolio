import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartedRoutingModule } from './started-routing.module';
import { StartedComponent } from './started.component';


@NgModule({
  declarations: [
    StartedComponent
  ],
  imports: [
    CommonModule,
    StartedRoutingModule
  ]
})
export class StartedModule { }
