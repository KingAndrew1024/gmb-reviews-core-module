import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import * as fromActions from './GmbReviews.actions';
import * as fromReducer from './GmbReviews.reducer';
import { GMB_REVIEWS_SERVICE } from '../services/identifiers';
import { IGmbReviewsService } from '../core/contracts/IGmbReviews.service';


@Injectable()
export class GmbReviewsEffects {
    loadAll$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromActions.GmbReviewsActionTypes.GetAllReviewsBegin),
            switchMap((action: any) => {
                return this.service.getAllReviews(action.locationId).pipe(
                    map((data) => fromActions.GetAllReviewsSuccessAction({ data })),
                    catchError(error => {
                        console.error("Couldn't get Reviews", error);
                        return of(fromActions.GetAllReviewsFailAction({ errors: error }));
                    })
                )
            })
        )
    );



    constructor(
        private actions$: Actions,
        private store$: Store<AppState>,
        @Inject(GMB_REVIEWS_SERVICE) private service: IGmbReviewsService
    ) { }
}

 interface AppState {
    Reviews: fromReducer.GmbReviewsState,
}