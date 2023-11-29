import { TestBed } from '@angular/core/testing';

import { CourseAddService } from './course.add.service';

describe('CourseAddService', () => {
  let service: CourseAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
