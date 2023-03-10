import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44359/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetail"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByColor(categoryId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?colorId="+ categoryId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }
   getCarsByBrand(brandId:number){
    let newUrl = this.apiUrl + "cars/getcardetailsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newUrl);
  }
  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}Cars/add`,car);
  }
}
