import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://thekitchencommunity.org/wp-content/uploads/2022/01/seafood-recipe-1200x800.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
