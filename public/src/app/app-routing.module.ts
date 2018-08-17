import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetShelterComponent } from './pet-shelter/pet-shelter.component';
import { PetsComponent } from './pets/pets.component';
import { NewComponent } from './new/new.component';
import { ShowPetComponent } from './show-pet/show-pet.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'pets', component: PetShelterComponent, children: [
    {path: '', component: PetsComponent},
    {path: 'new', component: NewComponent},
    {path: ':id', component: ShowPetComponent},
    {path: ':id/edit', component: EditComponent},
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  { path: '**', redirectTo: '/pets' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
