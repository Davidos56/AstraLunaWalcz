import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlocalizationComponent } from './eventlocalization.component';

describe('EventlocalizationComponent', () => {
  let component: EventlocalizationComponent;
  let fixture: ComponentFixture<EventlocalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventlocalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
