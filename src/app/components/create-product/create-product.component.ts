import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  currentProduct: Product = new Product();

  constructor(private myProductService: ProductService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onSubmit() 
  {
    this.myProductService.createNewProduct(this.currentProduct).subscribe(response => {
      console.log(response)
      this.router.navigateByUrl("/products");
    })
  }
}
