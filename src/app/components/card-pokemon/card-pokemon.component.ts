import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Result } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnChanges{

  constructor(private _pokemonService : PokemonService){}

  ngOnChanges(changes: SimpleChanges): void {
    this.info();
  }

  

  @Input() data?:Result;
  @Output() click = new EventEmitter<string>();
  id:string = "0";

  info(){
    if(this.data){
      this.id = this.data.url.substring(34,this.data.url.length-1);
      this._pokemonService.getById(this.id);
    }
  }

  

}
