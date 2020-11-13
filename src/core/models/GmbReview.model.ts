import { IGetAllReviewsApiResponse, IReviewProps, StarRating } from "../contracts/IGmbReviews.repository"

export class GmbReviewsPageModel implements IGmbReviewsPageProps{
    reviews: GmbReviewModel[]
    averageRating: number
    totalReviewCount: number

    constructor(data: IGmbReviewsPageProps){
        this.reviews = data.reviews.map(
            review => new GmbReviewModel(review)
        )
        
        this.averageRating = data.averageRating
        this.totalReviewCount = data.totalReviewCount
    }

    static empty(){
        return new GmbReviewsPageModel({
            reviews: [],
            averageRating: null,
            totalReviewCount: null
        })
    }

    static fromApiResponse(data: IGetAllReviewsApiResponse){
        return new GmbReviewsPageModel(data)
    }
}

export interface IGmbReviewsPageProps{
    reviews: GmbReviewModel[]
    averageRating: number
    totalReviewCount: number
}

export class GmbReviewModel implements IGmbReviewModelProps{
    
    constructor(data: IGmbReviewModelProps){
        this.reviewId = data.reviewId
        this.reviewer = data.reviewer
        this.starRating = data.starRating
        this.createTime = data.createTime
        this.updateTime = data.updateTime
        this.name = data.name
    }

    reviewId: string
    reviewer: {
        profilePhotoUrl: string
        displayName: string
    }
    starRating: StarRating
    createTime: string
    updateTime: string
    name: string

    static fromApiResponse(data: IReviewProps): GmbReviewModel {
        return new GmbReviewModel({
            reviewId: data.reviewId,
            reviewer: data.reviewer,
            starRating: data.starRating,
            createTime: data.createTime,
            updateTime: data.updateTime,
            name: data.name
        });
    }

    static empty(): GmbReviewModel{
        return new GmbReviewModel({
            reviewId: null,
            reviewer: null,
            starRating: null,
            createTime: null,
            updateTime: null,
            name: null,
        });
    }
}

export interface IGmbReviewModelProps{
    reviewId: string
    reviewer: {
        profilePhotoUrl: string
        displayName: string
    }
    starRating: StarRating
    createTime: string
    updateTime: string
    name: string
}