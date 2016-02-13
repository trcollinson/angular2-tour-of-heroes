import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css'],
	directives: [HeroDetailComponent],
	providers: []
		
})

export class HeroesComponent implements OnInit {
	selectedHero: Hero;
	heroes: Hero[];

	constructor(
		private _router: Router,
		private _heroService: HeroService) { }

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero) { this.selectedHero = hero; }

	ngOnInit() {
		this.getHeroes();
	}

	gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

