import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate-details/candidate-details-service.service';
import { Candidate } from './Candidate';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  candidate : Candidate = new Candidate();
  batchDropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  searchedCandidateList =[];
  searchTableHeaders = ["Name","Batch","Registered"];
  searchTableKeys = ["name","batch","isregistered"];
  newRegister:boolean;
  


  firstName:String;
  middleName:String;
  lastName:String;
  constructor(private candidateService : CandidateService) {

        
    this.candidate.fname = "";
    this.candidate.lname = "";
    this.candidate.mname = "";
    this.candidate.email="";
    this.candidate.contactNumber="";
   }

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
  newRegistration(){
    this.newRegister = true;
  }
  

  searchCandidates(){
    this.candidateService.searchCandidates({"fname":this.candidate.fname,"lname":this.candidate.lname,"batches":this.selectedItems}).subscribe(
      (l)=>{
        this.searchedCandidateList = l;
      }
    );
  }

  saveCandidate(){
     console.log("button clicked !!");
     this.candidate.enrolledbatches = this.selectedItems;
     this.candidateService.registerCandidate(this.candidate).subscribe((c)=>{
       console.log("Candidate added !!");
     });
    this.newRegister =  false;
  }

  closeRegistration(){
    this.newRegister = false;
  }


}
