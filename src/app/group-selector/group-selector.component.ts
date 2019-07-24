import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-group-selector',
  templateUrl: './group-selector.component.html',
  styleUrls: ['./group-selector.component.scss'],
})
export class GroupSelectorComponent implements OnInit {
  @Output() changePeople = new EventEmitter<number>();
  @Output() changeGroups = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  sliderChange(type, { value }) {
    if (type === 'people') {
      this.changePeople.emit(value);
    }

    if (type === 'groups') {
      this.changeGroups.emit(value);
    }
  }
}
