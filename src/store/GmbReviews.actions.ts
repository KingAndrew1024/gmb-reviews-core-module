import { createAction, props } from '@ngrx/store'
import { GmbReviewModel, GmbReviewsPageModel } from '../core/models/GmbReview.model'

export enum GmbReviewsActionTypes {
    GetAllReviewsBegin = "[GmbReviews] Get All Reviews begin",
    GetAllReviewsSuccess = "[GmbReviews] Get All Reviews success",
    GetAllReviewsFail = "[GmbReviews] Get All Reviews failure",

    GetSingleReviewBegin = "[GmbReviews] Get Single Review begin",
    GetSingleReviewSuccess = "[GmbReviews] Get Single Review success",
    GetSingleReviewFail = "[GmbReviews] Get Single Review failure",

    UpsertReplyBegin = "[GmbReviews] Upsert Reply Begin",
    UpsertReplySuccess = "[GmbReviews] Upsert Reply Success",
    UpsertReplyFail = "[GmbReviews] Upsert Reply failure",

    DeleteReplyBegin = "[GmbReviews] Delete Reply Begin",
    DeleteReplySuccess = "[GmbReviews] Delete Reply Success",
    DeleteReplyFail = "[GmbReviews] Delete Reply Fail",
}

// GET All Reviews from remote API
export const GetAllReviewsBeginAction = createAction(
    GmbReviewsActionTypes.GetAllReviewsBegin,
    props<{locationId?: number}>()
)
export const GetAllReviewsSuccessAction = createAction(
    GmbReviewsActionTypes.GetAllReviewsSuccess,
    props<{ data: GmbReviewsPageModel }>()
)
export const GetAllReviewsFailAction = createAction(
    GmbReviewsActionTypes.GetAllReviewsFail,
    props<{ errors: any }>()
)

// GET Single Reviews from remote API
export const GetSingleReviewBeginAction = createAction(
    GmbReviewsActionTypes.GetSingleReviewBegin,
    props<{locationId?: number, reviewId: string}>()
)
export const GetSingleReviewSuccessAction = createAction(
    GmbReviewsActionTypes.GetSingleReviewSuccess,
    props<{ data: GmbReviewModel }>()
)
export const GetSingleReviewFailAction = createAction(
    GmbReviewsActionTypes.GetSingleReviewFail,
    props<{ errors: any }>()
)

// Upsert Review
export const UpsertReviewBeginAction = createAction(
    GmbReviewsActionTypes.UpsertReplyBegin,
    props<{locationId?: number, reviewId: string}>()
)
export const UpsertReviewSuccessAction = createAction(
    GmbReviewsActionTypes.UpsertReplySuccess,
    props<{comment: string, updateTime: string}>()
)
export const UpsertReviewFailAction = createAction(
    GmbReviewsActionTypes.UpsertReplyFail,
    props<{ errors: any }>()
)

// Delete Review
export const DeleteReviewBeginAction = createAction(
    GmbReviewsActionTypes.DeleteReplyBegin,
    props<{locationId?: number, reviewId: string}>()
)
export const DeleteReviewSuccessAction = createAction(
    GmbReviewsActionTypes.DeleteReplySuccess
)
export const DeleteReviewFailAction = createAction(
    GmbReviewsActionTypes.DeleteReplyFail,
    props<{ errors: any }>()
)