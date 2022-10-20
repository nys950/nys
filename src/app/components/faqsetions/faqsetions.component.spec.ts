import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsetionsComponent } from './faqsetions.component';

describe('FaqsetionsComponent', () => {
  let component: FaqsetionsComponent;
  let fixture: ComponentFixture<FaqsetionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsetionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqsetionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
