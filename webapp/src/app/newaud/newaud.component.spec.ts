import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaudComponent } from './newaud.component';

describe('NewaudComponent', () => {
  let component: NewaudComponent;
  let fixture: ComponentFixture<NewaudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewaudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewaudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
