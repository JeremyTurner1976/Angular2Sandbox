import { from } from 'rxjs/observable/from';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from
  './app.component';
import {APP_BASE_HREF}
  from '@angular/common';

//Shared Helpers
import{ CommonModule } from
  './shared/common';
import{ ExceptionsModule } from
  './shared/exceptions';

//Features
import { ProductsModule } from
  './modules/products/products.module';
import { SalesPeopleModule } from
  './modules/sales-people/sales-people.module';
import { DashboardComponent } from
  './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]),
    ProductsModule,
    SalesPeopleModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
