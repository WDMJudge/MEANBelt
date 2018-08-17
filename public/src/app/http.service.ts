import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  allPets(){
    return this._http.get('/allPets');
  }

  onePet(id){
    return this._http.get('/onePet/' + id);
  }

  createPet(pet){
    return this._http.post('/createPet', pet);
  }

  updatePet(pet, id){
    return this._http.put('/updatePet/' + id, pet);
  }

  deletePet(id){
    return this._http.delete('/deletePet/' + id);
  }

  like(id, pId){
    return this._http.put('/like/' + id, pId);
  }

}
