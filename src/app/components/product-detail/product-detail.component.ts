import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  id: number = 0;

  currentProduct: Product = new Product();

  constructor(private myProductService: ProductService, private actRouter: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    const routeID = this.actRouter.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeID);

    this.myProductService.getProductByID(this.id).subscribe(response => {
      this.currentProduct = response;
    })
  }

  onDelete(id: number) 
  {
    this.myProductService.deleteProductByID(id).subscribe(r => {
      console.log(r);
      this.route.navigateByUrl("/products")
    })
  }

}
