import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

const appRoutes: Routes = [
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'restaurants/add', component: RestaurantAddComponent },
  { path: 'restaurants/edit/:id', component: RestaurantEditComponent },
  { path: 'restaurants/:id', component: RestaurantDetailComponent },
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantAddComponent,
    RestaurantEditComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
