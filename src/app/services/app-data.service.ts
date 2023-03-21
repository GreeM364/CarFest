import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {Car} from "./car.interface";
import {Observable, of, throwError} from "rxjs";
import {delay, map, catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppDataService {
  private CarsCollection: Array<Car>;
  private url = 'http://localhost:3000/cars'
  constructor(private http: HttpClient) {}
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url).pipe(map((response: any) => {
      this.CarsCollection = response;
      return this.CarsCollection;
    }), catchError((error) => throwError('Server do not response')));
  }
  getCar(id: number): Observable<Car> {
    const url = `${this.url}/${id}`;
    return this.http.get<Car>(url);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id).pipe(map((response: any) => {response;}),
      delay(1200));
  }
  createCar(newCar: Car): Observable<any> {
    newCar.id = Math.floor(Math.random() * 500) + 1;
    return this.http.post<Car>(this.url, newCar);
  }
  updateCar(CarForUpdating: Car): Observable<any> {
    return this.http.put(this.url + '/' + CarForUpdating.id, CarForUpdating).pipe(map((response: any) => {response;}),
      delay(1000));
  }
}

