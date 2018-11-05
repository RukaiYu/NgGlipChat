/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouteguardServiceService } from './RouteguardService.service';

describe('Service: RouteguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteguardServiceService]
    });
  });

  it('should ...', inject([RouteguardServiceService], (service: RouteguardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
