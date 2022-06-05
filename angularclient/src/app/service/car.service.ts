import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private readonly localhost: string;

  constructor(private readonly http: HttpClient) {
    this.localhost = 'http://localhost:8081';
  }

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.localhost + '/cars');
  }

  public save(Car: Car) {
    return this.http.post<Car>(this.localhost + '/car', Car);
  }
}
