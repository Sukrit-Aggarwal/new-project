import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompinstclickComponent } from './compinstclick.component';

describe('CompinstclickComponent', () => {
  let component: CompinstclickComponent;
  let fixture: ComponentFixture<CompinstclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompinstclickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompinstclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
