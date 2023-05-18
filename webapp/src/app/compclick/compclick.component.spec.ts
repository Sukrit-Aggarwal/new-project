import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompclickComponent } from './compclick.component';

describe('CompclickComponent', () => {
  let component: CompclickComponent;
  let fixture: ComponentFixture<CompclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompclickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
