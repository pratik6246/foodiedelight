import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {
  restaurant!: Restaurant; // Use definite assignment assertion

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.getRestaurant();
  }

  getRestaurant(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.restaurantService.getRestaurant(id).subscribe(restaurant => this.restaurant = restaurant);
  }

  updateRestaurant(): void {
    this.restaurantService.updateRestaurant(this.restaurant.id!, this.restaurant).subscribe(() => {
      this.router.navigate(['/restaurants']);
    });
  }
}
