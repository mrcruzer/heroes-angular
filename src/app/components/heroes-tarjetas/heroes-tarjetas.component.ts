import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-heroes-tarjetas',
  templateUrl: './heroes-tarjetas.component.html',
  styleUrls: ['./heroes-tarjetas.component.css']
})
export class HeroesTarjetasComponent implements OnInit {

  @Input() heroe: any = {}
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe() {
    // console.log(this.index);
     this.router.navigate( [ '/heroe', this.index ]);
    //this.heroeSeleccionado.emit(this.index);
  }

}
