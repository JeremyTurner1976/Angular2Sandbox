import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router }
  from '@angular/router';

//ROUTE Guards
  //CanActivate
  //CanDeactivate
  //Resolve
  //CanLoad

@Injectable()
export class ProductGuard implements CanActivate {

  constructor(
    private router: Router
  ){

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log("Initiating Guards");

    let id = +route.url[1].path;
    if(isNaN(id) || id < 1){
      this.router.navigate(['/products']);
      return false;
    }

    return true;
  }

}
