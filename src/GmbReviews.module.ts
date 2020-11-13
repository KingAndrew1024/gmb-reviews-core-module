import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { gmbReviewsReducer } from './store/GmbReviews.reducer';
import { GmbReviewsEffects } from './store/GmbReviews.effects';
import { GmbReviewsModuleOptionsInterface, AppSettingsService } from './providers/global-params';
import { GMB_REVIEWS_SERVICE } from './services/identifiers';
import { GmbReviewsService } from './services/GmbReviews.service';
import { GmbReviewsRepository } from './repositories/GmbReviews.repository';
import { GmbReviewsStore } from './services/state/GmbReviews.store';


export const AppSettingsObject = new InjectionToken('AppSettingsObject');

export function createAppSettingsService(settings: GmbReviewsModuleOptionsInterface) {
  return new AppSettingsService(settings);
}


@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature('gmbReviews', gmbReviewsReducer),
    EffectsModule.forFeature([GmbReviewsEffects]),
  ],
  providers:[
    
  ],
  declarations: [
    // declare all components that your module uses
    //MyComponent
  ],
  exports: [
    // export the component(s) that you want others to be able to use
    //MyComponent
  ]
})
export class GmbReviewsCoreModule {
  static forRoot(config: GmbReviewsModuleOptionsInterface): ModuleWithProviders<GmbReviewsCoreModule> {
    return {
      ngModule: GmbReviewsCoreModule,
      providers: [ 
        { provide: AppSettingsObject, useValue: config },
        {
          provide: AppSettingsService,
          useFactory: (createAppSettingsService),
          deps: [AppSettingsObject]
        },
        { provide: GMB_REVIEWS_SERVICE, useClass: GmbReviewsService },
        GmbReviewsRepository,
        GmbReviewsStore
      ]
    };
  }
}

