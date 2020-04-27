import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CitoyensComponent} from './citoyens.component';

describe('CitoyensComponent', () => {
  let component: CitoyensComponent;
  let fixture: ComponentFixture<CitoyensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CitoyensComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitoyensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
