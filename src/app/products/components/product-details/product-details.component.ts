import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  id:any;
  product : Product =new Product();
  loading:boolean=false;

  constructor(private route:ActivatedRoute,private productsService:ProductsService){
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id)
  }
  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(){
    this.loading=true;
    this.productsService.getProductById(this.id).subscribe(product=>{
      console.log(product)
      this.product= product;
      this.loading=false;
    },error=>{
      console.log("Error getting Product ID");
      this.loading=false;
    })
  }

}
