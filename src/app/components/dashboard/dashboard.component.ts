import { Component, OnInit } from '@angular/core';
import { FetchDetailsServiceService } from '../../core/fetch-details-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model = {
    searchId: ''
  };
  hidden = true;
  private router;
  jobsHeader = [{
    'name': 'Company'
  }, {
    'name': 'Title'
  }, {
    'name': 'Date Posted'
  }, {
    'name': 'Status'
  }];
  shortListedHeader = [{
    'name': 'Name'
  }, {
    'name': 'Works At'
  }, {
    'name': 'Exp'
  }, {
    'name': 'CTC'
  }];
  interviewListedHeader = [{
    'name': 'Interview'
  }, {
    'name': 'Interviewer'
  }, {
    'name': 'Date'
  }, {
    'name': 'Result'
  }];
  jobsList;interviewList;shortList;
  constructor(private fetchDetailsServiceService: FetchDetailsServiceService,r: Router) { 
    this.router = r;
  }

  ngOnInit() {
  }

  fetchShortList(data:object) {
    this.fetchDetailsServiceService.getShortListedList().subscribe(response => {
      this.shortList = response;
  });
  }

  search(model: object, valid: boolean) {
    if (valid) {
      this.fetchDetailsServiceService.getJobsList().subscribe(response => {
        this.jobsList = response;
        this.interviewList = false;
        this.fetchShortList(this.jobsList.jobsList[0])
    });
    } else {
      this.hidden = false;
    }
  }

  goTolist(data: object) {
    this.fetchShortList(data);
  }

  goToInterview(data:object) {
    this.fetchDetailsServiceService.getInterviewList().subscribe(response => {
      this.interviewList = response;
  });
  }

  goToEnd(data:object) {
    console.log('Hi');
  }

}
