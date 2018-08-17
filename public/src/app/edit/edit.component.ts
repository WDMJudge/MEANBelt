import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet: any;
  nameErr: any;
  typeErr: any;
  descErr: any;
  id: String;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      let obs = this._httpService.onePet(this.id);
      obs.subscribe(data => {
        console.log("getting the pet", data);
        this.pet = data;
      })
    })
  }

  editPet(){
    this.nameErr = "";
    this.typeErr = "";
    this.descErr = "";
    let obs = this._httpService.updatePet(this.pet, this.id);
    obs.subscribe(data => {
      console.log("about to edit pet", data);
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
        this.showPet();
      }
    })
  }

  showPet() {
    this._router.navigate(['/pets/' + this.id]);
  }

}
