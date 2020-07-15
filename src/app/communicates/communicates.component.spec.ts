import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicatesComponent } from './communicates.component';

describe('CommunicatesComponent', () => {
  let component: CommunicatesComponent;
  let fixture: ComponentFixture<CommunicatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
