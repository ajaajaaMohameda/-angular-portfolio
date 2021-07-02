import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule,
    NgbAccordionModule
  ]
})
export class FaqModule { }
