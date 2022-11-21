import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallescuboComponent } from './detallescubo.component';

describe('DetallescuboComponent', () => {
  let component: DetallescuboComponent;
  let fixture: ComponentFixture<DetallescuboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallescuboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallescuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
