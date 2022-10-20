import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalltoactionsComponent } from './calltoactions.component';

describe('CalltoactionsComponent', () => {
  let component: CalltoactionsComponent;
  let fixture: ComponentFixture<CalltoactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalltoactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalltoactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
