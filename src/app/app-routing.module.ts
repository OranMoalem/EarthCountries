import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [

        {path:"home",component:HomeComponent},
        {path:"countries",component:CountriesComponent},
        {path:"about",component:AboutComponent},
        {path:" ",redirectTo:"/home",pathMatch:"full"},
        {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
