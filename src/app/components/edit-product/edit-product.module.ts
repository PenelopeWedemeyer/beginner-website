import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProductComponent } from './edit-product.component';
import { EditProductRoutingModule } from './edit-product-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditProductComponent
  ],
  imports: [
    CommonModule,
    EditProductRoutingModule,
    FormsModule
  ]
})
export class EditProductModule { }
