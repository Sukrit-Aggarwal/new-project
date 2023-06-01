import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ScopeclickComponent } from './scopeclick/scopeclick.component';
import { CompComponent } from './comp/comp.component';
import { CompclickComponent } from './compclick/compclick.component';
import { CompinstComponent } from './compinst/compinst.component';
import { CompinstclickComponent } from './compinstclick/compinstclick.component';
import { DependencyComponent } from './dependency/dependency.component';
import { DepclickComponent } from './depclick/depclick.component';
import { DepinstComponent } from './depinst/depinst.component';
import { DepinstclickComponent } from './depinstclick/depinstclick.component';
import { AudservicesComponent } from './audservices/audservices.component';
import { AudservclickComponent } from './audservclick/audservclick.component';
import { IpadinstComponent } from './ipadinst/ipadinst.component';
import { IpadclickComponent } from './ipadclick/ipadclick.component';
import { NewaudComponent } from './newaud/newaud.component';
import { Step1Component } from './step1/step1.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'scope', component: HomeComponent},
  { path : 'scope/:name', component: ScopeclickComponent  },
  { path : 'component', component: CompComponent},
  { path : 'component/:name', component: CompclickComponent},
  { path : 'component_instance', component: CompinstComponent},
  { path : 'component_instance/:name', component: CompinstclickComponent},
  { path : 'dependency', component: DependencyComponent},
  { path : 'dependency/:name', component: DepclickComponent},
  { path : 'dependency_instance', component: DepinstComponent},
  { path : 'dependency_instance/:name', component: DepinstclickComponent},
  { path : 'service', component: AudservicesComponent},
  { path : 'service/:name', component: AudservclickComponent},
  { path : 'ipaddinstance', component: IpadinstComponent},
  { path : 'ipaddinstance/:name', component: IpadclickComponent},
  { path : 'createnewaud', component: NewaudComponent},
  { path : 'createnewaud/:step', component: Step1Component, outlet: 'newaud'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
