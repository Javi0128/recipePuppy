import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BeerRecipe } from '../models/beer-recipe.model';
import { RecipeService } from './recipe-service/recipe.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  searchForm: FormGroup;

  allBeersRecipes: BeerRecipe[];

  beersFilteredList: BeerRecipe[];

  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService) { }

  ngOnInit(): void {

    this.recipeService.getBeersRecipe()
      .subscribe(beers => {
        this.allBeersRecipes = beers;
        this.beersFilteredList = beers;
      })

    this.searchForm = this.formBuilder.group({
      filter: []
    });

    this.searchForm.get('filter')
     ?.valueChanges
     ?.subscribe(filterValue => {
        this.beersFilteredList = filterValue && filterValue !== '' ? this.allBeersRecipes.filter(beer => beer.name.toLowerCase().includes(filterValue.toLowerCase())) : this.allBeersRecipes;
     })

  }

}
