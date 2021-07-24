import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";
  resdata : any;
  constructor(private _http:Http) { }

  getAlbum(id:number){
    console.log("I am going to get the details ")
    this.resdata = this._http.get(this._albumUrl).map((response:Response)=>response.json());
    console.log(this.resdata);
    return this.resdata;
  }
}
