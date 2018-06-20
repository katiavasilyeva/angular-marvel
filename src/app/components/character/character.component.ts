import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
  <div class="fl w-100 w-25-ns pa2" >
  <div class="tc bg-white pa3 ">
  <p class="f5 lh-copy avenir">{{character.name}}</p>
  <img class="w-100"  [src]="character.thumbnail.path + '/standard_large.' + character.thumbnail.extension"
  alt={{character.name}}/>
  </div>

  </div>`,
  selector: 'character',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent {
  @Input() character;
}
