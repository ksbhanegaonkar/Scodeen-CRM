import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate-details/candidate-details-service.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  batchDropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  firstName:String;
  middleName:String;
  lastName:String;
  constructor(private candidateService : CandidateService) { }

  ngOnInit() {



  // this.batchDropdownList = [
  //   { item_id: 1, item_text: 'Mumbai' },
  //   { item_id: 2, item_text: 'Bangaluru' },
  //   { item_id: 3, item_text: 'Pune' },
  //   { item_id: 4, item_text: 'Navsari' },
  //   { item_id: 5, item_text: 'New Delhi' }
  // ];
  // this.selectedItems = [
  //   { item_id: 3, item_text: 'Pune' },
  //   { item_id: 4, item_text: 'Navsari' }
  // ];
  this.candidateService.getBatchList().subscribe(
    (l)=>{
      this.batchDropdownList = l;
    }
  );
  this.dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 10,
    allowSearchFilter: true
  };
  }


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  

  searchCandidates(){
    console.log(this.selectedItems);
    console.log("First name is ::: "+this.firstName+this.lastName+this.middleName);
    this.candidateService.searchCandidates({"fname":this.firstName,"lname":this.lastName,"batches":this.selectedItems}).subscribe(
      (l)=>{
        console.log(l);
      }
    );
  }

}
