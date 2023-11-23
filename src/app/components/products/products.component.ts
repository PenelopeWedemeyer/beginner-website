import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Product[] = [];

  constructor(private myProductService: ProductService) {}

  ngOnInit(): void {
      this.loadProducts();
  }

  loadProducts()
  {
    this.myProductService.getAllProducts().subscribe(response => {
      this.productList = response;
    })
  }

  onDelete(id: number)
  {
    this.myProductService.deleteProductByID(id).subscribe(response => {
      console.log(response)
      this.loadProducts();
    })
  }

}
