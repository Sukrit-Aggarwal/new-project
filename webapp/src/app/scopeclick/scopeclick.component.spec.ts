import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeclickComponent } from './scopeclick.component';

describe('ScopeclickComponent', () => {
  let component: ScopeclickComponent;
  let fixture: ComponentFixture<ScopeclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopeclickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopeclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
