import { Injectable } from '@angular/core';
import { Result} from '../interfaces/pokemon';
import { Pokemon } from '../interfaces/pokemon-specification';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  private urlApi:string = environment.endpoint;


  async getByPage(page:number,size: number = 16):Promise<Result[]>{
    const offset= size*(page-1);
    const rest = await fetch(`${this.urlApi}?offset=${offset}&limit=${size}`);
    const restJson =await rest.json();
    console.log(restJson);
    if(restJson.results.length>0) return restJson.results
    return [];
  }

  async getById(id:string):Promise<Pokemon>{
    const rest = await fetch(`${this.urlApi}/${id}`);
    return await rest.json();
  } 


  async getDescription(id: string | number):Promise<string>{
    const res = await fetch(`${this.urlApi}/species/${id}`)
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto:any) =>  texto.language.name === "es")
    return texto ? texto.flavor_text : "Error";
  }
}
