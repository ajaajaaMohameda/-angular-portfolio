import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartedRoutingModule } from './started-routing.module';
import { StartedComponent } from './started.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StartedComponent
  ],
  imports: [
    CommonModule,
    StartedRoutingModule,
    SharedModule
  ]
})
export class StartedModule { }
