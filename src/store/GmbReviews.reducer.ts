import { createReducer, on, Action } from '@ngrx/store';
import * as fromActions from './GmbReviews.actions';
import { GmbReviewsPageModel, GmbReviewModel } from '../core/models/GmbReview.model';
import { IGmbReviewsStateError, IGmbReviewsStateSuccess } from '../core/contracts/IStateErrorSuccess';


export interface GmbReviewsState {
    isLoading: boolean
    hasBeenFetched: boolean
    pageData: GmbReviewsPageModel
    filteredItems: GmbReviewModel[]
    selectedId: string
    error: IGmbReviewsStateError,
    success: IGmbReviewsStateSuccess
}

export const initialState: GmbReviewsState = {
    isLoading: false,
    hasBeenFetched: false,
    pageData: GmbReviewsPageModel.empty(),
    filteredItems: [],
    selectedId: null,
    error: null,
    success: null
}

const reducer = createReducer(
    initialState,

    //On Begin Actions
    on(
        fromActions.GetAllReviewsBeginAction,
        fromActions.GetSingleReviewBeginAction,
        fromActions.UpsertReviewBeginAction,
        fromActions.DeleteReviewBeginAction,
        (state): GmbReviewsState => ({
        ...state,
        isLoading: true
    })),

    //ON Success Actions
    on(fromActions.GetAllReviewsSuccessAction, (state, action): GmbReviewsState => ({
        ...state,
        isLoading: false,
        hasBeenFetched: true,
        pageData: action.data,
        success: { after: getActionType(action.type) }
    })),
    /*on(fromActions.GetSingleReviewSuccessAction, (state, action): GmbReviewsState => ({
        ...state,
        isLoading: false,
        hasBeenFetched: true,
        pageData: action.data,
        success: { after: getActionType(action.type) }
    })),*/
    on(fromActions.UpsertReviewSuccessAction, (state, action): GmbReviewsState => ({
        ...state,
        isLoading: false,
        pageData: {
            ...state.pageData,
            //Todo: insert/update the review
        },
        success: { after: getActionType(action.type) }
    })),
    on(fromActions.DeleteReviewSuccessAction, (state, action): GmbReviewsState => ({
        ...state,
        isLoading: false,
        pageData: {
            ...state.pageData,
            //Todo: remove the record
        },
        success: { after: getActionType(action.type) }
    })),

    //ON Error Actions
    on(
        fromActions.GetAllReviewsFailAction,
        fromActions.GetSingleReviewFailAction,
        fromActions.UpsertReviewFailAction,
        fromActions.DeleteReviewFailAction,
        (state, action): GmbReviewsState => ({
        ...state,
        isLoading: false,
        error: { after: getActionType(action.type), error: action.errors }
    })),
)

function getActionType(type: fromActions.GmbReviewsActionTypes) {

    let action: "GET_ALL" | "GET_SINGLE" | "UPSERT" | "DELETE" | "UNKNOWN" = "UNKNOWN";

    switch (type) {
        case fromActions.GmbReviewsActionTypes.GetAllReviewsFail:
        case fromActions.GmbReviewsActionTypes.GetAllReviewsSuccess:
            action = "GET_ALL"; break;
        case fromActions.GmbReviewsActionTypes.GetSingleReviewFail:
        case fromActions.GmbReviewsActionTypes.GetSingleReviewSuccess:
            action = 'GET_SINGLE'; break;
        case fromActions.GmbReviewsActionTypes.UpsertReplyFail:
        case fromActions.GmbReviewsActionTypes.UpsertReplySuccess:
            action = 'UPSERT'; break;
        case fromActions.GmbReviewsActionTypes.DeleteReplyFail:
        case fromActions.GmbReviewsActionTypes.DeleteReplySuccess:
            action = 'DELETE'; break;
    }

    return action;
}

export function gmbReviewsReducer(state: GmbReviewsState | undefined, action: Action) {
    return reducer(state, action);
}