import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadclickComponent } from './ipadclick.component';

describe('IpadclickComponent', () => {
  let component: IpadclickComponent;
  let fixture: ComponentFixture<IpadclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpadclickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpadclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
