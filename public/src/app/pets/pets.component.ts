import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.allPets();
  }

  allPets(){
    let obs = this._httpService.allPets();
    obs.subscribe(data => {
      console.log("got the pets", data);
      this.pets = data;
    })
  }

}
