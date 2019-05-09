import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribsComponent } from './cribs.component';

describe('CribsComponent', () => {
  let component: CribsComponent;
  let fixture: ComponentFixture<CribsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
