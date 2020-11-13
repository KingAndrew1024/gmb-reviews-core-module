import { Observable } from 'rxjs';

import { IHttpBasicResponse } from './IHttpBasicResponse';

export interface IGmbReviewsRepository {
    getAllReviews(locationId: number): Observable<IHttpBasicResponse<IGetAllReviewsApiResponse>>;
    getSingleReview(locationId: number): Observable<IHttpBasicResponse<any>>;
    updateReply(productId: number, reviewId: String, payload: string): Observable<any>;
    deleteReply(productId: number, reviewId: string): Observable<any>;
}


export interface IGetAllReviewsApiResponse {
    reviews: IReviewProps[],
    averageRating: number
    totalReviewCount: number
}

export interface IReviewProps {
    reviewId: string
    reviewer: {
        profilePhotoUrl: string
        displayName: string
    },
    comment: string
    starRating: StarRating
    createTime: string
    updateTime: string
    name: string
}

export enum StarRating {
    STAR_RATING_UNSPECIFIED,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE
}