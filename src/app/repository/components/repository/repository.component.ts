import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { startPlayback } from 'src/app/playback/actions/playback.actions';
import { branchCommits, branches } from '../../selectors/repository.selectors';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  branches = this.store.select( branches );

  getCommits( branch: string ) {
    return this.store.select( branchCommits, { branch }  );
  }

  constructor( private store: Store ) { }

  ngOnInit() {
  }

  play() {
    this.store.dispatch( startPlayback() );
  }

}
