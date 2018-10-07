import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() headerName: object[];
  @Input() list: object[];
  @Output() selectChange: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  public selectOnChange(newValue) {
    this.selectChange.emit(newValue);
  }

  ngOnInit() {
  }

}
