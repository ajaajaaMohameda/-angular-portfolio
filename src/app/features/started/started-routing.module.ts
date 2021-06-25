import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartedComponent } from './started.component';

const routes: Routes = [{ path: '', component: StartedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartedRoutingModule { }
