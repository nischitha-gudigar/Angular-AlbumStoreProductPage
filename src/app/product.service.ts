import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";
  resdata : any;
  constructor(private _http:Http) { }
  getAlbum(id:Number){
    this.resdata = this._http.get(this._albumUrl).map(response=>response.json());
    return this.resdata;
  }
}
