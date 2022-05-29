import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import AppRoutes from './app-routes';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { ThemeService } from './theme.service';

@NgModule({
  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent
  ],
  exports: [RouterModule],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
