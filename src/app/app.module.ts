import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [

    LayoutComponent,

    HeaderComponent,

    HomeComponent,

    CountriesComponent,

    ThumbnailComponent,

    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
