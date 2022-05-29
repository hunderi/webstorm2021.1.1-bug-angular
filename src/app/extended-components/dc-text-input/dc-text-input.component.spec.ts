import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcTextInputComponent } from './dc-text-input.component';

describe('DcTextInputComponent', () => {
  let component: DcTextInputComponent;
  let fixture: ComponentFixture<DcTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcTextInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
