import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudservclickComponent } from './audservclick.component';

describe('AudservclickComponent', () => {
  let component: AudservclickComponent;
  let fixture: ComponentFixture<AudservclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudservclickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudservclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
