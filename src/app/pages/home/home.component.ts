import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/interfaces/pokemon';
import { Pokemon } from 'src/app/interfaces/pokemon-specification';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _pokemonService : PokemonService, private _router:Router, private _activatedRoute: ActivatedRoute){}

  listPokemon:Result[] = [];

  page : number = 1;
  pickPokemon?:Pokemon;

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      const pageQueryParam = params['page'];
      this.page = pageQueryParam ? +pageQueryParam : 1;
      this.loadList();
    }); 
  
  } 

  async loadList(){
    this.listPokemon =await this._pokemonService.getByPage(this.page);
  }

  nextPage(): void {
    this.page++;
    this.updateUrl();
  }

  afterPage(): void {
    this.page--;
    this.updateUrl();
  }

  numPage(): void{
    if (this.page !== 0 && this.page !== null && this.page !== undefined) {
      this.updateUrl();
      this.loadList();
    }
  }

  async cardClick(id:string){
    this.pickPokemon =await this._pokemonService.getById(id);
    this._router.navigateByUrl(`detail/${id}`)
  }
  private updateUrl() {
    // Actualiza la URL con el nuevo valor de la página
    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: { page: this.page },
      queryParamsHandling: 'merge'
    });
  }

}
