import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-group-selector',
  templateUrl: './group-selector.component.html',
  styleUrls: ['./group-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupSelectorComponent implements OnInit {
  @Output() changePeople = new EventEmitter<number>();
  @Output() changeGroups = new EventEmitter<number>();
  people = 4;
  groups = 2;

  constructor() {}

  ngOnInit() {
    this.changePeople.next(this.people);
    this.changeGroups.next(this.groups);
  }

  sliderChange(type, { value }) {
    if (type === 'people') {
      this.people = value;
      this.changePeople.emit(value);
    }

    if (type === 'groups') {
      this.groups = value;
      this.changeGroups.emit(value);
    }
  }
}
