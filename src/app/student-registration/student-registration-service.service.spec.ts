import { TestBed } from '@angular/core/testing';

import { StudentRegistrationServiceService } from './student-registration-service.service';

describe('StudentRegistrationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentRegistrationServiceService = TestBed.get(StudentRegistrationServiceService);
    expect(service).toBeTruthy();
  });
});
