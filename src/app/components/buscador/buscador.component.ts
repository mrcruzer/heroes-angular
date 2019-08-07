import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.services';




@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  @Input () heroes: any = {}
  @Input() index:number;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params['termino']);
      this.heroes = this._heroesService.buscaHeroes( params['termino'] );

      console.log(this.heroes);
    });

  }

  verHeroe(idx:number) {
    //console.log(this.index);
    console.log(idx);
    console.log(this.index);
    //this.router.navigate( [ '/heroe', idx ]);
  }

}
