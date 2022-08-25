import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {

  public pokemonData: any;
  public pokemonImagenData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.pokemonData = [];
    this.pokemonImagenData = [];
    this.getPokemons();
  }

  getPokemons(){
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0').subscribe((response)=>{
      this.pokemonData = response;
      this.pokemonData = this.pokemonData.results;

      for (let index = 0; index < this.pokemonData.length; index++) {
        this.http.get(this.pokemonData[index].url).subscribe((response)=>{
          this.pokemonImagenData = response;
          this.pokemonData[index].url = this.pokemonImagenData.sprites.front_default;
          })
      } 
    })
  }

}