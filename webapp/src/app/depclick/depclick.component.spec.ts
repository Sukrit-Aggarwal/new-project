import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepclickComponent } from './depclick.component';

describe('DepclickComponent', () => {
  let component: DepclickComponent;
  let fixture: ComponentFixture<DepclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepclickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
