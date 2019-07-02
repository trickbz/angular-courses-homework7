import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { UserRole } from '../constants/users';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdminRouteService implements CanActivate {

  constructor() { }

  public canActivate(
    route: ActivatedRouteSnapshot): boolean {
    const { queryParams: { user = '' } } = route;
    return user === UserRole.Admin;
  }
}
