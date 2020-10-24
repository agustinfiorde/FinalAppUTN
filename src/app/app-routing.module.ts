import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { DogListComponent } from './components/dog/dog-list/dog-list.component';
import { DogDetailsComponent } from './components/dog/dog-details/dog-details.component';
import { DogFormComponent } from './components/dog/dog-form/dog-form.component';
import { LoginComponent } from './components/login/login.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { ErrorComponent } from './components/error/error.component';
import { MessageComponent } from './components/message/message.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'message', component: MessageComponent },
  { path: 'dogs', component: DogListComponent },
  { path: 'dog/:id', component: DogDetailsComponent },
  { path: 'dog/register', component: DogFormComponent },


  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'user/register', component: UserFormComponent },


  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'product/register', component: ProductFormComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [];