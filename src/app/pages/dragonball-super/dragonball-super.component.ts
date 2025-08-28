import { Component, computed, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/character-list/character-list.component";
import { CharacterAppComponent } from '../../components/character-app/character-app.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAppComponent],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css'
})
export class DragonballSuperComponent {

  public dragonballService = inject(DragonballService);

  pawerClases = computed( () => {
    return {
      'text-danger': true,
    }
  })

}
