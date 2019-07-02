import { Route } from '@angular/router';
import { NotFoundPageComponent } from '../components/not-found-page/not-found-page.component';
import { ProductsContainerComponent } from '../components/products-container/products-container.component';
import products from '../mocks/productsMockData';
import { ProductsResolveService } from '../services/products-resolve.service';
import { CanActivateUserRouteService } from '../services/can-activate-user-route.service';
import { CanActivateAdminRouteService } from '../services/can-activate-admin-route.service';

export const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'src/app/modules/home/home.module#HomeModule' },
  {
    path: 'products',
    component: ProductsContainerComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/modules/products/products.module#ProductsModule',
        data: { products },
        canActivate: [CanActivateUserRouteService]
      },
      {
        path: ':id',
        loadChildren: 'src/app/modules/products-details/products-details.module#ProductsDetailsModule',
        resolve: { product: ProductsResolveService },
        canActivate: [CanActivateAdminRouteService]
      },
      { path: '**', redirectTo: '/products' }
    ]
  },
  { path: 'about', loadChildren: 'src/app/modules/about/about.module#AboutModule' },
  { path: '**', component: NotFoundPageComponent }
];
