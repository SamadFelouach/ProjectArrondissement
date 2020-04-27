import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NvcitoyenComponent} from './nvcitoyen.component';

describe('NvcitoyenComponent', () => {
  let component: NvcitoyenComponent;
  let fixture: ComponentFixture<NvcitoyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NvcitoyenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvcitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
