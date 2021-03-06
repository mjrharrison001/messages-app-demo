import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { routing }          from './app.routing';

import { AppComponent }     from './app.component';
import { NavComponent }     from './nav-bar.component';
import { HomeComponent }    from './home.component';
import { UsersComponent }   from './users.component';
import { UsersService }     from './users.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    UsersComponent
  ],
  providers: [
    UsersService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
