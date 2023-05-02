import { Injectable } from '@angular/core';
import { v4 as uuid }  from 'uuid';

import { Character } from '../interfaces/character.interface';




@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [

    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9999
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 7500
    }

  ]

    public addCharacter( character: Character ): void {



      const newCharacter: Character = { id: uuid(), ...character }

      this.characters.push( newCharacter );
    }

    public deleteCharacterById( id:string | undefined ):void {

      this.characters = this.characters.filter( character => character.id !== id )

      console.log(`Borrado con el id: ${id}`)


    }



}
