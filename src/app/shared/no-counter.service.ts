import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable, pipe } from "rxjs";
import { ScmDomain } from './scm-shared-util';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoCounterService {

  constructor(private db: AngularFireDatabase) { }

  // get(domain: ScmDomain): Observable<any> {
  //   return this._getNumber$(domain).valueChanges();
  // }

  // incAndGet(domain: ScmDomain): Observable<number> {
  //   const id$ = new EventEmitter<number>();

  //   const onComlete = (err, commited, dataSnapshot) => {
  //     if (err) throw new Error('failed to increase number');
  //     if (commited) {
  //       id$.emit(dataSnapshot.val());
  //       id$.complete();
  //     }
  //   };

  //   this._getNumber$(domain).snapshotChanges().subscribe(action => action.payload.ref.transaction(num => (num || 0) + 1, onComlete));
  //   return id$;
  // }

  get(domain: ScmDomain): Observable<any> {
    return this._getNumber$(domain).snapshotChanges().pipe(
      map(action => action.payload.val() || 0)
    )
  }

  incAndGet(domain: ScmDomain): Observable<number> {
    const id$ = new EventEmitter<number>();

    const onComplete = (err, comitted, dataSnapshot) => {
      if (err) throw new Error(`failed to increase number`);

      if (comitted) {
        id$.emit(dataSnapshot.val());
        id$.complete();
      }
    };
    this._getNumber$(domain).query.ref.transaction(num => (num || 0) + 1, onComplete);
    return id$;
  }

  private _getNumber$(domain: ScmDomain) {
    return this.db.object(`/number/${domain}`);
  }
}
