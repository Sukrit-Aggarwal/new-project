import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudservicesComponent } from './audservices.component';

describe('AudservicesComponent', () => {
  let component: AudservicesComponent;
  let fixture: ComponentFixture<AudservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
