import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarFormComponent} from "./components/car-form/car-form.component";
import {CarListComponent} from "./components/car-list/car-list.component";

const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'addCar', component: CarFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
