import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { CanActivateAdminRouteService } from './can-activate-admin-route.service';
import { UserRole } from '../constants/users';

@Injectable({
  providedIn: 'root'
})
export class CanActivateUserRouteService implements CanActivate {
  constructor(private canActivateAdminRouteService: CanActivateAdminRouteService) {}

  canActivate(
    route: ActivatedRouteSnapshot): boolean {
    const { queryParams: { user = '' } } = route;
    return user === UserRole.User || this.canActivateAdminRouteService.canActivate(route);
  }
}
