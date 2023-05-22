import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ScopeclickComponent } from './scopeclick/scopeclick.component';
import { CompComponent } from './comp/comp.component';
import { CompclickComponent } from './compclick/compclick.component';
import { CompinstComponent } from './compinst/compinst.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'scope', component: HomeComponent},
  { path : 'scope/:name', component: ScopeclickComponent  },
  { path : 'component', component: CompComponent},
  { path : 'component/:name', component: CompclickComponent},
  { path : 'component_instance', component: CompinstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
