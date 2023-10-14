import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './header/shopping-list/shopping-list-edit/ingredient/ingredient.component';
import { ReciepeBookComponent } from './header/reciepe-book/reciepe-book.component';
import { RecipeListComponent } from './header/reciepe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/reciepe-book/recipe-list/recipe-item/recipe-item.component';
import { ReciepeDetailsComponent } from './header/reciepe-book/reciepe-details/reciepe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    ReciepeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ReciepeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
