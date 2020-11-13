
export interface IGmbReviewsStateError {
    after: "GET_ALL" | "GET_SINGLE" | "UPSERT" | "DELETE" | "UNKNOWN"
    error: any
}

export interface IGmbReviewsStateSuccess {
    after: "GET_ALL" | "GET_SINGLE" | "UPSERT" | "DELETE" | "UNKNOWN"
}
