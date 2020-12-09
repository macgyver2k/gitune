import { repositories } from './../selectors/repository.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateSearchPath } from '../actions/repository.actions';

@Component({
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent {
  repositories = this.store.select( repositories );

  constructor(private store: Store) {}

  updateSearchPath(path: string): void {
    this.store.dispatch(updateSearchPath({ path }));
  }
}
