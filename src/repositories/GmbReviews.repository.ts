import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppSettingsService } from '../providers/global-params';
import { IHttpBasicResponse } from '../core/contracts/IHttpBasicResponse';
import { IGetAllReviewsApiResponse, IGmbReviewsRepository } from '../core/contracts/IGmbReviews.repository';

@Injectable()
export class GmbReviewsRepository implements IGmbReviewsRepository {
    //readonly BASE_URL = `${this.appSettings.getApiUrl()}/api/${this.appSettings.getInstanceName()}/v1/leads`;
    readonly BASE_URL = `${this.appSettings.getApiUrl()}/test`;

    constructor(private httpClient: HttpClient,
        private appSettings: AppSettingsService) { }


    getAllReviews(locationId: number): Observable<IHttpBasicResponse<IGetAllReviewsApiResponse>> {
        //console.log("--- EXECUTING GmbReviewsRepository.getMessages()");
        
        /*return this.httpClient.post<IHttpBasicResponse<IGetAllReviewsApiResponse>>(
            `${this.BASE_URL}/get_all_reviews`, JSON.stringify({location: locationId.toString()})
        )*/

        return new Observable(subscriber => {
            subscriber.next({
                data: {
                    reviews: [
                        {
                            reviewId: "AIe9_BGvUJd9etQojwpjZIMsiFnebKQ1TkhM0tSanct6PNrGyWPyRRPhR8QiRwiJcJooFIp7_38RLN7wqM3Ho6d7dC5Y9r0Z_j34fPkQEV4VVEHcm07ZdSc",
                            reviewer: {
                                "profilePhotoUrl": "https://lh3.googleusercontent.com/a-/AOh14GhHYdK2h-8cHEUv8uOlSXAoJ91HrjrKRfdwA9aM=c0x00000000-cc-rp",
                                "displayName": "Andrés Vergara Bahena"
                            },
                            "starRating": 4,
                            "comment": "Hola tengo dudas de como funciona su servicio :)",
                            "createTime": "2020-11-12T16:49:14.374Z",
                            "updateTime": "2020-11-12T16:49:14.374Z",
                            "name": "accounts/107517617815238478558/locations/4901892414870329246/reviews/AIe9_BGvUJd9etQojwpjZIMsiFnebKQ1TkhM0tSanct6PNrGyWPyRRPhR8QiRwiJcJooFIp7_38RLN7wqM3Ho6d7dC5Y9r0Z_j34fPkQEV4VVEHcm07ZdSc"
                        }
                    ],
                    averageRating: 4,
                    totalReviewCount: 2
                },
                status: 'success'
            })
        })
    }

    getSingleReview(locationId: number): Observable<IHttpBasicResponse<any>> {
        throw new Error('Method not implemented.');
    }

    updateReply(productId: number, reviewId: String, payload: string): Observable<any> {
        throw new Error('Method not implemented.');
    }
    
    deleteReply(productId: number, reviewId: string): Observable<any> {
        throw new Error('Method not implemented.');
    }
}