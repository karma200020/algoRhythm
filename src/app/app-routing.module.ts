import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
  {
   path: 'homepage', 
   loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) 
  },
  {
    path: '', 
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) 
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
