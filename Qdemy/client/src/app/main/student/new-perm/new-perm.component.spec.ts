import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPermComponent } from './new-perm.component';

describe('NewPermComponent', () => {
  let component: NewPermComponent;
  let fixture: ComponentFixture<NewPermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
