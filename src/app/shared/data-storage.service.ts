import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";


@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService
    ) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
         return this.http.put(
            'https://recipes-list-4ddc3-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
             recipes
        )
        .subscribe(response => {
            console.log(response);
        })
    }

    fetchRecipes() {
        this.authService.user.pipe(take(1)).subscribe(user => {
            
        } )
        return this.http.get<Recipe[]>(
            'https://recipes-list-4ddc3-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
        )
        .pipe(
            map(recipes => {
            return recipes.map(recipe => {
                return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
            })
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        )
    }
}