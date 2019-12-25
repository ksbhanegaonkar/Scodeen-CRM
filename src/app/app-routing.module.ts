import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { HomeComponent } from './home/home.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentEnquiryComponent } from './student-enquiry/student-enquiry.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "user-registration", component: StudentRegistrationComponent},
  {path: "student-enquiry", component: StudentEnquiryComponent},
  {path: "add-payment", component: AddPaymentComponent} , 
  {path: "candidate-details", component: CandidateDetailsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
