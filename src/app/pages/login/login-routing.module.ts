import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';



const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  { path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},

  {
    path: 'contact',
    loadChildren: () => import('../../contacts/contacts.module').then( m => m.ContactsPageModule)
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
