import { NgModule } from '@angular/core';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { Error404Component } from './components/error404/error404.component';
import {AppGenericsModule} from "../app-generics/app-generics.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BlogService} from "./services/blog.service";
import {BackendService} from "./services/backend.service";
import { HomeComponent } from './components/home/home.component';
import { SessionService } from "./services/session.service";
import {AuthenticationGuard} from "./guards/authentication.guard.service";


@NgModule({
  declarations: [
    RootDefaultComponent,
    Error404Component,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RootBrowserRoutingModule,
    AppGenericsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    BlogService,
    BackendService,
    SessionService,
    AuthenticationGuard
  ],
  bootstrap: [
    RootDefaultComponent
  ]
})
export class RootBrowserModule {

}
