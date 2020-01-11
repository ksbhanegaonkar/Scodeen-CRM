import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Candidate} from './Candidate';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private handleError: HandleError;
  constructor(private http:HttpClient,
   private httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('CandidateService')
     }

  baseURL = "http://localhost:8080";
  registerCandidateUrL = '/services/registercandidate';
  getCandidateDetailUrL = '/services/getcandidatedetails';
  getBatchListUrl = "/services/getbatchlist";
  searchCandidateUrl = "/services/searchcandidate";

  registerCandidate(candidate : Candidate) : Observable<Candidate>{
    console.log("candidate is ::"+candidate.fname);
    return this.http.post<Candidate>(this.baseURL+this.registerCandidateUrL, candidate, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', candidate))
      );
  }

  getCandidateDetail(candidateId : number) : Observable<Candidate>{
   
    return this.http.get<Candidate>(this.baseURL+this.getCandidateDetailUrL+"/"+candidateId, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', null))
      );
  }

  getBatchList(): Observable<any>{
    return this.http.get<any>(this.baseURL+this.getBatchListUrl, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', null))
      );
  }

  searchCandidates(searchQuery : any) : Observable<any>{
    
    return this.http.post<any>(this.baseURL+this.searchCandidateUrl, searchQuery, httpOptions)
      .pipe(
        
      );
  }
}
