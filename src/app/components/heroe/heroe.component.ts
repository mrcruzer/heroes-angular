import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesService) { 

    this.activatedRoute.params.subscribe(params => {
      //console.log(params['id']);
      this.heroe = _heroeService.getHeroe(params['id']);
    })
   }

  ngOnInit() {
  }

}
