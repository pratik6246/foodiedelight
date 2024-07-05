import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
export class RestaurantAddComponent {
  restaurant = {
    name: '',
    description: '',
    location: '',
    contactNo:'',
    openingHours:'',
    imageUrl: ''
  };

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  addRestaurant(): void {
    this.restaurantService.addRestaurant(this.restaurant)
      .subscribe(() => {
        this.router.navigate(['/restaurants']);
      });
  }
}
