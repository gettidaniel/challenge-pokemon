import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() nombre:String;

  @Input() foto:String;

  constructor() { 
    this.nombre = "";
    this.foto = "";
  }

  ngOnInit(): void {
  }

}
