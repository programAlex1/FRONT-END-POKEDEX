import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/interfaces/pokemon';
import { Pokemon } from 'src/app/interfaces/pokemon-specification';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _pokemonService : PokemonService, private _router:Router){}

  listPokemon:Result[] = [];

  page : number = 1;
  pickPokemon?:Pokemon;

  ngOnInit(): void {
    this.loadList();
  } 

  async loadList(){
    this.listPokemon =await this._pokemonService.getByPage(this.page);
  }

  nextPage(): void {
    this.page++;
    this.loadList();
  }

  afterPage(): void {
    this.page--;
    this.loadList();
  }

  async cardClick(id:string){
    this.pickPokemon =await this._pokemonService.getById(id);
    this._router.navigateByUrl(`detail/${id}`)
  }

}
