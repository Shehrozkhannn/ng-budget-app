import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListSectionComponent } from './edit-list-section.component';

describe('EditListSectionComponent', () => {
  let component: EditListSectionComponent;
  let fixture: ComponentFixture<EditListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditListSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
