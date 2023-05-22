import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepinstComponent } from './depinst.component';

describe('DepinstComponent', () => {
  let component: DepinstComponent;
  let fixture: ComponentFixture<DepinstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepinstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepinstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
