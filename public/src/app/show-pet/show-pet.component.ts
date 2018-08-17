import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.css']
})
export class ShowPetComponent implements OnInit {
  pet: any;
  id: any;
  switch: boolean = false;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.showPet();
  }

  like(){
    let obs = this._httpService.like(this.id, this.pet);
    obs.subscribe(data => {
      console.log("liking the pet", data);
      this.showPet();
    })
  }

  showPet(){
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      let obs = this._httpService.onePet(this.id);
      obs.subscribe(data => {
        console.log("getting the pet", data);
        this.pet = data;
      })
    })
  }

  deletePet(){
    let obs = this._httpService.deletePet(this.id);
    obs.subscribe(data => {
      console.log("about to delete pet", data);
      this.goHome();
    })
  }

  goHome() {
    this._router.navigate(['/pets']);
  }
}
