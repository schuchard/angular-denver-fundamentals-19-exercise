import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-display',
  templateUrl: './group-display.component.html',
  styleUrls: ['./group-display.component.scss'],
})
export class GroupDisplayComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit() {}
}
