import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromReducer from './GmbReviews.reducer';

export const getReviewsState = createFeatureSelector<fromReducer.GmbReviewsState>('gmbReviews');

export const _getPageData = (state: fromReducer.GmbReviewsState) => state.pageData;
export const _getIsLoading = (state: fromReducer.GmbReviewsState) => state.isLoading;
export const _getReviews = (state: fromReducer.GmbReviewsState) => state.pageData.reviews;
export const _getSingleReview = (state: fromReducer.GmbReviewsState) => state.selectedId;
export const _getFilteredItems = (state: fromReducer.GmbReviewsState) => state.filteredItems;

export const getReviewsPageState = createSelector(
    getReviewsState,
    state => state
);

export const getReviewsPageData = createSelector(
    getReviewsState,
    _getPageData
);

export const getReviews = createSelector(
    getReviewsPageState,
    _getReviews
)

export const getSingleReview = createSelector(
    getReviewsPageState,
    _getSingleReview => _getSingleReview.pageData.reviews.filter(r => r.reviewId == _getSingleReview.selectedId)[0]
)

export const getIsLoading = createSelector(
    getReviewsPageState,
    _getIsLoading
)

export const getError = createSelector(
    getReviewsPageState,
    state => state.error
)

export const getFilteredReviews = createSelector(
    getReviewsPageState,
    _getFilteredItems
)

export const getReviewById = createSelector(
    getReviewsPageState,
    state => state.pageData.reviews.filter(r => r.reviewId == state.selectedId)[0]
)

export const hasBeenFetched = createSelector(
    getReviewsPageState,
    state => state.hasBeenFetched
)