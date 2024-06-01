import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewAdsComponent } from './add-edit-view-ads.component';

describe('AddEditViewAdsComponent', () => {
  let component: AddEditViewAdsComponent;
  let fixture: ComponentFixture<AddEditViewAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditViewAdsComponent]
    });
    fixture = TestBed.createComponent(AddEditViewAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
