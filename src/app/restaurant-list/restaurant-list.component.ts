import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  paginatedRestaurants: Restaurant[] = [];
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;
  totalPagesArray: number[] = [];
  updatePagination: any;

  constructor(private router: Router, private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getRestaurants();
    
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
      this.totalPages = Math.ceil(this.restaurants.length / this.itemsPerPage);
      this.updatePageNumbers();
      this.setPage(this.currentPage);
    });
  }
  editRestaurant(id?: number): void {
    if (id !== undefined) {
      this.router.navigate(['/restaurants', 'edit',id]);
    } else {
      console.error('Invalid restaurant id:', id);
    }
  }

  viewRestaurant(id?: number): void {
    if (id !== undefined) {
      this.router.navigate(['/restaurants', id]);
    } else {
      console.error('Invalid restaurant id:', id);
    }
  }


  deleteRestaurant(id?: number): void {
    if (id !== undefined) {
      this.restaurantService.deleteRestaurant(id).subscribe(() => {
        this.restaurants = this.restaurants.filter(r => r.id !== id);
        this.totalPages = Math.ceil(this.restaurants.length / this.itemsPerPage);
        this.updatePagination();
      });
    } else {
      console.error('Invalid restaurant id:', id);
    }
  }

  updatePageNumbers(): void {
    this.totalPagesArray = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.totalPagesArray.push(i);
    }
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      const startIndex = (page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.paginatedRestaurants = this.restaurants.slice(startIndex, endIndex);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }
}
