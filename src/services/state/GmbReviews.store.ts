import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromSelector from '../../store/GmbReviews.selectors';
import * as fromActions from '../../store/GmbReviews.actions';
import * as fromReducer from '../../store/GmbReviews.reducer';


@Injectable()
export class GmbReviewsStore {
    constructor(private store: Store<fromReducer.GmbReviewsState>) { }

    get Loading$() { return this.store.select(fromSelector.getIsLoading) }

    get Error$() {
        return this.store.select(fromSelector.getError);
    }

    loadAllReviewsPage(locationId: number) {
        return this.store.dispatch(fromActions.GetAllReviewsBeginAction({ locationId }))
    }

    get ReviewsPageData$() {
        return this.store.select(fromSelector.getReviewsPageData);
    }

    get HasBeenFetched$() {
        return this.store.select(fromSelector.hasBeenFetched);
    }
}