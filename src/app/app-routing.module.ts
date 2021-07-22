import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VaccinationComponent } from './vaccination/vaccination.component';

const routes: Routes = [
  {
    path: "" , component: DashboardComponent
  },
  {
    path: "vaccination", component: VaccinationComponent
  },
  {
    path: "contact", component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
