import { Component } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.template.html',
  styleUrls: ['../../app.component.css']
})
export class SearchBoxComponent {
  searchText = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(10)
  ]);
  searchBoxForm: FormGroup = this.builder.group({
    searchText: this.searchText
  });
  constructor(private builder: FormBuilder) {}
  search() {
    this.searchBoxForm.valid ? console.log('valid') : console.log('invalid');
  }
}
