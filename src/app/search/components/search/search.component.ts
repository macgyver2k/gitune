import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateSearchPath } from '../../actions/search.actions';
import { repositories } from '../../selectors/search.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  repositories = this.store.select(repositories);

  constructor(private store: Store) {}

  updateSearchPath(path: string): void {
    this.store.dispatch(updateSearchPath({ path }));
  }
}
