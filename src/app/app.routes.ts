import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {HomeComponent} from './home/home.component';

const routes: Routes = [
   {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Submit your cv and wait'
    }
  },
  {
   path: '',
   redirectTo: '/home',
   pathMatch: 'full'
  }
];
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);