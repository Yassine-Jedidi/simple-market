import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  constructor(private productsService : ProductsService){}

  products:Product[] =[];
  categories:string[] =[];
  loading:boolean=false;

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading=true;
    this.productsService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
        this.loading=false;
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.loading=false;
      }
    );
  }

  getCategories() {
    this.loading=true;
    this.productsService.getCategories().subscribe(
      (categories: any) => {
        this.categories = categories;
        this.loading=false;
      },
      (error) => {
        console.error('Error fetching categories:', error);
        this.loading=false;
      }
    );
  }

  filterCategory(event:any){
    let category = event.target.value;
    category =='all' ? this.getProducts() :  this.getProductsByCategory(category);
  }

  getProductsByCategory(category:string){
    this.productsService.getProductsByCategory(category).subscribe(products=>{
      this.products=products;
    })
  }


}
