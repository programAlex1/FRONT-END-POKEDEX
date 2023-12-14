import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  {path :"",component : HomeComponent},
  {path:"detail/:id",component:DetailPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
