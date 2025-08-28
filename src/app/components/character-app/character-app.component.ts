import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-character-app',
  imports: [],
  templateUrl: './character-app.component.html',
  styleUrl: './character-app.component.css'
})
export class CharacterAppComponent {
  
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();
  
  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter:Character = {
      id: Math.floor(Math.random() * 100),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
