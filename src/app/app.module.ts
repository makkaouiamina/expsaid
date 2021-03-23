import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginContainerLeftComponent } from './login-container/login-container-left/login-container-left.component';
import { LoginContainerRightComponent } from './login-container/login-container-right/login-container-right.component';
import { SignupContainerRightComponent } from './login-container/signup-container-right/signup-container-right.component';
import { SignupContainerLeftComponent } from './login-container/signup-container-left/signup-container-left.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginContainerComponent,
    LoginContainerLeftComponent,
    LoginContainerRightComponent,
    SignupContainerRightComponent,
    SignupContainerLeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
