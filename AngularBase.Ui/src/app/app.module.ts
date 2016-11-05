import { from } from 'rxjs/observable/from';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from
  './app.component';

//Services
import { APP_PROVIDERS } from
  './app.providers';

//Shared Helpers
import{ CommonModule } from
  './shared/common';
import{ ExceptionsModule } from
  './shared/exceptions';

//Shared Components
import { PopoutComponent } from
  './shared/components/popout/popout.component';
import { ToasterComponent } from
  './shared/components/toaster/toaster.component';

//Features
import { ProductsModule } from
  './modules/products/products.module';
import { SalesPeopleModule } from
  './modules/sales-people/sales-people.module';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ProductsModule,
    SalesPeopleModule
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
