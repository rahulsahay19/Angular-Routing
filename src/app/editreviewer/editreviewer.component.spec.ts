import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreviewerComponent } from './editreviewer.component';

describe('EditreviewerComponent', () => {
  let component: EditreviewerComponent;
  let fixture: ComponentFixture<EditreviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditreviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
