import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadinstComponent } from './ipadinst.component';

describe('IpadinstComponent', () => {
  let component: IpadinstComponent;
  let fixture: ComponentFixture<IpadinstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpadinstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpadinstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
