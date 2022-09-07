import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BeerRecipe } from 'src/app/models/beer-recipe.model';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  @Input() beersList: BeerRecipe[];

  constructor(private dialog: MatDialog) { }

  showDetail(beer: BeerRecipe): void{
    const dialogConfig = {
      data: beer,
      width: '500px'
    }

    this.dialog.open(RecipeDetailComponent, dialogConfig)
  }

}
