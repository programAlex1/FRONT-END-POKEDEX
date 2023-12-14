import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon-specification';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit{


  pokemon?: Pokemon;
  description : string ="";

  constructor(private _pokemonService: PokemonService,private _router:ActivatedRoute){
    this._router.params.subscribe(param =>{
      this.getPokemon(param['id']),
      this.getDescription(param['id'])
    })


  }

  ngOnInit(): void {
    
  }

  async getPokemon(id:string){
    this.pokemon= await this._pokemonService.getById(id);
  }
  async getDescription(id:string){
    this.description = await this._pokemonService.getDescription(id);
  }

  




}

  

