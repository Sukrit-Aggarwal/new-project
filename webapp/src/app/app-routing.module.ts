import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ScopeclickComponent } from './scopeclick/scopeclick.component';
import { CompComponent } from './comp/comp.component';
import { CompclickComponent } from './compclick/compclick.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'scope', component: HomeComponent},
  { path : 'scope/:name', component: ScopeclickComponent  },
  { path : 'component', component: CompComponent},
  { path : 'component/:name', component: CompclickComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
