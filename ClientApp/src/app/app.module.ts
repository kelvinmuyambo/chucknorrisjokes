import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryComponent } from './containers/category/category.component';
import { CategoryService, JokeService } from './services';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { JokeModalComponent } from './components/joke-modal/joke-modal.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { StoreModule } from '@ngrx/store';
import * as fromCategories from './state/categories/categories.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from './state/categories/categories.effects';
import * as fromJokes from './state/jokes/jokes.reducer';
import { JokesEffects } from './state/jokes/jokes.effects';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategoryComponent,
    CategoryCardComponent,
    JokeModalComponent,
    SearchBoxComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CategoryComponent, pathMatch: 'full' }
    ]),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CategoriesEffects, JokesEffects]),
    
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromCategories.categoriesFeatureKey, fromCategories.reducer),
    StoreModule.forFeature(fromJokes.jokesFeatureKey, fromJokes.reducer)
  ],
  providers: [CategoryService, JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
