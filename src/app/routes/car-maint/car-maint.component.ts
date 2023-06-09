import { Component } from '@angular/core';
import { Car} from "../../services/car.interface";
import { Router } from '@angular/router';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-car-maint',
  templateUrl: './car-maint.component.html',
  styleUrls: ['./car-maint.component.css']
})
export class CarMaintComponent {
  CarList: Array<Car>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private router: Router, private appDataService: AppDataService) {
    appDataService.getCars().subscribe((data => { this.CarList = data }));
  }
  createCar() {
    this.router.navigate(['/authenticated/car-detail', 0, 'create']);
  }
  showCarDetail(id: number) {
    this.router.navigate(['/authenticated/car-detail', id, 'details']);
  }
  editCar(id: number) {
    this.router.navigate(['/authenticated/car-detail', id, 'edit']);
  }
  deleteCarQuestion(id: number) {
    this.deleteError = null;
    this.deleteId = id;
  }
  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }
  deleteCar (id: number) {
    this.isDeleting = true;
    this.appDataService.deleteCar(id).subscribe(c => {this.cancelDelete();
        this.CarList = this.CarList.filter(carItem => carItem.id !== id);
      },
      error => {
        this.deleteError = error;
        this.isDeleting = false;
      });
  }
}
