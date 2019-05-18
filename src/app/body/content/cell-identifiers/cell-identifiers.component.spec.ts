import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellIdentifiersComponent } from './cell-identifiers.component';

describe('CellIdentifiersComponent', () => {
  let component: CellIdentifiersComponent;
  let fixture: ComponentFixture<CellIdentifiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellIdentifiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellIdentifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
