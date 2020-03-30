import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GitHubServiceService } from './services/git-hub-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';

var firebaseConfig = {
  apiKey: "AIzaSyCxselxsRB_a9R5SwDjhgkVOQiWj14x2L0",
  authDomain: "emperador-10ad3.firebaseapp.com",
  databaseURL: "https://emperador-10ad3.firebaseio.com",
  projectId: "emperador-10ad3",
  storageBucket: "emperador-10ad3.appspot.com",
  messagingSenderId: "196618868019",
  appId: "1:196618868019:web:026471d9778dfdefc91a46"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [GitHubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
