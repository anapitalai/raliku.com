import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribSingleComponent } from './crib-single.component';

describe('CribSingleComponent', () => {
  let component: CribSingleComponent;
  let fixture: ComponentFixture<CribSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
