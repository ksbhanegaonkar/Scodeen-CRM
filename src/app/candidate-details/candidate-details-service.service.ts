import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Candidate } from '../student-registration/Candidate';



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
  getCandidateUrl = "/services/getcandidatedetails";
  payAmountUrl = "/services/payamount";


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

  getCandidate(id:number): Observable<Candidate>{
    return this.http.get<Candidate>(this.baseURL+this.getCandidateUrl+"/"+id, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', null))
      );
  }

  payAmount(candidateId:number,batchId:number, amount:number): Observable<Candidate>{
    let body  = {"candidate_id":candidateId,"batch_id":batchId,"amount":amount};
    return this.http.post<any>(this.baseURL+this.payAmountUrl,body, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', null))
      );
  }
}
