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

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategoryComponent,
    CategoryCardComponent,
    JokeModalComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CategoryComponent, pathMatch: 'full' }
    ])
  ],
  providers: [CategoryService, JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
