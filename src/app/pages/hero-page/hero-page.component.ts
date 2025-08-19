import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed( () => `${this.name()} - ${this.age()}` );

  capitalizedName = computed( () => this.name().toUpperCase() );

  changeHero() {
    this.name.update( () => 'Spiderman' );
    this.age.update( () => 22 );
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.update( () => 60 );
  }

}
