import { Component, OnInit } from '@angular/core';
import { CountryModel } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {


    public countries : CountryModel[];
    public searchingCountries : CountryModel[];
    public textToSearch:string;
    
  constructor(private myCountriesService : CountriesService) { }

  async ngOnInit() {
      try {
      this.countries = await this.myCountriesService.getAllCountriesAsync();
      }
      catch(err) {
          alert(err.message);
      }
  }

  public startSearch():void {
    
   this.searchingCountries = this.countries.filter(c=>c.name.toLowerCase().includes(this.textToSearch.toLowerCase())||c.capital.toLowerCase().includes(this.textToSearch.toLowerCase()));

  }




}
