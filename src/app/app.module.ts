import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DynamicComponent } from './Components/dynamic.component';
import {CreateTableComponent} from './Components/createTable.component';
import {TablesComponent} from './Components/tables.component';

@NgModule({
  declarations: [
	  AppComponent, DynamicComponent, CreateTableComponent, TablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
