import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGmbReviewsService } from '../core/contracts/IGmbReviews.service';
import { GmbReviewModel, GmbReviewsPageModel } from '../core/models/GmbReview.model';
import { GmbReviewsRepository } from '../repositories/GmbReviews.repository';




@Injectable()
export class GmbReviewsService implements IGmbReviewsService {
    constructor(private repository: GmbReviewsRepository,
        /*private errorHandler: RepositoryErrorHandler*/) { }


    getAllReviews(locationId: number): Observable<GmbReviewsPageModel> {

        return this.repository.getAllReviews(locationId).pipe(
            map(response => {
                //this.errorHandler.handle(response);
                return GmbReviewsPageModel.fromApiResponse(response.data)
            })
        )
    }

    replyToReview(productId: number, reviewId: String, payload: string): Observable<any> {
        throw new Error('Method not implemented.');
    }
    deleteReview(productId: number, reviewId: string): Observable<any> {
        throw new Error('Method not implemented.');
    }

}