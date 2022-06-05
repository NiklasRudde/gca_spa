import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../service/car.service";
import {Car} from "../../model/car";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.less']
})
export class CarFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private carService: CarService,
    private readonly formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.min(1), Validators.required]]
    })
  }

  onSubmit() {
    this.carService.save(this.form.value as Car).subscribe(() => this.gotoCarList());
  }

  gotoCarList() {
    this.router.navigate(['/cars']).then();
  }
}
