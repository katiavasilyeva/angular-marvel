import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './characters.template.html',
  selector: 'characters',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent {
  @Input() characters;
}
