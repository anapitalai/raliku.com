import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribFormComponent } from './crib-form.component';

describe('CribFormComponent', () => {
  let component: CribFormComponent;
  let fixture: ComponentFixture<CribFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
