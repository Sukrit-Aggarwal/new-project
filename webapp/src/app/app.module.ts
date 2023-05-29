import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CompComponent } from './comp/comp.component';
import { ScopeclickComponent } from './scopeclick/scopeclick.component';
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

import { SearchPipe } from './search.pipe';
import { NewaudComponent } from './newaud/newaud.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    CompComponent,
    ScopeclickComponent,
    CompclickComponent,
    CompinstComponent,
    CompinstclickComponent,
    DependencyComponent,
    DepclickComponent,
    DepinstComponent,
    DepinstclickComponent,
    AudservicesComponent,
    AudservclickComponent,
    IpadinstComponent,
    IpadclickComponent,
    SearchPipe,
    NewaudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
