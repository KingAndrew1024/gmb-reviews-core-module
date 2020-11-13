import { InjectionToken } from '@angular/core';

import { IGmbReviewsService } from '../core/contracts/IGmbReviews.service';

export const GMB_REVIEWS_SERVICE = new InjectionToken<IGmbReviewsService>('GmbReviewsService');

