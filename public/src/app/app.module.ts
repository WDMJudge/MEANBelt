import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetShelterComponent } from './pet-shelter/pet-shelter.component';
import { PetsComponent } from './pets/pets.component';
import { NewComponent } from './new/new.component';
import { ShowPetComponent } from './show-pet/show-pet.component';
import { EditComponent } from './edit/edit.component';
import { HttpService } from './http.service';
import { HttpClient, HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PetShelterComponent,
    PetsComponent,
    NewComponent,
    ShowPetComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
