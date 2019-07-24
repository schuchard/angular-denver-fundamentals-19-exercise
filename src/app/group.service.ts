import { Injectable } from '@angular/core';
import chunk from 'lodash/chunk';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor() {}

  determineGroups(people: number, groups: number) {
    if (people > 0 && groups > 0) {
      return chunk(Array.from(new Array(people), (x, i) => i + 1), groups);
    }
  }
}
