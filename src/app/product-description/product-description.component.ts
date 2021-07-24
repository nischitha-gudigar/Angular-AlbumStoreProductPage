import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;
  id:number=1;
  constructor(private _productService:ProductService) { }

  ngOnInit() {
   this._productService.getAlbum(this.id).subscribe(response => this.albumInfo = response);
  }

}
