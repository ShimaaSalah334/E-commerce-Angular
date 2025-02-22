import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { CategoriesService } from '../../core/services/categories.service';
import { ICategory } from '../../core/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CarouselModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  productsList: IProduct[] = [];
  categoriesList: ICategory[] = [];
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoWidth: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-angle-left text-gray-650" ></i>',
      '<i class="fa-solid fa-angle-right text-gray-650"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 7,
      },
    },
    nav: true,
  };
  constructor(
    private products: ProductsService,
    private categories: CategoriesService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.displayProducts();
    this.displayCategories();
    this.displayProductsByCat();
  }

  displayProducts() {
    this.products.getProducts().subscribe({
      next: (res) => {
        this.productsList = res.data;
        console.log(this.productsList);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  displayCategories() {
    this.categories.getCategories().subscribe({
      next: (res) => {
        this.categoriesList = res.data;
        console.log(this.categoriesList);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  displayProductsByCat() {
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params.get('catname'));
      const categoryName = params.get('catname');
      if (categoryName) {
        this.categories
          .getSpecificCategory(categoryName)
          .subscribe((res) => {});
      }
    });
  }
}
