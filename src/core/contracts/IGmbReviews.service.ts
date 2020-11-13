import { Observable } from 'rxjs';

import { GmbReviewModel, GmbReviewsPageModel } from '../models/GmbReview.model';

export interface IGmbReviewsService {
    getAllReviews(locationId: number): Observable<GmbReviewsPageModel>;
    replyToReview(productId: number, reviewId: String, payload: string): Observable<any>;
    deleteReview(productId: number, reviewId: string): Observable<any>;
}