import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: 'intro'},
{ path: 'intro', loadChildren: () => import('./features/intro/intro.module').then(m => m.IntroModule) },
{ path: 'services', loadChildren: () => import('./features/services/services.module').then(m => m.ServicesModule) },
{ path: 'companies', loadChildren: () => import('./features/companies/companies.module').then(m => m.CompaniesModule) },
{ path: 'faq', loadChildren: () => import('./features/faq/faq.module').then(m => m.FaqModule) },
{ path: 'started', loadChildren: () => import('./features/started/started.module').then(m => m.StartedModule) },
{ path: 'portfolio', loadChildren: () => import('./features/portfolio/portfolio.module').then(m => m.PortfolioModule) },
{ path: 'testimonials', loadChildren: () => import('./features/testimonials/testimonials.module').then(m => m.TestimonialsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
