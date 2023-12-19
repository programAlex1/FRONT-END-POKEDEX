import { Location } from '@angular/common';
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
  isBackImage: boolean = false;


  constructor(private _pokemonService: PokemonService,private _router:ActivatedRoute,private _location: Location){
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
  getFirstTypeColor(): string {
    if (this.pokemon && this.pokemon.types && this.pokemon.types.length > 0) {
      return this.getColorForType(this.pokemon.types[0].type.name);
    }
    return 'gray';
  }
  

  getColorForType(type: string): string {
    switch (type) {
      case 'grass':
      return '#74CB48';
      case 'poison':
      return '#A43E9E';
      case 'fire':
      return '#F57D31';
      case 'bug':
      return '#A7B723';
      case 'dark':
      return '#75574C';
      case 'dragon':
      return '#7037FF';
      case 'electric':
      return '#F9CF30';
      case 'fairy':
      return '#E69EAC';
      case 'fighting':
      return '#C12239';
      case 'flying':
      return '#A891EC';
      case 'ghost':
      return '#70559B';
      case 'normal':
      return '#AAA67F';
      case 'ground':
      return '#DEC16B';
      case 'ice':
      return '#9AD6DF';
      case 'psychic':
      return '#FB5584';
      case 'rock':
      return '#B69E31';
      case 'steel':
      return '#B7B9D0 ';
      case 'water':
      return '#6493EB';
      default:
        return 'gray'; 
    }
  }

  goBack(): void {
    this._location.back();
  }

  toggleImage() {
    this.isBackImage = !this.isBackImage;
  }
}


