import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventplanComponent } from './eventplan.component';

describe('EventplanComponent', () => {
  let component: EventplanComponent;
  let fixture: ComponentFixture<EventplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
