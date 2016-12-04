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
import{ AppCommonModule } from
  './shared/common';
import{ AppExceptionsModule } from
  './shared/exceptions';

//Features
import { ProductsModule } from
  './modules/products/products.module';
import { SalesPeopleModule } from
  './modules/sales-people/sales-people.module';
import { DashboardComponent } from
  './dashboard/dashboard.component';

import { SharedModule } from
  './shared/shared.module';

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
    SalesPeopleModule,
    SharedModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
