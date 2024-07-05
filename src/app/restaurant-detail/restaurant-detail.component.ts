import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { Location } from '@angular/common';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant = {
    id: 0, name: '', description: '', location: '',contactNo:'',
    openingHours: '',imageUrl: ''
  };

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getRestaurant();
  }
  
  getRestaurant(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.restaurantService.getRestaurant(id).subscribe(restaurant => this.restaurant = restaurant);
  }

  goBack(): void {
    this.location.back();
  }
}

  