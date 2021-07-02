import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgbNavModule, NgbCollapse, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
   NgbNavModule,
   NgbCollapseModule,
   RouterModule,
   SharedModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ]
})
export class CoreModule {

 }
