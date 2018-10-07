import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable()
export class FetchDetailsServiceService {

  constructor(private http:HttpClient) { }
  public getJobsList(){
    return this.http.get('../../assets/json/jobs.json');
  }
  public getShortListedList(){
    return this.http.get('../../assets/json/shortlisted.json');
  }
  public getInterviewList(){
    return this.http.get('../../assets/json/interviews.json');
  }
}
