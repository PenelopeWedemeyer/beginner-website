import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id: number = 0;

  currentProduct: Product = new Product();

  constructor(private myProductService: ProductService, private actRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const routeID = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeID)

    this.myProductService.getProductByID(this.id).subscribe(response => {
      this.currentProduct = response;
    })
  }

  onSubmit() 
  {
    this.myProductService.editProductByID(this.id, this.currentProduct).subscribe(response => {
      console.log(response)
      this.router.navigateByUrl("/products");
    })
  }

}
