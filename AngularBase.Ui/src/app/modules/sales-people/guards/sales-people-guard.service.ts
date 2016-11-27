import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

//ROUTE Guards
  //CanActivate
  //CanDeactivate
  //Resolve
  //CanLoad

@Injectable()
export class SalesPeopleGuard implements CanActivate {

  canActivate(): boolean {
    console.log("Initiating Guards");
    return true;
  }

}
