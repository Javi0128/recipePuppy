import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent{

  @Input() searchForm: FormGroup;

  constructor() { }

  clearField(field: string): void {
    this.searchForm.get(field)?.setValue(null);
  }

}
