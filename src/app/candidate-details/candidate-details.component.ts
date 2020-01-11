import { Component, OnInit } from '@angular/core';
import {Candidate} from './Candidate';
import {CandidateService} from './candidate-details-service.service';
@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  candidate : Candidate = new Candidate();
  batchDropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private candidateService : CandidateService) { 
   
  }
  ngOnInit() {
    
    
      this.candidate.fname = "";
      this.candidate.lname = "";
      this.candidate.mname = "";
      this.candidate.email="";
      this.candidate.contactNumber="";


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

  saveCandidate(){
    console.log("button clicked !!");
    this.candidateService.registerCandidate(this.candidate).subscribe((c)=>{
      console.log("Candidate added !!");
    });
  }

  getCandidate(){
    console.log("button clicked !!");
    this.candidateService.getCandidateDetail(2).subscribe((c)=>{
      console.log("Candidate added !!");
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
