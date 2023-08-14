import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  recipes: Recipe[] = [
    new Recipe('A test recipe','the recipe image the recipe image the recipe image the recipe image the recipe image', 
    'https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-1676057761.jpeg?crop=1.00xw:0.502xh;0,0.229xh&resize=1200:*' ),
    new Recipe('A test recipe','the recipe image', 'https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-1676057761.jpeg?crop=1.00xw:0.502xh;0,0.229xh&resize=1200:*' ),
    new Recipe('A test recipe','the recipe image', 'https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-1676057761.jpeg?crop=1.00xw:0.502xh;0,0.229xh&resize=1200:*' )
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

}
