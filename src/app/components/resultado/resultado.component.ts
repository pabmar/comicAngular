import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { HeroesService  } from '../../servicios/heroes.service'

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
 
})
export class ResultadoComponent implements OnInit {
  heroes:any[] = [];
  heroesSF:any[] = [];
  termino:string = "";
 
  constructor( private _activateRouter:ActivatedRoute, private _heroesService:HeroesService, private _router:Router) { }

  ngOnInit() {

    this._activateRouter.params.subscribe( params =>{
      this.termino = params['buscar'];
      this.heroes = this._heroesService.buscarHeroes(params['buscar']);
      this.heroesSF = this._heroesService.getHeroes();
      
    })
  }
  verHeroe(n:string){
    console.log(this.heroesSF);
    let i:number =0
    this.heroesSF.forEach(hero => {
      
      if(hero.nombre == n){
        this._router.navigate(['/heroe',i])
      }
      i++
    });
  }
 

}
