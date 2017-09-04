import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'heroes-component',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService],
})

export class HeroesComponent implements OnInit {
  name: string = 'Angular';
  title: string = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;  // <- this is a reference to the object!

  constructor(
    private heroService: HeroService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();

    if (!name) { return; }

    this.heroService.create(name)
          .then(hero => {
            this.heroes.push(hero);

            this.selectedHero = null;
          });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => hero !== h);

        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
