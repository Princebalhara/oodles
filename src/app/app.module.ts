import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { RouteComponentAComponent } from './route-component-a/route-component-a.component';
import { RouteComponentBComponent } from './route-component-b/route-component-b.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    RouteComponentAComponent,
    RouteComponentBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
