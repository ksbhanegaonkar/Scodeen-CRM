import { Component, OnInit } from '@angular/core';
import {Candidate} from './Candidate';
import {CandidateService} from './candidate-details-service.service';
@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  candidate : Candidate;
  constructor(private candidateService : CandidateService) { 
   
  }
  ngOnInit() {
     this.candidate = new Candidate();
     this.candidate.fname = "Sachin";
     this.candidate.lname = "Tendulkar";
     this.candidate.mname = "Dont know";
    
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

}
