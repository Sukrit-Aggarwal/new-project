import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepinstclickComponent } from './depinstclick.component';

describe('DepinstclickComponent', () => {
  let component: DepinstclickComponent;
  let fixture: ComponentFixture<DepinstclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepinstclickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepinstclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
