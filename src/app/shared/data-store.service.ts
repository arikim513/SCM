import { Injectable } from '@angular/core';
import { NoCounterService } from './no-counter.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { ScmDomain } from './scm-shared-util';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(
    private db: AngularFireDatabase,
    private counter: NoCounterService
  ) { }

  create(domain: ScmDomain, modelCreatorFn: (number) => any) {
    return this.counter.incAndGet(domain)
      .pipe(
        switchMap(no => this.findObject$(domain, no).set(modelCreatorFn(no)))
      )
  }

  findObject$<T>(domain: ScmDomain, no: number) {
    return this.db.object<T>(`/${domain}/${no}`);
  }

  findList$ByQuery<T>(domain: ScmDomain, queryKey: string, queryVal: any) {
    return this.db.list<T>(`/${domain}`, ref => ref.orderByChild(queryKey).equalTo(queryVal));
  }

  findList$ByPage<T>(domain: ScmDomain, pageNo, pageSize, totalCnt) {
    const offset = totalCnt - pageSize * (pageNo - 1);
    return this.db.list<T>(`/${domain}`, ref => ref.orderByChild('no').endAt(offset).limitToLast(pageSize)).snapshotChanges();
  }

  update(domain: ScmDomain, model: any) {
    return this.findObject$(domain, model.no).update(model);
  }

  count(domain: ScmDomain) {
    return this.counter.get(domain);
  }

}
