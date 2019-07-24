import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { combineLatest, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  people$ = new BehaviorSubject(0);
  groups$ = new BehaviorSubject(0);

  displayData$ = this.people$.pipe(
    combineLatest(this.groups$),
    map(([people, groups]) => {
      return `${people} - ${groups}`;
    })
  );

  onPeopleChange(value) {
    this.people$.next(value);
  }

  onGroupChange(value) {
    this.groups$.next(value);
  }
}
