import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompinstComponent } from './compinst.component';

describe('CompinstComponent', () => {
  let component: CompinstComponent;
  let fixture: ComponentFixture<CompinstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompinstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompinstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
