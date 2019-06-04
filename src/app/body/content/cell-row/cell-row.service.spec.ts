import { TestBed } from '@angular/core/testing';

import { CellRowService } from './cell-row.service';

describe('CellRowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CellRowService = TestBed.get(CellRowService);
    expect(service).toBeTruthy();
  });
});
