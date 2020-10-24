import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserPageComponent } from './components/user/user-page/user-page.component';
import { DogFormComponent } from './components/dog/dog-form/dog-form.component';
import { DogListComponent } from './components/dog/dog-list/dog-list.component';
import { DogDetailsComponent } from './components/dog/dog-details/dog-details.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { DogPageComponent } from './components/dog/dog-page/dog-page.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    LoginComponent,
    ErrorComponent,
    AboutComponent,
    ContactComponent,
    UserFormComponent,
    UserListComponent,
    UserPageComponent,
    DogFormComponent,
    DogListComponent,
    DogDetailsComponent,
    UserDetailsComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductPageComponent,
    ProductDetailsComponent,
    DogPageComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
