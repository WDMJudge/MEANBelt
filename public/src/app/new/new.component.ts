import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  pet = {
    name: "",
    type: "",
    desc: "",
    skillOne: "",
    skillTwo: "",
    skillThree: "",
  }
  nameErr: any;
  typeErr: any;
  descErr: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

newPet(){
  this.nameErr = "";
  this.typeErr = "";
  this.descErr = "";
  let obs = this._httpService.createPet(this.pet);
  obs.subscribe(data => {
    console.log("creating the pet", data);
    if(data.hasOwnProperty('errors')){
      if(data['errors'].name){
        this.nameErr = data['errors'].name.message;
      }
      if(data['errors'].type){
        this.typeErr = data['errors'].type.message;
      }
      if(data['errors'].desc){
        this.descErr = data['errors'].desc.message;
      }
    } else {
      this.goHome();
    }
  })
}

  goHome() {
    this._router.navigate(['/pets']);
  }


}
