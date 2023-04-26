import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    public name: string = 'iroman';
    public age: number = 45;

    // Creamos una getter
    get capitalizedName():string {
      return this.name.toUpperCase();
    };

    public getHeroDescription():string {
      return `${ this.name } - ${ this.age }`
    }

    public changeHero (): void {
      this.name = 'Spiderman';
    }

    public changeAge (): void {
      this.age = 18;
    }

    public resetForm(): void {
      this.name = 'iroman';
      this.age = 45;
    }
}
